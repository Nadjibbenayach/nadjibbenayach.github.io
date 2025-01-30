<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام تتبع الحافلات</title>
    <!-- نفس الـ style السابق -->
</head>
<body>
    <div class="header">
        <h1>نظام تتبع الحافلات العامة</h1>
        <p>البحث عن الحافلات في الوقت الحقيقي</p>
    </div>

    <div id="map"></div>

    <div class="bus-info">
        <h2>قائمة الحافلات المتاحة</h2>
        <div class="bus-list" id="busList"></div>
    </div>

    <!-- إضافة Firebase وخرائط جوجل -->
    <script type="module">
        // تكوين Firebase
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
        import { getFirestore, collection, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
        
        const firebaseConfig = {
            apiKey: "AIzaSyAFYT6SVW2tz3ecpTVdYeBhZZPLAJcO0HU",
            authDomain: "bus-tracker-b8d85.firebaseapp.com",
            projectId: "bus-tracker-b8d85",
            storageBucket: "bus-tracker-b8d85.firebasestorage.app",
            messagingSenderId: "273160367379",
            appId: "1:273160367379:web:2782a5d9630d41170a3ee6",
            measurementId: "G-TZJZW1Y6XX"
        };

        // تهيئة Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // تحميل خرائط جوجل بشكل ديناميكي
        async function loadGoogleMaps() {
            const { Map } = await google.maps.importLibrary("maps");
            return Map;
        }

        // تهيئة الخريطة
        let map;
        async function initMap() {
            const Map = await loadGoogleMaps();
            map = new Map(document.getElementById("map"), {
                center: { lat: 24.7136, lng: 46.6753 },
                zoom: 12,
                mapId: 'DEMO_MAP_ID'
            });
            
            await loadBusesData();
        }

        // جلب بيانات الحافلات من Firebase
        async function loadBusesData() {
            const busesCol = collection(db, 'buses');
            onSnapshot(busesCol, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    const bus = change.doc.data();
                    updateBusOnMap(bus);
                    updateBusList(bus);
                });
            });
        }

        // تحديث الخريطة
        function updateBusOnMap(bus) {
            // كود إضافة/تحديث العلامات على الخريطة
        }

        // تحديث القائمة
        function updateBusList(bus) {
            // كود تحديث قائمة الحافلات
        }

        // بدء التطبيق
        window.initMap = initMap;
    </script>

    <script async defer 
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_KEY&callback=initMap&language=ar&region=SA">
    </script>
</body>
</html>
