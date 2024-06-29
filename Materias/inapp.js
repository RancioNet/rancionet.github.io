function InAPP(versionCliente) {
    var versionNecesaria = '16/6/24';
    
    if(versionCliente == '' || versionCliente == null) {
        location.reload();
    } else {
    // Verificar si el elemento existe y si la versión del cliente es correcta
        if (Elemento && versionCliente === versionNecesaria) {
        // Eliminar el elemento
        Elemento.parentNode.removeChild(Elemento);
        console.log('Versión correcta');
        } else {
        window.location.href = '/';
        }
    }
}