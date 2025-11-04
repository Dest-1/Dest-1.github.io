// ======== Productos ========
const productos = [
  { nombre: "Zapato Deportivo", precio: "$49.99", imagen: "img/zapato1.jpg" },
  { nombre: "Zapato Casual", precio: "$59.99", imagen: "img/zapato2.jpg" },
  { nombre: "Zapato Elegante", precio: "$79.99", imagen: "img/zapato3.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
  // Cargar productos dinámicamente
  const contenedor = document.getElementById("productos-container");
  if (contenedor) {
    productos.forEach(p => {
      const card = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
            <div class="card-body text-center">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">${p.precio}</p>
              <button class="btn btn-outline-primary" onclick="agregarAlCarrito('${p.nombre}')">Agregar al carrito</button>
            </div>
          </div>
        </div>`;
      contenedor.innerHTML += card;
    });
  }

  // Formulario de contacto
  const form = document.getElementById("form-contacto");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("¡Gracias por contactarnos! Pronto responderemos tu mensaje.");
      form.reset();
    });
  }

  // Botón modo oscuro
  const btnModo = document.getElementById("modoOscuroBtn");
  if (btnModo) {
    // Verificar preferencia guardada
    if (localStorage.getItem("modoOscuro") === "true") {
      document.body.classList.add("modo-oscuro");
    }

    btnModo.addEventListener("click", () => {
      document.body.classList.toggle("modo-oscuro");
      const activado = document.body.classList.contains("modo-oscuro");
      localStorage.setItem("modoOscuro", activado);
      btnModo.textContent = activado ? "☀️" : "🌙";
    });
  }
});

function agregarAlCarrito(nombre) {
  alert(`Has agregado "${nombre}" al carrito 🛒`);
}
