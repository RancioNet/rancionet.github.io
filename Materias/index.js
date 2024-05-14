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
            setTimeout(function() {
                closestH1.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 200); // 200 milisegundos = 0.2 segundos
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

function MostrarInfo(idObjeto, idBoton) {
    var objeto = document.getElementById(idObjeto);
    var boton = document.getElementById(idBoton);
    var textoBoton = boton.textContent.trim(); // Eliminar espacios al inicio y al final

    if (objeto.style.display === "none" || objeto.style.display === "") {
        objeto.style.display = "block";
        window.location.href = "#" + idObjeto;
        boton.textContent = "Ocultar " + textoBoton.substring(8); // Eliminar "Mostrar "
    } else {
        objeto.style.display = "none";
        boton.textContent = "Mostrar " + textoBoton.substring(8); // Eliminar "Ocultar "
    }
}

function Scroll(direccion) {
    const inicio = document.getElementById('inicio')
    const fondo = document.getElementById('fondo')

    if(direccion == 'arriba') {
        document.getElementById('fondo').scrollIntoView({ behavior: 'smooth' });
    }
    else if(direccion == 'abajo') {
        document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
    }
}

window.onload = function() {
    Contenido(); // Ejecuta la función Contenido al cargar la página
    
    setTimeout(function() {
        window.location.reload(true); // Recarga la página después de 1 hora y 30 minutos (90 minutos)
    }, 90 * 60 * 1000); // 90 minutos * 60 segundos/minuto * 1000 milisegundos/segundo
}