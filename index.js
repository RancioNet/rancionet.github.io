function Time(timestamp) {
    // Convertir el timestamp de segundos a milisegundos
    timestamp = timestamp * 1000;

    // Obtener la fecha actual
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Obtener la fecha de ayer
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Convertir el timestamp a una fecha
    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);

    // Obtener el día y el mes
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Los meses en JavaScript son de 0 a 11

    // Comparar la fecha del timestamp con hoy y ayer
    let formattedDate;
    if (date.getTime() === today.getTime()) {
        formattedDate = 'Hoy';
    } else if (date.getTime() === yesterday.getTime()) {
        formattedDate = 'Ayer';
    } else {
        // Formatear la fecha como [DD]/[MM]
        formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}`;
    }

    // Actualizar el contenido del elemento <span> con el id "Time"
    document.getElementById('Time').innerText = formattedDate;
}

window.onload = function() {
    Time(1718377200);
}