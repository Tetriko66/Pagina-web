function checkear_formulario() {
  // Captura lo que escribió el usuario
  let palabra = document.getElementById("buscador").value.toLowerCase();

  // Captura todas las tarjetas de productos
  let productos = document.querySelectorAll(".card");

  // Recorre cada producto y lo muestra/oculta según coincidencia
  productos.forEach(producto => {
    let texto = producto.innerText.toLowerCase();
    if (texto.includes(palabra)) {
      producto.style.display = "block"; // se muestra
    } else {
      producto.style.display = "none"; // se oculta
    }
  });
}
