// Se crea la función que permitete ingresar nombre de la encuesta, número de preguntas y alternativas.
function crearEncuesta() {
  // La variable nombre encuesta guardará el nombre de la encuesta que ingrese el usuario por pantalla.
  const nombreEncuesta = prompt("Ingrese el nombre de la encuesta");
  // La variable numPreguntas guardará el número de preguntas que el usuario ingrese por pantalla.
  let numPreguntas = parseInt(prompt("¿Cuántas preguntas tendrá la encuesta?"));
// Ciclo para validar que encuesta tenga mínimo 8 preguntas. 
  while (isNaN(numPreguntas) || numPreguntas < 8) {
    alert("Debe ingresar al menos 8 preguntas");
    numPreguntas = parseInt(prompt("Reingrese el número de preguntas que tendrá la encuesta?"));
  }
// La varianle numAlternativas guardará el número de alternativas que tendrá cada pregunta.
  let numAlternativas = parseInt(prompt("¿Cuántas alternativas tendrán las preguntas?"));
  //Ciclo para validar que la variable reciba un valor válido. 
  while (isNaN(numAlternativas)) {
    alert("Debe ingresar un número válido para las alternativas");
    numAlternativas = parseInt(prompt("Reingrese el número de ALTERNATIVAS?"));
  }
  // Array para almacenar las preguntas y alternativas de la encuesta.
encuesta = [];
//Ciclo para recorrer el número de preguntas y alternativas.
  for (let i = 0; i < numPreguntas; i++) {
    // La variable preguntaTexto guardará texto de preguntas a través del push, y se irá sobreescribiendo.
    const preguntaTexto = prompt("Escribe el texto para la pregunta " + (i + 1) + ":");
    // Array para almacenar texto de alternativas de la pregunta i.
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
  // Array para guardar respuestas.
  const respuestas = [];
  // Ciclo para mostrar encuesta. 
  for (let i = 0; i < encuesta.preguntas.length; i++) {
    const pregunta = encuesta.preguntas[i];
    let mensaje = pregunta.pregunta + "\n\n";
    // Listar las alternativas
    for (let j = 0; j < pregunta.opciones.length; j++) {
      // Se agrega opción numerada a la cadena mensaje, separando cada opción con un salto de línea.
      mensaje += (j+1) + ": " + pregunta.opciones[j] + "\n" ;
    }

    let respuestaUsuario
    // Solicita respuesta y valida que sea una alternativa válida. 
    do {
      // Guardo respuesta del usuario para la pregunta i.
      respuestaUsuario = parseInt(prompt((i+1) + " - " + mensaje));
      // Muestro respuesta del usuario en consola.
      console.log("respuesta ingresada: " + respuestaUsuario);
      // Valido que la respuesta ingresa por el usuario exista en el número de laternativas disponibles para elegir.
      if (isNaN(respuestaUsuario) || respuestaUsuario < 1 || respuestaUsuario > pregunta.opciones.length){
       alert("Debe ingresar un número válido para la respuesta");
      }
    }
    // Guardo respuestas
        while (isNaN(respuestaUsuario) || respuestaUsuario < 1 || respuestaUsuario > pregunta.opciones.length)
        respuestas.push(pregunta.opciones[respuestaUsuario - 1]);
    }
    // Devuelvo datos en array respuestas.
  return respuestas;
}

// Función para mostrar los resultados.
function mostrarResultados(encuesta, respuestas) {
  let resultado = "Resultados de la encuesta \n\n " + encuesta.nombre + ": \n";
  // Ciclo para recorrer y mostrar cada pregunta y su resultado.
  for (let i = 0; i < encuesta.preguntas.length; i++) {
    resultado += encuesta.preguntas[i].pregunta + "\n" + "- Tu respuesta: " + respuestas[i] + "\n";
  }
// Muestro los resultados por pantalla. 
  alert(resultado);
}

// Función principal que llama a todas las funciones creadas.
function sistemaEncuestas() {
  // Creo encuesta, guardo respuestas y muestro resultados. 
  const encuesta = crearEncuesta();
  const respuestas = guardarRespuestas(encuesta);
  mostrarResultados(encuesta, respuestas);
}

// Ejecutar el sistema de encuestas.
sistemaEncuestas();
