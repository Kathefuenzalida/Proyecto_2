class Encuesta {
  constructor(titulo) {
    this.titulo = titulo;
    this.preguntas = [];
  }

  agregarPregunta(pregunta) {
    this.preguntas.push(pregunta);

  }
}

class Pregunta {
  constructor(texto) {
    this.texto = texto;
    this.alternativas = [];
  }
  agregarAlternativa(alternativa) {
    this.alternativas.push(alternativa);
  }
}

class SistemaEncuestas {
  crearEncuesta() {
    const nombreEncuesta = prompt("Ingrese el título de la encuesta:");
    let numPreguntas = parseInt(prompt("Ingrese el número de preguntas:"));
  while (isNaN(numPreguntas) || numPreguntas < 8) {
    alert("Debe ingresar al menos 8 preguntas");
    numPreguntas = parseInt(prompt("Reingrese el número de preguntas que tendrá la encuesta?"));
  }
    
  let numOpciones = parseInt(prompt("Ingrese el número de ALTERNATIVAS por pregunta:"));
  while (isNaN(numOpciones)) {
    alert("Debe ingresar un número válido para las alternativas");
    numOpciones = parseInt(prompt("Reingrese el número de ALTERNATIVAS?"));
  }
    const encuesta = new Encuesta(nombreEncuesta);
    for (let i = 0; i < numPreguntas; i++) {
      const preguntaTexto = prompt(`Ingrese el texto de la pregunta ${i + 1}:`);
      const pregunta = new Pregunta(preguntaTexto);

      for (let j = 0; j < numOpciones; j++) {
        const alternativaTexto = prompt(`Ingrese el texto de la alternativa ${j + 1} de la pregunta ${i + 1}:`);
        pregunta.agregarAlternativa(alternativaTexto);
      }
      encuesta.agregarPregunta(pregunta);
    }
    return encuesta;
  }

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
        respuesta = parseInt(prompt("Reingrese respuesta?"));
      }
      arrayrespuestas.push(respuesta);
    }
    return arrayrespuestas; 
  }
mostrarResultados(encuesta, respuestas){
  console.log(`Resultados de la encuesta "${encuesta.titulo}":`);
  for (let i = 0; i < encuesta.preguntas.length; i++) {
    console.log(`Pregunta ${i + 1}: ${encuesta.preguntas[i].texto}`);
    console.log(`Respuesta:`, respuestas[i]);
  }
}
ejecutar(){
  const encuesta = sistema.crearEncuesta();
  const respuestas = sistema.capturarRespuestas(encuesta);
  sistema.mostrarResultados(encuesta, respuestas);
}
}

const sistema = new SistemaEncuestas();
sistema.ejecutar();