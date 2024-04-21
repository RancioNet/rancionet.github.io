let contenidoOriginal = null; // Variable global para almacenar el contenido original

function Buscar() {
    RestaurarContenidoOriginal(); // Restaurar el contenido original al principio de la búsqueda

    const searchTerm = prompt('Ingrese el término de búsqueda:'); // Obtener el término de búsqueda
    if (!searchTerm) return; // Si no se ingresó un término de búsqueda, salir de la función

    const divFondo = document.getElementById('fondo');
    if (!contenidoOriginal) {
        contenidoOriginal = divFondo.innerHTML; // Almacenar el contenido original solo la primera vez
    }

    const contenido = divFondo.innerHTML; // Obtener el contenido actual del div "fondo"
    console.log('Término de búsqueda:', searchTerm);
    console.log('Contenido original:', contenidoOriginal);
    console.log('Contenido actual:', contenido);

    const palabrasBusqueda = searchTerm.split(' ').filter(Boolean); // Dividir el término de búsqueda en palabras y eliminar las palabras vacías
    const searchTermRegex = palabrasBusqueda
        .map(word => `(?![^<>]*>)\\b${word}\\b`) // Convertir cada palabra en una expresión regular para resaltarla dentro de etiquetas de texto
        .join('|'); // Unir las expresiones regulares con OR (|)
    
    const contenidoResaltado = contenido.replace(new RegExp(searchTermRegex, 'gi'), match => `<span class="highlight">${match}</span>`); // Resaltar todas las ocurrencias de las palabras de búsqueda dentro de etiquetas de texto
    console.log('Contenido resaltado:', contenidoResaltado);

    if (contenidoResaltado === contenido) {
        alert('No se encontraron resultados.'); // Mostrar alerta si no se encontraron resultados
    } else {
        divFondo.innerHTML = contenidoResaltado; // Actualizar el contenido con las coincidencias resaltadas
    }
}

function RestaurarContenidoOriginal() {
    if (contenidoOriginal) {
        document.getElementById('fondo').innerHTML = contenidoOriginal; // Restaurar el contenido original
        contenidoOriginal = null; // Limpiar la variable para futuras búsquedas
    }
}

function Contenido() {
    var divsConTexto = document.querySelectorAll('div > p');
    var imagenes = document.querySelectorAll('img');
    var boton = document.querySelector('.Prefer');
    var preferencia = localStorage.getItem('Prefer') || 'img'; // Establecer preferencia por defecto

    function actualizarContenido(preferenciaActual) {
        divsConTexto.forEach(p => p.style.display = (preferenciaActual === 'txt') ? 'block' : 'none');
        imagenes.forEach(img => img.style.display = (preferenciaActual === 'txt') ? 'none' : 'block');
        boton.textContent = (preferenciaActual === 'txt') ? 'Mostrar imágenes' : 'Mostrar texto';
    }

    actualizarContenido(preferencia);

    boton.addEventListener('mousedown', function() {
        preferencia = (preferencia === 'txt') ? 'img' : 'txt';
        localStorage.setItem('Prefer', preferencia);
        actualizarContenido(preferencia);
    });
}

window.onload = function() {
    Contenido();
}
