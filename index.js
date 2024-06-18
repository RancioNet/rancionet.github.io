function Time(timestamp) {
    // Convertir el timestamp de segundos a milisegundos
    timestamp = timestamp * 1000;

    // Obtener la fecha actual
    const now = new Date();
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);

    // Obtener la fecha de ayer
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Convertir el timestamp a una fecha
    const date = new Date(timestamp);

    // Calcular la diferencia en milisegundos
    const diffTime = now - date;
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Nombres de los días de la semana en español
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    // Comparar la fecha del timestamp con hoy y ayer
    let formattedDate;
    if (date >= today) {
        if (diffHours < 1) {
            formattedDate = `Hace ${diffMinutes} minutos`;
        } else {
            formattedDate = `Hace ${diffHours} horas`;
        }
    } else if (date >= yesterday) {
        formattedDate = 'Ayer';
    } else {
        // Formatear la fecha como "Hace X días (Nombre del día de la semana)"
        formattedDate = `Hace ${diffDays} días (${dayOfWeek})`;
    }

    // Actualizar el contenido del elemento <span> con el id "Time"
    document.getElementById('Time').innerText = formattedDate;
}

window.onload = function() {
    Time(1718742840);
}