// Redirigir a la página de inicio después de 3 segundos si no hay página anterior
setTimeout(function() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  }, 3000);
  