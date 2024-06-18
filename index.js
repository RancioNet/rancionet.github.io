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

    // Calcular la diferencia en días
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Nombres de los días de la semana en español
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    // Comparar la fecha del timestamp con hoy y ayer
    let formattedDate;
    if (date.getTime() === today.getTime()) {
        formattedDate = 'Hoy';
    } else if (date.getTime() === yesterday.getTime()) {
        formattedDate = 'Ayer';
    } else {
        // Formatear la fecha como "Hace X días (Nombre del día de la semana)"
        formattedDate = `Hace ${diffDays} días (${dayOfWeek})`;
    }

    // Actualizar el contenido del elemento <span> con el id "Time"
    document.getElementById('Time').innerText = formattedDate;
}

window.onload = function() {
    Time(1718377200);
}