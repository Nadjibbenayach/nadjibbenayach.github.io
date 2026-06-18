// AIBusValidator.js
class AIBusMovementValidator {
    constructor() {
        this.busesState = {}; 
        this.maxLogicalSpeedKmH = 120; // أقصى سرعة منطقية (120 كم/ساعة)
    }

    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; 
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c; 
    }

    validateMovement(busId, newLat, newLng) {
        const currentTime = Date.now();
        const previousState = this.busesState[busId];

        if (previousState) {
            const timeDiffHours = (currentTime - previousState.time) / (1000 * 60 * 60);
            const distanceKm = this.calculateDistance(previousState.lat, previousState.lng, newLat, newLng);
            
            if (timeDiffHours > 0.0001) {
                const calculatedSpeed = distanceKm / timeDiffHours;

                if (calculatedSpeed > this.maxLogicalSpeedKmH) {
                    console.error(`🤖 [AI Bus]: تنبيه! حافلة ${busId} تتحرك بسرعة مستحيلة (${calculatedSpeed.toFixed(0)} كم/س). تم حظر الحركة لمنع تشوه الواجهة.`);
                    return false; // الحركة غير منطقية (خطأ GPS أو خوارزمية)
                }
            }
        }

        this.busesState[busId] = {
            lat: newLat,
            lng: newLng,
            time: currentTime,
            isMoving: true
        };
        
        return true; // الحركة منطقية
    }
}

// تفعيل النظام
const aiBusValidator = new AIBusMovementValidator();

// دالة مساعدة لتستخدمها في مشروعك الأساسي عند تلقي إحداثيات جديدة
window.processNewBusLocation = function(busId, lat, lng) {
    const isValid = aiBusValidator.validateMovement(busId, lat, lng);
    
    if (isValid) {
        // اكتب هنا كود تحريك الحافلة الخاص بك
        // مثال: updateBusMarkerOnMap(busId, lat, lng);
        console.log(`✅ حافلة ${busId} تحركت بشكل منطقي.`);
    }
};
