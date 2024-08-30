/*Función para guardar nombre de encuesta, preguntas(con mínimo de 8) y alternativas, 
validando que los datos ingresados sean correctos*/

function crearEncuesta() {
  const nombreEncuesta = prompt("Ingrese el nombre de la encuesta");
  let numPreguntas = parseInt(prompt("¿Cuántas preguntas tendrá la encuesta?"));

  while (isNaN(numPreguntas) || numPreguntas < 8) {
    alert("Debe ingresar al menos 8 preguntas");
    numPreguntas = parseInt(prompt("Reingrese el número de preguntas que tendrá la encuesta?"));
  }
//prueba de Pf
  let numAlternativas = parseInt(
    prompt("¿Cuántas alternativas tendrán las preguntas?"));

  while (isNaN(numAlternativas)) {
    alert("Debe ingresar un número válido para las alternativas");
    numAlternativas = parseInt(prompt("Reingrese el número de ALTERNATIVAS?"));
  }
encuesta = [];
  for (let i = 0; i < numPreguntas; i++) {
    const preguntaTexto = prompt("Escribe el texto para la pregunta " + (i + 1) + ":");
    const opciones = [];
    for (let j = 0; j < numAlternativas; j++) {
      const opcionTexto = prompt("Escribe el texto para la opción " + (j + 1),"de la pregunta" + (i + 1) + ": ");
      opciones.push(opcionTexto);
    }
    encuesta.push({
      pregunta: preguntaTexto,
      opciones: opciones,
    });
  }

  return {
    nombre: nombreEncuesta,
    preguntas: encuesta,
  };
}
// Función para mostrar encuesta y guardar respuestas del usuario
function guardarRespuestas(encuesta) { 
  const respuestas = [];

  for (let i = 0; i < encuesta.preguntas.length; i++) {
    const pregunta = encuesta.preguntas[i];
    let mensaje = pregunta.pregunta + "\n\n";
    // Listar las alternativas
    for (let j = 0; j < pregunta.opciones.length; j++) {
      mensaje += (j+1) + ": " + pregunta.opciones[j] + "\n" ;
    }

    let respuestaUsuario
    // Solicita respuesta y valida que la respuesta del usuario sea una opción válida
    do {
      respuestaUsuario = parseInt(prompt(mensaje));
      console.log("respuesta ingresada: " + respuestaUsuario);
      if (isNaN(respuestaUsuario) || respuestaUsuario < 1 || respuestaUsuario > pregunta.opciones.length){
        alert("Debe ingresar un número válido para la respuesta");
      }
    }
        while (isNaN(respuestaUsuario) || respuestaUsuario < 1 || respuestaUsuario > pregunta.opciones.length)
        respuestas.push(pregunta.opciones[respuestaUsuario - 1]);
    }
  return respuestas;
}

// Función para mostrar los resultados
function mostrarResultados(encuesta, respuestas) {
  let resultado = "Resultados de la encuesta \n\n " + encuesta.nombre + ": \n";
  for (let i = 0; i < encuesta.preguntas.length; i++) {
    resultado += encuesta.preguntas[i].pregunta + "\n" + "- Tu respuesta: " + respuestas[i] + "\n";
  }

  alert(resultado);
}

// Función principal que ejecuta todo el sistema de encuestas
function sistemaEncuestas() {
  const encuesta = crearEncuesta();
  const respuestas = guardarRespuestas(encuesta);
  mostrarResultados(encuesta, respuestas);
}

// Ejecutar el sistema de encuestas
sistemaEncuestas();
