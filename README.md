<!DOCTYPE html><html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>خط الحافلة العيايشة - جيجل</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <style>
    body, html { margin: 0; padding: 0; height: 100%; font-family: sans-serif; }
    #map { height: 100%; }
    .station-label {
      background-color: white;
      padding: 2px 4px;
      border-radius: 4px;
      font-size: 12px;
      border: 1px solid #999;
    }
  </style>
</head>
<body>
  <div id="map"></div>  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>  <script>
    const map = L.map('map').setView([36.745, 5.812], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const stations = [
      { name: "العيايشة (نقطة البداية)", coords: [36.739722, 5.820278] },
      { name: "محطة 2", coords: [36.740556, 5.819167] },
      { name: "محطة 3", coords: [36.731111, 5.822222] },
      { name: "محطة 4", coords: [36.732778, 5.8225] },
      { name: "محطة 5", coords: [36.738611, 5.823333] },
      { name: "محطة 6", coords: [36.743611, 5.823056] },
      { name: "محطة 7", coords: [36.751944, 5.818889] },
      { name: "محطة 8", coords: [36.758056, 5.816667] },
      { name: "محطة 9", coords: [36.761389, 5.814722] },
      { name: "محطة 10", coords: [36.765, 5.813889] },
      { name: "محطة 11", coords: [36.766667, 5.811667] },
      { name: "محطة 12", coords: [36.766944, 5.809167] },
      { name: "محطة 13", coords: [36.768889, 5.811389] },
      { name: "محطة 14", coords: [36.771667, 5.811111] },
      { name: "محطة 15", coords: [36.773889, 5.812778] },
      { name: "محطة 16", coords: [36.775556, 5.813333] },
      { name: "محطة 17", coords: [36.782778, 5.814167] },
      { name: "محطة 18", coords: [36.793056, 5.808889] },
      { name: "محطة 19", coords: [36.795556, 5.806667] },
      { name: "محطة 20", coords: [36.797778, 5.806389] },
      { name: "محطة 21", coords: [36.800278, 5.801667] },
      { name: "محطة 22", coords: [36.803611, 5.795278] },
      { name: "محطة 23", coords: [36.807222, 5.785556] },
      { name: "محطة 24", coords: [36.808056, 5.779722] },
      { name: "جيجل (نقطة الوصول)", coords: [36.809167, 5.773333] }
    ];

    const stationLatLngs = [];

    stations.forEach(station => {
      const marker = L.marker(station.coords).addTo(map);
      marker.bindPopup(`<div class='station-label'>${station.name}</div>`);
      stationLatLngs.push(station.coords);
    });

    // رسم خط المسار
    const route = L.polyline(stationLatLngs, { color: 'blue' }).addTo(map);
    map.fitBounds(route.getBounds());
  </script></body>
</html>