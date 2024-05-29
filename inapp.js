function InAPP(versionCliente) {
    var Elementos = [document.getElementById("down")];
    var Download = document.getElementById('appActualizacion');

    var versionNecesaria = '28/5/24';
    
    // Verificar si el elemento existe
    if (Elementos[0] && versionCliente == versionNecesaria) {
        // Eliminar el elemento
        Elementos[0].parentNode.removeChild(Elementos[0]);
        console.log("Versión correcta");
    } else {
        console.log("Versión incorrecta");
        Download.style.display = 'flex';
    }
}