function InAPP(versionCliente) {
    var versionNecesaria = '22/6/24';
    
    // Verificar si el elemento existe y si la versión del cliente es correcta
    if (Elemento && versionCliente === versionNecesaria) {
        // Eliminar el elemento
        Elemento.parentNode.removeChild(Elemento);
        console.log("Versión correcta");
    } else {
        window.location.href = '/';
    }
}