document.addEventListener("DOMContentLoaded", () => {
  /* =======================
     GESTIÓN DEL USUARIO
     ======================= */
  let username = localStorage.getItem("username");
  const welcomeMessage = document.getElementById("welcome-message");
  if (!username) {
    username = prompt("Introduce tu nombre de usuario:");
    if (username) {
      localStorage.setItem("username", username);
      welcomeMessage.textContent = `¡Bienvenido ${username}, que delicatessen deseas probar hoy!`;
    }
  } else {
    welcomeMessage.textContent = `¡Bienvenido de nuevo ${username}!, ¿repetimos?`;
  }
  // Botón Ver pedido: mueve la vista a la sección de resumen del pedido
  const viewButton = document.getElementById("ver-pedido");
  viewButton.addEventListener("click", () => {
    location.assign("#order-details");
  });

  // Botón Log out: borra el usuario de la aplicación
  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("username");
    alert("Has cerrado sesión.");
    welcomeMessage.textContent = "Nuestras delicatessen ahora te las llevamos a casa.";
  });

  /* =======================
     VALIDACIÓN CON REGEX
     ======================= */
  const regexPatterns = {
    nombre: /^[A-Z][a-z]{2,9}$/, // Primera letra mayúscula, 3-10 caracteres
    primerApellido: /^[A-Z][a-z]{3,7}$/, // Primera letra mayúscula, 4-8 caracteres
    segundoApellido: /^[A-Z][a-z]{3,7}$/, // Primera letra mayúscula, 4-8 caracteres
    telefono: /^\+\d{2} \d{3}-\d{3}-\d{3}$/, // Formato: +99 999-999-999
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Email estándar
    direccion: /^[\w\s,.#-]{5,100}$/ // 5-100 caracteres alfanuméricos y símbolos comunes
  };

  const validateField = (input) => {
    const value = input.value;
    const fieldName = input.id;
    const errorSpan = document.getElementById("error-" + fieldName);

    if (!value && input.required) {
      errorSpan.textContent = "Este campo es obligatorio.";
      input.style.border = "2px solid red";
      return false;
    }

    if (!regexPatterns[fieldName].test(value) && value) {
      errorSpan.textContent = input.title || "Formato inválido.";
      input.style.border = "2px solid red";
      return false;
    }

    errorSpan.textContent = "";
    input.style.border = "2px solid green";
    return true;
  };

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => validateField(input));
  });

  /* =======================
     MANEJO DEL FORMULARIO
     ======================= */
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    document.querySelectorAll("input").forEach((input) => {
      if (!validateField(input)) valid = false;
    });

    if (valid) {
      if (confirm("¿Desea enviar los datos a la web?")) {
        // Aquí se podría enviar el formulario a un servidor
      }
      // Guardar los datos del formulario en sessionStorage para usarlos en el resumen
      const orderDetails = {
        nombre: form.nombre.value,
        primerApellido: form.primerApellido.value,
        segundoApellido: form.segundoApellido.value,
        telefono: form.telefono.value,
        email: form.email.value,
        direccion: form.direccion.value,
        productos: JSON.parse(sessionStorage.getItem("productos")) || {},
        total: parseFloat(sessionStorage.getItem("total")) || 0,
      };
      sessionStorage.setItem("order", JSON.stringify(orderDetails));
      updateOrderSummary();
    }
  });

  /* =======================
     BOTONES COMPRAR
     ======================= */
  const buyButtons = document.querySelectorAll("button.buy-button");
  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productDiv = button.parentElement;
      const productName = productDiv.querySelector("h3").textContent;
      const priceText = productDiv.querySelector(".important-text").textContent;
      let price = parseFloat(priceText.replace("€", "").replace(",", ".").trim());

      let productos = JSON.parse(sessionStorage.getItem("productos")) || {};
      if (productos[productName]) {
        productos[productName].cantidad++;
      } else {
        productos[productName] = { precio: price, cantidad: 1 };
      }
      sessionStorage.setItem("productos", JSON.stringify(productos));

      let total = parseFloat(sessionStorage.getItem("total")) || 0;
      total += price;
      sessionStorage.setItem("total", total.toFixed(2));
      updateOrderSummary();
    });
  });

  /* =======================
     BOTÓN BORRAR PEDIDO
     ======================= */
  const borrarPedidoButton = document.getElementById("borrar-pedido");
  borrarPedidoButton.addEventListener("click", () => {
    sessionStorage.removeItem("order");
    sessionStorage.removeItem("productos");
    sessionStorage.removeItem("total");
    document.getElementById("order-details").innerHTML =
      "<p>Actualmente no hay productos en el carrito</p>";
  });

  /* =======================
     ACTUALIZACIÓN DEL RESUMEN DE PEDIDO
     ======================= */
  const updateOrderSummary = () => {
    const orderDiv = document.getElementById("order-details");
    const order = sessionStorage.getItem("order");
    const productos = JSON.parse(sessionStorage.getItem("productos"));
    const total = sessionStorage.getItem("total");
    if (!order) {
      orderDiv.innerHTML = "<p>Actualmente no hay datos de contacto</p>";
      return;
    }
    const orderData = JSON.parse(order);
    let html = `<p><strong>Cliente:</strong> ${orderData.nombre} ${orderData.primerApellido} ${orderData.segundoApellido || ""}</p>`;
    html += `<p><strong>Dirección:</strong> ${orderData.direccion}</p>`;
    html += `<p><strong>Teléfono:</strong> ${orderData.telefono}</p>`;
    html += `<p><strong>Productos comandados:</strong></p>`;
    if (productos && Object.keys(productos).length > 0) {
      html += "<ul>";
      for (let key in productos) {
        html += `<li>${key} x ${productos[key].cantidad} - ${(productos[key].precio * productos[key].cantidad).toFixed(
          2
        )} €</li>`;
      }
      html += "</ul>";
    } else {
      html += "<p>No hay productos en el carrito.</p>";
    }
    html += `<p><strong>Precio total:</strong> ${total ? total : "0.00"} €</p>`;
    orderDiv.innerHTML = html;
  };

  updateOrderSummary();
});
