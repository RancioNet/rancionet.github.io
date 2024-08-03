function Time1(timestamp) {
    // Convertir el timestamp de segundos a milisegundos
    timestamp = timestamp * 1000;

    // Obtener la fecha actual y ajustar a GMT-3
    const ahora = new Date(new Date().getTime() - 3 * 60 * 60 * 1000);

    // Convertir el timestamp a una fecha y ajustar a GMT-3
    const date = new Date(timestamp - 3 * 60 * 60 * 1000);

    // Calcular la diferencia en milisegundos
    const diffTime = ahora - date;
    const Minutes = Math.floor(diffTime / (1000 * 60));
    const Hours = Math.floor(diffTime / (1000 * 60 * 60));
    const Days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const RemainingHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Nombres de los días de la semana en español
    const DaysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const Day = DaysOfWeek[date.getUTCDay()];

    // Comparar la fecha del timestamp
    let formattedDate;
    if (Minutes < 1) {
        formattedDate = `Hace menos de un minuto`;
    } else if(Minutes == 1) {
        formattedDate = `Hace un minuto`;
    } else if(Minutes > 1 && Minutes < 60) {
        formattedDate = `Hace ${Minutes} minutos`;
    } else if(Hours == 1) {
        formattedDate = `Hace una hora`;
    } else if(Hours > 1 && Hours < 24) {
        formattedDate = `Hace ${Hours} horas (${Day})`;
    } else if(Days == 1) {
        if (RemainingHours === 1) {
            formattedDate = `Hace un día y una hora (${Day})`;
        } else if(RemainingHours > 1) {
            formattedDate = `Hace un día y ${RemainingHours} horas (${Day})`;
        } else {
            formattedDate = `Hace un día (${Day})`;
        }
    } else if (Days > 1) {
        if (RemainingHours == 1) {
            formattedDate = `Hace ${Days} días y una hora (${Day})`;
        } else if (RemainingHours > 1) {
            formattedDate = `Hace ${Days} días y ${RemainingHours} horas (${Day})`;
        } else {
            formattedDate = `Hace ${Days} días (${Day})`;
        }
    }

    // Actualizar el contenido del elemento <span> con el id "Time"
    const spanElement = document.getElementById('Time1');
    if (spanElement) {
        spanElement.innerText = formattedDate;
    } else {
        console.error('El elemento span con el id "Time" no se encontró en el documento.');
    }
}

function Time2(timestamp) {
    // Convertir el timestamp de segundos a milisegundos
    timestamp = timestamp * 1000;

    // Obtener la fecha actual y ajustar a GMT-3
    const ahora = new Date(new Date().getTime() - 3 * 60 * 60 * 1000);

    // Convertir el timestamp a una fecha y ajustar a GMT-3
    const date = new Date(timestamp - 3 * 60 * 60 * 1000);

    // Calcular la diferencia en milisegundos
    const diffTime = ahora - date;
    const Minutes = Math.floor(diffTime / (1000 * 60));
    const Hours = Math.floor(diffTime / (1000 * 60 * 60));
    const Days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const RemainingHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Nombres de los días de la semana en español
    const DaysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const Day = DaysOfWeek[date.getUTCDay()];

    // Comparar la fecha del timestamp
    let formattedDate;
    if (Minutes < 1) {
        formattedDate = `Hace menos de un minuto`;
    } else if(Minutes == 1) {
        formattedDate = `Hace un minuto`;
    } else if(Minutes > 1 && Minutes < 60) {
        formattedDate = `Hace ${Minutes} minutos`;
    } else if(Hours == 1) {
        formattedDate = `Hace una hora`;
    } else if(Hours > 1 && Hours < 24) {
        formattedDate = `Hace ${Hours} horas (${Day})`;
    } else if(Days == 1) {
        if (RemainingHours === 1) {
            formattedDate = `Hace un día y una hora (${Day})`;
        } else if(RemainingHours > 1) {
            formattedDate = `Hace un día y ${RemainingHours} horas (${Day})`;
        } else {
            formattedDate = `Hace un día (${Day})`;
        }
    } else if (Days > 1) {
        if (RemainingHours == 1) {
            formattedDate = `Hace ${Days} días y una hora (${Day})`;
        } else if (RemainingHours > 1) {
            formattedDate = `Hace ${Days} días y ${RemainingHours} horas (${Day})`;
        } else {
            formattedDate = `Hace ${Days} días (${Day})`;
        }
    }

    // Actualizar el contenido del elemento <span> con el id "Time"
    const spanElement = document.getElementById('Time2');
    if (spanElement) {
        spanElement.innerText = formattedDate;
    } else {
        console.error('El elemento span con el id "Time" no se encontró en el documento.');
    }
}

window.onload = function() {
    Time1(1722545520);
    Time2(1722631920);
}