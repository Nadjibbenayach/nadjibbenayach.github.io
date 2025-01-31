<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مدير المهام الذكي</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* أنماط عامة */
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --success-color: #27ae60;
            --danger-color: #e74c3c;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: #f5f6fa;
            color: var(--primary-color);
            line-height: 1.6;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        /* هيدر التطبيق */
        .app-header {
            text-align: center;
            padding: 2rem 0;
            background: var(--primary-color);
            color: white;
            border-radius: 15px;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* نموذج الإضافة */
        .add-task-form {
            display: grid;
            gap: 10px;
            margin-bottom: 2rem;
            position: relative;
        }

        .input-group {
            display: grid;
            gap: 5px;
        }

        input, select, button {
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            width: 100%;
            transition: all 0.3s ease;
        }

        input:focus, select:focus {
            outline: none;
            border-color: var(--secondary-color);
            box-shadow: 0 0 8px rgba(52, 152, 219, 0.3);
        }

        .btn {
            background: var(--secondary-color);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .btn:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }

        /* قائمة المهام */
        .task-list {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .task-item {
            display: flex;
            align-items: center;
            padding: 15px;
            margin: 10px 0;
            background: #f8f9fa;
            border-radius: 8px;
            transition: all 0.3s ease;
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from { transform: translateX(20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        .task-item:hover {
            transform: translateX(5px);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }

        .task-content {
            flex-grow: 1;
            margin: 0 15px;
        }

        .task-actions {
            display: flex;
            gap: 10px;
        }

        .complete-checkbox {
            width: 20px;
            height: 20px;
            accent-color: var(--success-color);
        }

        .delete-btn {
            background: var(--danger-color);
            padding: 8px 12px;
        }

        .priority {
            font-size: 0.8em;
            padding: 4px 8px;
            border-radius: 4px;
            margin-right: 10px;
        }

        .low { background: #27ae6020; color: #27ae60; }
        .medium { background: #f1c40f20; color: #f1c40f; }
        .high { background: #e74c3c20; color: #e74c3c; }

        /* الفلاتر */
        .filters {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            overflow-x: auto;
            padding-bottom: 10px;
        }

        .filter-btn {
            background: white;
            color: var(--primary-color);
            border: 2px solid #ddd;
            white-space: nowrap;
        }

        .filter-btn.active {
            border-color: var(--secondary-color);
            color: var(--secondary-color);
        }

        /* إحصائيات */
        .stats {
            text-align: center;
            padding: 15px;
            background: white;
            border-radius: 8px;
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
        }

        /* تصميم للهواتف */
        @media (max-width: 480px) {
            .container {
                padding: 10px;
            }

            .add-task-form {
                grid-template-columns: 1fr;
            }

            .task-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }

            .task-actions {
                width: 100%;
                justify-content: space-between;
            }
        }

        /* تخصيص شريط التمرير */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }

        /* رسوم متحركة للحذف */
        @keyframes slideOut {
            to { transform: translateX(100%); opacity: 0; }
        }

        .deleting {
            animation: slideOut 0.3s ease forwards;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="app-header">
            <h1>مدير المهام الذكي 📝</h1>
            <p>نظّم يومك بكفاءة مع مدير المهام المتطور</p>
        </header>

        <section class="add-task-form">
            <div class="input-group">
                <input type="text" id="taskInput" placeholder="أضف مهمة جديدة...">
                <small class="char-counter"><span id="charCount">0</span>/120</small>
            </div>
            <div class="input-group">
                <select id="prioritySelect">
                    <option value="low">أولوية منخفضة</option>
                    <option value="medium">أولوية متوسطة</option>
                    <option value="high">أولوية عالية</option>
                </select>
            </div>
            <button class="btn" id="addTaskBtn">
                <i class="fas fa-plus"></i>
                إضافة المهمة
            </button>
        </section>

        <div class="filters">
            <button class="filter-btn active" data-filter="all">الكل</button>
            <button class="filter-btn" data-filter="completed">مكتمل</button>
            <button class="filter-btn" data-filter="active">غير مكتمل</button>
            <button class="filter-btn" data-filter="high">عالي الأهمية</button>
        </div>

        <div class="task-list" id="taskList"></div>

        <div class="stats">
            <div class="stat-item">
                <h3>المهام الكلية</h3>
                <p id="totalTasks">0</p>
            </div>
            <div class="stat-item">
                <h3>المكتملة</h3>
                <p id="completedTasks">0</p>
            </div>
            <div class="stat-item">
                <h3>النسبة المئوية</h3>
                <p id="completionPercentage">0%</p>
            </div>
        </div>
    </div>

    <script>
        // فئة إدارة المهام
        class TaskManager {
            constructor() {
                this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                this.currentFilter = 'all';
                this.init();
            }

            init() {
                this.render();
                this.setupEventListeners();
                this.updateStats();
            }

            saveToLocalStorage() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }

            addTask(text, priority) {
                if (text.trim() && text.length <= 120) {
                    const newTask = {
                        id: Date.now(),
                        text,
                        priority,
                        completed: false,
                        createdAt: new Date().toISOString()
                    };
                    this.tasks.unshift(newTask);
                    this.saveToLocalStorage();
                    this.render();
                    this.updateStats();
                }
            }

            deleteTask(taskId) {
                this.tasks = this.tasks.filter(task => task.id !== taskId);
                this.saveToLocalStorage();
                this.render();
                this.updateStats();
            }

            toggleComplete(taskId) {
                this.tasks = this.tasks.map(task => 
                    task.id === taskId ? { ...task, completed: !task.completed } : task
                );
                this.saveToLocalStorage();
                this.render();
                this.updateStats();
            }

            filterTasks(filter) {
                this.currentFilter = filter;
                this.render();
                document.querySelectorAll('.filter-btn').forEach(btn => 
                    btn.classList.toggle('active', btn.dataset.filter === filter)
                );
            }

            render() {
                const filteredTasks = this.tasks.filter(task => {
                    if (this.currentFilter === 'completed') return task.completed;
                    if (this.currentFilter === 'active') return !task.completed;
                    if (this.currentFilter === 'high') return task.priority === 'high';
                    return true;
                });

                const tasksHtml = filteredTasks.map(task => `
                    <div class="task-item" data-id="${task.id}">
                        <input type="checkbox" 
                               class="complete-checkbox" 
                               ${task.completed ? 'checked' : ''}>
                        <div class="task-content">
                            <span class="priority ${task.priority}">
                                ${this.getPriorityLabel(task.priority)}
                            </span>
                            ${task.completed ? `<s>${task.text}</s>` : task.text}
                            <small class="task-date">
                                ${new Date(task.createdAt).toLocaleDateString('ar-EG')}
                            </small>
                        </div>
                        <div class="task-actions">
                            <button class="btn delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `).join('');

                document.getElementById('taskList').innerHTML = tasksHtml;
            }

            getPriorityLabel(priority) {
                const labels = {
                    low: 'منخفضة',
                    medium: 'متوسطة',
                    high: 'عالية'
                };
                return labels[priority];
            }

            updateStats() {
                const total = this.tasks.length;
                const completed = this.tasks.filter(t => t.completed).length;
                const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

                document.getElementById('totalTasks').textContent = total;
                document.getElementById('completedTasks').textContent = completed;
                document.getElementById('completionPercentage').textContent = `${percentage}%`;
            }

            setupEventListeners() {
                // إضافة مهمة
                document.getElementById('addTaskBtn').addEventListener('click', () => {
                    const input = document.getElementById('taskInput');
                    const priority = document.getElementById('prioritySelect').value;
                    this.addTask(input.value, priority);
                    input.value = '';
                });

                // أحداث التفاعل
                document.getElementById('taskList').addEventListener('click', (e) => {
                    const taskItem = e.target.closest('.task-item');
                    if (!taskItem) return;

                    const taskId = parseInt(taskItem.dataset.id);

                    if (e.target.classList.contains('delete-btn')) {
                        taskItem.classList.add('deleting');
                        setTimeout(() => this.deleteTask(taskId), 300);
                    }
                    else if (e.target.classList.contains('complete-checkbox')) {
                        this.toggleComplete(taskId);
                    }
                });

                // الفلاتر
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', () => 
                        this.filterTasks(btn.dataset.filter)
                    );
                });

                // إدخال النص
                document.getElementById('taskInput').addEventListener('input', (e) => {
                    const counter = document.getElementById('charCount');
                    counter.textContent = e.target.value.length;
                });
            }
        }

        // بدء التطبيق
        const taskManager = new TaskManager();
    </script>
</body>
</html>
