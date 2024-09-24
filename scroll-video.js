//ANIMACION FRAME BY FRAME FULL VIDEO
document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);
  
    // Verificar si el iframe está siendo detectado correctamente
    if (!iframe) {
      console.log("No se encontró el iframe del video.");
    } else {
      console.log("El iframe del video fue detectado correctamente.");
    }
  
    // Pausar el video al cargar la página
    player.pause();
  
    // Escuchar el evento de scroll
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
  
      // Verificar si el scroll está funcionando correctamente
      console.log("Posición del scroll: " + scrollTop);
      console.log("Fracción del scroll: " + scrollFraction);
  
      // Obtener la duración del video y ajustar el tiempo actual basado en el scroll
      player.getDuration().then(function(duration) {
        const newTime = duration * scrollFraction;
  
        // Solo actualizar si hay un cambio notable en el tiempo
        player.getCurrentTime().then(function(currentTime) {
          console.log("Tiempo actual del video: " + currentTime);
          console.log("Estableciendo nuevo tiempo del video: " + newTime);
          if (Math.abs(currentTime - newTime) > 0.1) {
            player.setCurrentTime(newTime);
          }
        });
      });
    });
  });
  