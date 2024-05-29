function InAPP(versionCliente) {
    var Elemento = document.getElementById("down");
    var Download = document.getElementById('appActualizacion');

    var versionNecesaria = '28/5/24';
    
    // Verificar si el elemento existe y si la versión del cliente es correcta
    if (Elemento && versionCliente === versionNecesaria) {
        // Eliminar el elemento
        Elemento.parentNode.removeChild(Elemento);
        console.log("Versión correcta");
    } else {
        console.log("Versión incorrecta");
        // Evitar el scroll
        document.body.style.overflow = 'hidden';
        // Mostrar el div de actualización
        Download.style.display = 'flex';
    }
}