    function mostrarFormulario(paquete) {
      document.getElementById('formularioCompra').classList.remove('oculto');
      document.getElementById('paqueteSeleccionado').value = paquete;
    }

    function validarPago() {
      const nombre = document.getElementById('nombre').value.trim();
      const tarjeta = document.getElementById('tarjeta').value.trim();
      const tipoTarjeta = document.getElementById('tipoTarjeta').value;
      const banco = document.getElementById('banco').value;
      const fechaIda = document.getElementById('fechaIda').value;
      const fechaRegreso = document.getElementById('fechaRegreso').value;

      const mensaje = document.getElementById('mensajeCompra');
      mensaje.className = '';

      if (!nombre || tarjeta.length < 3 || !tipoTarjeta || !banco || !fechaIda || !fechaRegreso) {
        mensaje.innerHTML = '<p style="color: red;">❌ Compra declinada: completa todos los campos correctamente.</p>';
        return false;
      }

      const ida = new Date(fechaIda);
      const regreso = new Date(fechaRegreso);
      const diferenciaDias = (regreso - ida) / (1000 * 60 * 60 * 24);

      if (diferenciaDias < 0) {
        mensaje.innerHTML = '<p style="color: red;">❌ La fecha de regreso no puede ser antes que la fecha de ida.</p>';
        return false;
      }

      if (diferenciaDias > 2) {
        mensaje.innerHTML = '<p style="color: red;">❌ La estadía no puede superar los 2 días.</p>';
        return false;
      }

      mensaje.innerHTML = '<p style="color: green; font-weight: bold;">✅ ¡Compra finalizada con éxito! Gracias por confiar en Esencia Cafetera. 🌱☕</p>';
      return false;
    }
function mostrar(id) {
  const elemento = document.getElementById(id);
  if (elemento.classList.contains("visible")) {
    elemento.classList.remove("visible");
  } else {
    elemento.classList.add("visible");
  }
}


