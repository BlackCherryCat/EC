let p_zamburinas = ["zamburiñas", 3.5]
let p_mejillones = ["mejillones", 3.5]
let p_gambas = ["gambas", 3.5]
let p_vinoBlanco = ["vino blanco", 3.5]
let p_cerveVictoria = ["cerveza Victoria", 3.5]

class mesa {
    numMesa;
    constructor(numMesa, numClientes) {
        this.numMesa = numMesa
        this.numClientes = numClientes
    }
    get UbicacionMesa() {
        return this.numMesa;
    }
    set UbicacionMesa(numMesa) {
        this.numMesa = numMesa;
    }
    get NumClientes() {
        return this.numClientes;
    }
    set NumClientes(numClientes) {
        this.numClientes = numClientes;
    }    
    addProducto(nombreProducto, idCliente) {
        let producto = [nombreProducto, idCliente]
        return producto
    }
}

let mesa1 = new mesa(1, 4);
let mesa2 = new mesa(2, 6);
document.getElementById("contenido").innerHTML += mesa1.UbicacionMesa + '<br/>';
document.getElementById("contenido").innerHTML += mesa2.UbicacionMesa + '<br/>';
document.getElementById("contenido").innerHTML += mesa2.UbicacionMesa + '<br/>';