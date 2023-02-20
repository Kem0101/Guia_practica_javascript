// => OBJECTOS
// esta forma de crear objectos se llama object literal
const producto = {
    nombre: "Carro",
    precio: 1000,
    disponible: true,
    mostrarInfo: function(){
        // console.log(`El producto: ${this.nombre} tiene el precio: ${this.precio}`);
    }

}
// producto.mostrarInfo();

// object constructor 
function Producto(nombre, precio){
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = true

}

const producto2 = new Producto('Motocicleta', 500);
// console.log(producto2)


// destructurar objectos
const producto3 = {
    nombre: "Carro",
    precio: 1000,
    disponible: true,
}

let {nombre, precio} = producto3

// console.log(nombre)

