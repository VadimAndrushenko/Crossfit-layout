const LAT = 55.7558;
const LNG = 37.6173;
const ZOOM = 11;

const map = L.map('map', {
  center: [LAT, LNG],
  zoom: ZOOM,
  scrollWheelZoom: false,
  zoomControl: true
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([LAT, LNG]).addTo(map);
marker.bindPopup('<strong>Мы здесь</strong><br>Адрес можно заменить').openPopup();

map.whenReady(() => {
  map.invalidateSize();
});
