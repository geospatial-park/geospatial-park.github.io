var map = L.map('map').setView([37.7749, -122.4194], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Load GeoJSON data
fetch('../data/my_map_data.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);
    });
