function Buscar() {
    const searchTerm = prompt('Ingrese el término de búsqueda:'); // Obtener el término de búsqueda
    if (!searchTerm) return; // Si no se ingresó un término de búsqueda, salir de la función

    const contenido = document.getElementById('fondo').innerHTML; // Obtener el contenido del div "fondo"
    const contenidoResaltado = contenido.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`); // Resaltar las coincidencias con el término de búsqueda

    if (contenidoResaltado === contenido) {
        alert('No se encontraron resultados.'); // Mostrar alerta si no se encontraron resultados
    } else {
        document.getElementById('fondo').innerHTML = contenidoResaltado; // Actualizar el contenido con las coincidencias resaltadas
    }
}