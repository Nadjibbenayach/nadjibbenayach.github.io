<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>خط العيايشة - جيجل</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    body { margin: 0; font-family: sans-serif; background: #f5f5f5; }
    #map { height: 90vh; width: 100vw; }
    header {
      background: #2c3e50;
      color: white;
      padding: 10px;
      text-align: center;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <header>🚌 خط العيايشة - جيجل</header>
  <div id="map"></div>  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>  <script>
    const map = L.map('map').setView([36.7833, 5.812], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const stations = [
      { name: "المحطة 1", coords: [36.768373, 5.811485] },
      { name: "المحطة 2", coords: [36.770047, 5.811220] },
      { name: "المحطة 3", coords: [36.771112, 5.810657] },
      { name: "المحطة 4", coords: [36.771885, 5.810428] },
      { name: "المحطة 5", coords: [36.772993, 5.810103] },
      { name: "المحطة 6", coords: [36.774264, 5.810233] },
      { name: "المحطة 7", coords: [36.775124, 5.810600] },
      { name: "المحطة 8", coords: [36.775899, 5.811032] },
      { name: "المحطة 9", coords: [36.777276, 5.811416] },
      { name: "المحطة 10", coords: [36.778093, 5.811682] },
      { name: "المحطة 11", coords: [36.778730, 5.811779] },
      { name: "المحطة 12", coords: [36.779324, 5.812103] },
      { name: "المحطة 13", coords: [36.779951, 5.812479] },
      { name: "المحطة 14", coords: [36.780611, 5.811771] },
      { name: "المحطة 15", coords: [36.774994, 5.812891] },
      { name: "المحطة 16", coords: [36.775594, 5.813121] },
      { name: "المحطة 17", coords: [36.782789, 5.814356] },
      { name: "المحطة 18", coords: [36.793008, 5.809060] },
      { name: "المحطة 19", coords: [36.795659, 5.806782] },
      { name: "المحطة 20", coords: [36.797845, 5.806572] },
      { name: "المحطة 21", coords: [36.800297, 5.801676] },
      { name: "المحطة 22", coords: [36.803634, 5.795354] },
      { name: "المحطة 23", coords: [36.807203, 5.785660] },
      { name: "المحطة 24", coords: [36.808054, 5.779776] },
      { name: "نقطة الوصول", coords: [36.809134, 5.773293] }
    ];

    const routeCoords = stations.map(s => s.coords);
    const route = L.polyline(routeCoords, { color: 'blue' }).addTo(map);
    map.fitBounds(route.getBounds());

    stations.forEach((station, index) => {
      L.marker(station.coords).addTo(map)
        .bindPopup(`<b>${station.name}</b><br>ترتيب: ${index + 1}`);
    });
  </script></body>
</html>