

// => ARRAYS
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
// console.table(meses);

for(let i = 0; i<meses.length; i++){
    // console.log(meses[i])
}

// carrito de compras
const carrito = [];

const articulo = {
    nombre: 'Celular',
    precio: 700
}

const articulo2 = {
    nombre: 'Monitor curvado',
    precio: 300
}

const articulo3 = {
    nombre: 'Lapto mac',
    precio: 2000
}

const articulo4 = {
    nombre: 'Mouse',
    precio: 50
}

const articulo5 = {
    nombre: 'Bocinas',
    precio: 150
}

// forma imperativa js
// agragar objectos a un array usando push y modificar el array original pertenece a la forma imperativa
carrito.push(articulo); 
carrito.push(articulo2);
// unshift agrega un objecto al inicio del array
carrito.unshift(articulo3);

// console.table(carrito);


// forma declarativa
// de esta forma puedes crear copias del arreglo original y agregarle valores sin modificar el original
let resultado;
resultado = [...carrito, articulo, articulo2];
resultado = [articulo3, ...resultado];

// console.log(resultado);


// Eliminar propiedades del final y del inicio de un arreglo

carrito.push(articulo, articulo2, articulo3, articulo4, articulo5);
// console.table(carrito);

// eliminar del final del arreglo
// carrito.pop();
// console.table(carrito);

// eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// eliminar elementos en cualquier posición del arreglo
// carrito.splice(2, 1);
// console.table(carrito);


// destructuring de arreglos
const [ primero, ...resto] = carrito;
// console.log(primero)
// console.log(resto);


// ForEach para recorrer arreglos
carrito.forEach(function(product) {
    // console.log(` ${product.nombre} - Precio: ${product.precio}`)
})

// .map es una funcion similar a forEach pero esta crea un nuevo arreglo 
// dejando el arreglo original intacto 
const result2 = carrito.map(function(product) {
   return ` ${product.nombre} - Precio: ${product.precio}`
})


// console.log(result2)