let contenidoOriginal = null; // Variable global para almacenar el contenido original

function Buscar() {
    var term = prompt('Ingresa un término de búsqueda:');
    if (term) {
        var h1Elements = document.getElementsByTagName('h1');
        var closestH1 = null;
        var closestDistance = Number.MAX_VALUE;
        var found = false;

        for (var i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.backgroundColor = ''; // Restaurar color original
            var text = h1Elements[i].textContent.toLowerCase();
            var termWords = term.toLowerCase().split(' ');
            var allWordsFound = termWords.every(word => text.includes(word));
            
            if (allWordsFound) {
                h1Elements[i].style.backgroundColor = 'blue'; // Marcar si coincide
                var distance = Math.abs(h1Elements[i].offsetTop - window.pageYOffset);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestH1 = h1Elements[i];
                }
                found = true;
            }
        }

        if (found) {
            closestH1.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert('No se encontraron resultados para el término de búsqueda.');
        }
    }
}

function RestaurarContenidoOriginal() {
    if (contenidoOriginal) {
        document.getElementById('fondo').innerHTML = contenidoOriginal; // Restaurar el contenido original
        contenidoOriginal = null; // Limpiar la variable para futuras búsquedas
    }
}

function Contenido() {
    var divsConTexto = document.querySelectorAll('div > p, div > table, div > a');
    var imagenes = document.querySelectorAll('img');
    var boton = document.querySelector('.Prefer');
    var preferencia = localStorage.getItem('Prefer') || 'img'; // Establecer preferencia por defecto

    function actualizarContenido(preferenciaActual) {
        divsConTexto.forEach(el => el.style.display = (preferenciaActual === 'txt') ? 'block' : 'none');
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
