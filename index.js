function Download() {
    var elemento = document.getElementById("down");
    
    // Verificar si el elemento existe
    if (elemento) {
        // Eliminar el elemento
        elemento.parentNode.removeChild(elemento);
    } else {
        console.log("El elemento con id 'down' no se encontró.");
    }
}