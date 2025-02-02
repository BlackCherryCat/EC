const productosDisponibles = [
    ["zamburiñas", 3.5],
    ["mejillones", 3.5],
    ["gambas", 3.5],
    ["vino blanco", 3.5],
    ["cerveza Victoria", 3.5]
];
class mesa {
    static mesasOcupadas = [];
    constructor(numMesa, numClientes) {
        if (mesa.mesasOcupadas.includes(numMesa)) {
            alert("Mesa ocupada");
            return;
        }
        this.numMesa = numMesa;
        this.clientes = [];
        for (let i = 0; i < numClientes; i++) {
            // Aquí asignamos un objeto con un id único para cada cliente
            this.clientes.push({
                idCliente: i + 1,  // El ID será único, empezando desde 1
                productos: [] // Inicializamos una lista vacía para los productos de este cliente
            });
        }
        this.numClientes = numClientes;

        mesa.mesasOcupadas.push(numMesa);  // Marcar la mesa como ocupada
        this.mostrarMensaje(`Se han sentado ${numClientes} clientes en la mesa ${this.numMesa}`);
    }
    get UbicacionMesa() {
        return this.numMesa;
    }
    set UbicacionMesa(numMesa) {
        if (this.UbicacionMesa == numMesa) {
            alert("Ya estás en esa mesa");
        }
        else if (mesa.mesasOcupadas.includes(numMesa)) {
            alert("Mesa ocupada");
        }
        else {
            this.numMesa = numMesa;
            this.mostrarMensaje("Cambio de mesa realizado");
        }
    }
    get NumClientes() {
        return this.numClientes;
    }
    set NumeroClientes(numero) {
        // Si no está ocupada, procedemos a asignar los clientes
        this.clientes = [];  // Limpiamos la lista actual de clientes
        for (let i = 0; i < numero; i++) {
            this.clientes.push({ idCliente: i + 1, productos: [] });
        }
    }
    addProducto(nombreProducto, idCliente) {
        let productoEncontrado = productosDisponibles.find(producto => producto[0] == nombreProducto);
        if (productoEncontrado) {
            let cliente = this.clientes.find(cliente => cliente.idCliente == idCliente);
            if (cliente) {
                cliente.productos.push({
                    nombre: nombreProducto,
                    precio: productoEncontrado[1]
                });
                this.mostrarMensaje(`El cliente ${idCliente} de la mesa ${this.numMesa} ha comandado ${nombreProducto}`);
            } else {
                alert("Cliente no encontrado");
            }
        } else {
            alert("Producto no disponible en el menú");
        }
    }
    get ComandaMesa() {
        let productosComanda = [];
        let total = 0;
        this.clientes.forEach(cliente => {
            cliente.productos.forEach(producto => {
                productosComanda.push(producto.nombre);
                total += producto.precio;
            });
        });

        this.mostrarMensaje(`Comanda de la mesa ${this.numMesa}`);
        let lista = "<ul>";
        productosComanda.forEach(producto => {
            lista += `<li>${producto}</li>`;
        });
        lista += `</ul><p>Total: ${total.toFixed(2)} €</p>`;
        document.body.innerHTML += lista;
    }
    // Método para obtener la comanda de un cliente específico
    getComandaCliente(idCliente) {
        let cliente = this.clientes.find(cliente => cliente.idCliente == idCliente);

        if (cliente) {
            let productosComanda = cliente.productos.map(producto => producto.nombre);
            let total = cliente.productos.reduce((sum, producto) => sum + producto.precio, 0);

            this.mostrarMensaje(`Comanda del cliente ${idCliente} de la mesa ${this.numMesa}`);
            let lista = "<ul>";
            productosComanda.forEach(producto => {
                lista += `<li>${producto}</li>`;
            });
            lista += `</ul><p>Total: ${total.toFixed(2)} €</p>`;
            document.body.innerHTML += lista;
        } else {
            alert("Cliente no encontrado");
        }
    }

    borrarMesa() {
        this.clientes = null;  // Borrar la referencia a los clientes
        let index = this.mesasOcupadas.indexOf(this.numMesa);
        if (index != -1) {
            this.mesasOcupadas.splice(index, 1);  // Eliminar la mesa de las mesas ocupadas
        }
    }
    mostrarMensaje(mensaje) {
        let historial = document.createElement("p");
        historial.textContent = mensaje;
        document.body.appendChild(historial);
    }
}

let mesa1 = new mesa(1, 4);
let mesa2 = new mesa(2, 6);
// Agregar productos a los clientes
mesa1.addProducto("zamburiñas", 1);
mesa1.addProducto("cerveza Victoria", 1);
mesa1.addProducto("vino blanco", 2);
mesa1.addProducto("mejillones", 3);
mesa1.ComandaMesa;
mesa1.getComandaCliente(1); // Comanda del Cliente 1
mesa1.getComandaCliente(2); // Comanda del Cliente 2
mesa1.getComandaCliente(3); // Comanda del Cliente 3
mesa2.UbicacionMesa = 3;  // Cambiar la mesa a la 3
mesa2.addProducto("gambas", 1);
mesa2.ComandaMesa;