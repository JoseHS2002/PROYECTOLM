// Inicializa el mapa
const map = L.map('map').setView([0, 0], 2); // Cambia las coordenadas y el zoom según necesites

// Carga el mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Cargar datos desde un archivo OSM (esto es un ejemplo, necesitarás un parser para OSM)
const puntos = [
    { nombre: "Punto 1", lat: 40.7128, lon: -74.0060, pregunta: "¿Cuál es la capital de EE.UU.?", respuestas: ["Nueva York", "Washington D.C.", "Los Ángeles", "Chicago", "Houston"], correcta: 1 },
    { nombre: "Punto 2", lat: 34.0522, lon: -118.2437, pregunta: "¿Cuál es la capital de California?", respuestas: ["San Francisco", "Los Ángeles", "Sacramento", "San Diego", "Fresno"], correcta: 2 }
];

// Agregar marcadores al mapa
puntos.forEach(punto => {
    const marker = L.marker([punto.lat, punto.lon]).addTo(map);
    marker.bindPopup(punto.nombre);

    // Evento al hacer clic en el marcador
    marker.on('click', () => {
        mostrarPregunta(punto);
    });
});

// Función para mostrar la pregunta
function mostrarPregunta(punto) {
    const respuestas = punto.respuestas.map((respuesta, index) => `${index + 1}. ${respuesta}`).join('\n');
    const respuestaCorrecta = punto.respuestas[punto.correcta];
    const pregunta = `${punto.pregunta}\n${respuestas}\n\nRespuesta correcta: ${respuestaCorrecta}`;
    alert(pregunta);
}

// Función de búsqueda
document.getElementById('search').addEventListener('input', function() {
    const valor = this.value.toLowerCase();
    puntos.forEach(punto => {
        if (punto.nombre.toLowerCase().includes(valor)) {
            map.setView([punto.lat, punto.lon], 10); // Zoom en el punto encontrado
        }
    });
});
