// AI_Monitor.js
class SmartErrorMonitor {
    constructor() {
        this.errorLog = [];
        this.initListeners();
    }

    initListeners() {
        window.addEventListener('error', (event) => {
            this.analyzeAndReport('Syntax/Runtime Error', event.message, event.filename, event.lineno);
        });

        window.addEventListener('unhandledrejection', (event) => {
            this.analyzeAndReport('Unhandled Promise', event.reason, 'Unknown', 'Unknown');
        });

        this.interceptFetch();
    }

    interceptFetch() {
        const originalFetch = window.fetch;
        window.fetch = async (...args) => {
            try {
                const response = await originalFetch(...args);
                if (!response.ok) {
                    this.analyzeAndReport('Network Error', `API Failed: ${response.status}`, 'Network', 0);
                }
                return response;
            } catch (err) {
                this.analyzeAndReport('Fetch Failure', err.message, 'Network', 0);
                throw err;
            }
        };
    }

    analyzeAndReport(type, message, file, line) {
        const errorData = {
            type, message, file, line,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };
        
        console.warn('🤖 [مراقب الأخطاء]: تم رصد خطأ بصمت.', errorData);
        this.errorLog.push(errorData);
        
        // هنا يمكنك تفعيل إرسال الأخطاء للخادم لاحقاً
        // fetch('/api/log-error', { method: 'POST', body: JSON.stringify(errorData) }).catch(e => {});
    }
}

// تفعيل المراقب فور تحميل الملف
const globalErrorMonitor = new SmartErrorMonitor();
