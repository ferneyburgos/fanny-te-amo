// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Desde que te vi", time: 15 },
  { text: "En esa banca en el parque", time: 18 },
  { text: "algo cambio en mi", time: 27 },
  { text: "desde entonces estas en mi corazon", time: 32 },
  { text: "de donde no te quiero dejar ir", time: 33 },
  { text: "sabes me gustas mucho", time: 41 },
  { text: "tienes la mas bonita sonrisa", time: 47 },
  { text: "los mas bonitos ojos", time: 54 },
  { text: "una carita preciosa", time: 59 },
  { text: "eres unica", time: 67 },
  { text: "y si de verdad me encantas", time: 72 },
  { text: "eres mi sueño", time: 78 },
  { text: "cada vez que miro la luna", time: 83 },
  { text: "pido que te encuentres bien", time: 91 },
  { text: "y que puedas cumplir tus sueños", time: 97 },
  { text: "siempre voy a estar para ti", time: 104 },
  { text: "desde el infinito al mas alla", time: 108 },
  { text: "porque te quiero", time: 144 },
  { text: "porque te sueño", time: 148 },
  { text: "porque eres preciosa", time: 153 },
  { text: "una guerrera", time: 158 },
  { text: "una mujer maravillosa", time: 164 },
  { text: "que cualquier hombre quisiera tener", time: 169 },
  { text: "siempre te esperare asi pasen siglos", time: 176 },
  { text: "porque se lo que quiero", time: 183 },
  { text: "y eres tu", time: 188 },
  { text: "Love x siempre mi bella Fanny", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);