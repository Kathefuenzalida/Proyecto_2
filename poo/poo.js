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
    const numPreguntas = parseInt(prompt("Ingrese el número de preguntas:"));
    const numOpciones = parseInt(
      prompt("Ingrese el número de ALTERNATIVAS por pregunta:")
    );
    const encuesta = new Encuesta(nombreEncuesta);
    for (let i = 0; i < numPreguntas; i++) {
      const preguntaTexto = prompt(`Ingrese el texto de la pregunta ${i + 1}:`);
      const pregunta = new Pregunta(preguntaTexto);

      for (let j = 0; j < numOpciones; j++) {
        const alternativaTexto = prompt(
          `Ingrese el texto de la alternativa ${j + 1} de la pregunta ${i + 1}:`
        );
        pregunta.agregarAlternativa(alternativaTexto);
      }
      encuesta.agregarPregunta(pregunta);
    }
    return encuesta;
  }

  capturarRespuestas(encuesta) {
    const respuestas = [];
    for (let i = 0; i < encuesta.preguntas.length; i++) {
      const pregunta = encuesta.preguntas[i];
      const respuestasAlternativas = [];
      for (let j = 0; j < pregunta.alternativas.length; j++) {
        const respuesta = prompt(
          `Ingrese su respuesta para la alternativa ${j + 1} de la pregunta ${i + 1}:`
        );
        respuestasAlternativas.push(respuesta);
      }
      respuestas.push(respuestasAlternativas);
    }
    return respuestas;
  }
mostrarResultados(encuesta, respuestas){
  console.log(`Resultados de la encuesta "${encuesta.titulo}":`);
  for (let i = 0; i < encuesta.preguntas.length; i++) {
    console.log(`Pregunta ${i + 1}: ${encuesta.preguntas[i].texto}`);
    console.log(`Respuestas:`, respuestas[i]);
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