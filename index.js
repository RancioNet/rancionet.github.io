function Time(timestamp) {
    // Convertir el timestamp de segundos a milisegundos
    timestamp = timestamp * 1000;

    // Obtener la fecha actual
    const now = new Date();
    const hoy = new Date(now);
    hoy.setHours(0, 0, 0, 0);

    // Obtener la fecha de ayer
    const ayer = new Date(hoy);
    ayer.setDate(ayer.getDate() - 1);

    // Convertir el timestamp a una fecha
    const date = new Date(timestamp);

    // Calcular la diferencia en milisegundos
    const diffTime = now - date;
    const Minutes = Math.floor(diffTime / (1000 * 60));
    const Hours = Math.floor(diffTime / (1000 * 60 * 60));
    const Days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Nombres de los días de la semana en español
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    // Comparar la fecha del timestamp con hoy y ayer
    let formattedDate;
    if(Minutes < 1) {
        formattedDate = `Hace menos de un minuto`;
    } else if(Minutes > 1 && Minutes < 60) {
        formattedDate = `Hace ${Minutes} minutos`;
    } else if(Hours == 1) {
        formattedDate = `Hace una hora`;
    } else if(Hours > 1 && Hours < 24) {
        formattedDate = `Hace ${Hours} horas`;
    } else if(Days == 1) {
        formattedDate = `Hace un día`;
    } else if(Days > 1) {
        formattedDate = `Hace ${Days} días`;
    }

    // Actualizar el contenido del elemento <span> con el id "Time"
    document.getElementById('Time').innerText = formattedDate;
}

window.onload = function() {
    Time(1718742840);
}