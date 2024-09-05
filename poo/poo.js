// Creo la clase encuesta con elemntos título y preguntas. 
class Encuesta {
  constructor(titulo) {
    this.titulo = titulo;
    this.preguntas = [];
  }
  // Creo método para agregarPregunta. 
  agregarPregunta(pregunta) {
    this.preguntas.push(pregunta);
  }
}
// creo la clase Pregunta con un elemento de texto y un arreglo alternativas. 
class Pregunta {
  constructor(texto) {
    this.texto = texto;
    this.alternativas = [];
  }
  // Método para guardar alternativas. 
  agregarAlternativa(alternativa) {
    this.alternativas.push(alternativa);
  }
}
// En esta clase solicito al usuario el título, número de preguntas y alternativas.
class SistemaEncuestas {
  crearEncuesta() {
    const nombreEncuesta = prompt("Ingrese el título de la encuesta:");
    // Solicito núm de preguntas y válido que dato sea válido. 
    let numPreguntas = parseInt(prompt("Ingrese el número de preguntas:"));
  while (isNaN(numPreguntas) || numPreguntas < 8) {
    alert("Debe ingresar al menos 8 preguntas");
    numPreguntas = parseInt(prompt("Reingrese el número de preguntas que tendrá la encuesta?"));
  }
    // Solicito núm de alternativas y válido que dato sea válido. 
  let numOpciones = parseInt(prompt("Ingrese el número de ALTERNATIVAS por pregunta:"));
  while (isNaN(numOpciones)) {
    alert("Debe ingresar un número válido para las alternativas");
    numOpciones = parseInt(prompt("Reingrese el número de ALTERNATIVAS?"));
  }
  // Creo la instancia de la clase Encuesta con el nombre de la encuesta y las preguntas.
    const encuesta = new Encuesta(nombreEncuesta);
    // Ciclo para recibir texto de preguntas en i y alternativas en j.
    for (let i = 0; i < numPreguntas; i++) {
      const preguntaTexto = prompt(`Ingrese el texto de la pregunta ${i + 1}:`);
      // Creo la instancia de la clase Pregunta. 
      const pregunta = new Pregunta(preguntaTexto);

      for (let j = 0; j < numOpciones; j++) {
        const alternativaTexto = prompt(`Ingrese el texto de la alternativa ${j + 1} de la pregunta ${i + 1}:`);
        // Llamo al método para guardar altervativas.
        pregunta.agregarAlternativa(alternativaTexto);
      }
      // Llamo al método para guardar preguntas.
      encuesta.agregarPregunta(pregunta);
    }
    // Retorno la encuesta con todas las preguntas y alternativas.
    return encuesta;
  }
/*Creo método para recibir encuestas y validar que dato ingresado se 
encuentre entre uno y el máx de alternativas definido previamente para las preguntas*/
  capturarRespuestas(encuesta) {
    const arrayrespuestas = [];
    for (let i = 0; i < encuesta.preguntas.length; i++) {
      const pregunta = encuesta.preguntas[i];
      //console.log(pregunta)
      let respuestas = " "; 
      for (let j = 0; j < pregunta.alternativas.length; j++) {
        respuestas = respuestas + "\n" + pregunta.alternativas[j];
        //console.log(respuestas);
      }
      let respuesta = prompt(`Ingrese su respuesta para la pregunta ${i + 1}: ${pregunta.texto} \n\n ${respuestas}`);
      //console.log("respuesta ingresada: " + respuesta);
      while (isNaN(respuesta) || respuesta < 1 || respuesta > pregunta.alternativas.length){
        alert("Debe ingresar un número válido para la respuesta");
        respuesta = parseInt(prompt("Reingrese respuesta"));
      }
      // Guardo la respuesta en array. 
      arrayrespuestas.push(respuesta);
    }
    // Retorno array con las respuestas.
    return arrayrespuestas; 
  }
  // Método para mostrar resultados de la encuesta para la pregunta i y su alternativa j.
mostrarResultados(encuesta, respuestas){
  console.log(`Resultados de la encuesta "${encuesta.titulo}":`);
  for (let i = 0; i < encuesta.preguntas.length; i++) {
    console.log(`Pregunta ${i + 1}: ${encuesta.preguntas[i].texto}`);
    console.log(`Respuesta:`, respuestas[i]);
  }
}
// Creo las instancias e invoco los métodos.
ejecutar(){
  const encuesta = sistema.crearEncuesta();
  const respuestas = sistema.capturarRespuestas(encuesta);
  sistema.mostrarResultados(encuesta, respuestas);
}
}
// Creo la instancia y llamo a la clases SistemaEncuestas
const sistema = new SistemaEncuestas();
// Ejecuto código, los resultados se ven por consola.
sistema.ejecutar();