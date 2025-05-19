// renderer.js
const { ipcRenderer } = require('electron');

// Función para ejecutar Puppeteer al hacer clic en un botón
document.getElementById('scrapeButton').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value; // Obtener la URL del input
    const content = await ipcRenderer.invoke('run-puppeteer', url); // Llamar a la función en main.js
    document.getElementById('output').innerText = content; // Mostrar el contenido en el HTML
});
