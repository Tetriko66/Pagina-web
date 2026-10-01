function checkear_formulario() {
  // Captura lo que escribió el usuario
  let palabra = document.getElementById("buscador").value.toLowerCase().trim();

  // Captura todas las tarjetas de productos
  let productos = document.querySelectorAll(".card");

  let mensajeBusqueda =document.getElementById("mensajeBusqueda");

  let encontrados = 0;

  // Recorre cada producto y lo muestra/oculta según coincidencia
  productos.forEach(producto => {
    let texto = producto.innerText.toLowerCase();
    if (palabra == "" || texto.includes(palabra)) {
      producto.style.display = ""; // se muestra
      encontrados++;
    } else {
      producto.style.display = "none"; // se oculta
    }
  });
  
  if (encontrados == 0 && palabra != "") {
    mensajeBusqueda.innerHTML = "No se encontraron productos que coincidan con la búsqueda.";
  } else {
    mensajeBusqueda.innerHTML = "";
  }
}

function validar_contacto() {

    // Guarda lo que escribió el usuario
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();


    // Guarda los lugares donde aparecerán los errores
    let errorNombre = document.getElementById("errorNombre");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorMensaje = document.getElementById("errorMensaje");
    let resultado = document.getElementById("resultadoFormulario");


    // Limpia mensajes anteriores
    errorNombre.innerHTML = "";
    errorCorreo.innerHTML = "";
    errorMensaje.innerHTML = "";
    resultado.innerHTML = "";

    // Validar nombre
    if (nombre == "") {
        errorNombre.innerHTML = "Debe ingresar su nombre.";
    
    // Validar correo vacío
    } else if (correo == "") {
        errorCorreo.innerHTML = "Debe ingresar su correo.";

    // Validar correo con formato correcto
    } else if (!correo.includes("@") || !correo.includes(".")) {
        errorCorreo.innerHTML = "Correo inválido. Ejemplo: nombre@correo.cl";

    // Validar mensaje vacío
    } else if (mensaje == "") {
        errorMensaje.innerHTML = "Debe escribir un mensaje.";
    
    // Validar largo del mensaje
    } else if (mensaje.length < 10) {
        errorMensaje.innerHTML = "El mensaje debe tener al menos 10 caracteres.";
    
    // Si todo está correcto
    } else {
        resultado.innerHTML ="Formulario completado correctamente.";
        resultado.className ="text-success text-center mb-3";
        // Limpia los campos del formulario
        document.getElementById("formularioContacto").reset();
    }

}