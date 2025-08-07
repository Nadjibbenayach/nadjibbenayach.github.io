const map = L.map('map').setView([36.7267, 5.8194], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// محطة انطلاق + المحطات الأخرى
const stops = [
  { name: "مكان الانطلاق", lat: 36.7278, lon: 5.8194 },
  { name: "المحطة 1", lat: 36.7292, lon: 5.8208 },
  { name: "المحطة 2", lat: 36.7300, lon: 5.8219 },
  { name: "المحطة 3", lat: 36.7311, lon: 5.8222 },
  // ... أكمل باقي المحطات
  { name: "نقطة الوصول", lat: 36.8092, lon: 5.7733 }
];

stops.forEach(stop => {
  L.marker([stop.lat, stop.lon]).addTo(map).bindPopup(stop.name);
});

const latlngs = stops.map(stop => [stop.lat, stop.lon]);
L.polyline(latlngs, { color: 'blue' }).addTo(map);