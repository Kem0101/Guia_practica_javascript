// const datos = new Set();

// datos.add('Laptop');
// datos.add('Mouse');
// datos.add('Teclado');


// console.log(datos.delete('Teclado'));
// console.log(datos.size);
// console.log(datos.has('Laptop'));
// datos.clear();


// console.log(datos);


// WEEKSET = solo aceptan objetos y estos no se puede medir su tamaño con .size ni tampo iteral con forEach


// MAP
// Nos permite instaciar objectos clave valor que pueden ser mas eficiente de recorrer que un objecto
// normal
// const cliente = new Map();

// cliente.set('nombre', 'Joel');
// cliente.set('tipo', 'tienda ropa');
// cliente.set('monto', 10000);

// console.log(cliente);
// console.log(cliente.get('monto'));

// El constructor de Map puede recibir valores inicial
// const paciente = new Map([ ['nombre', 'paciente'], ['habitacion', 'no definida'] ]);

// paciente.set('nombre', 'Ariel');
// paciente.set('habitacion', 201);

// console.log(paciente);

// paciente.forEach( (datos,index) => {
//     console.log(index, datos);
// })


// WeekMap

// const producto = {
//     idProducto: 3
// };

// const weakMap = new WeakMap();

// weakMap.set(producto, 'Laptop');

// console.log(weakMap);


// Symbol()
// Tambien existen los simbols y estos no son iterables
// podemos pasarle una descripción al Symbol como un string en el contructor
// para asignar y acceder a valores a una propiedad Symbol se utilizan los corchetes 
// const nombre = Symbol('Nombre del cliente');
// const apellido = Symbol();

// const persona = {};

// persona[nombre] = 'Juan';
// persona[apellido] = 'De la torre';

// console.log(persona);



// COMO CONSTRUIR UN ITERADOR Y COMO FUNCIONAN

// function crearIterador(carrito){

//     let i = 0;

//     return {
//         siguiente: () => {
//             const fin = (i >= carrito.legth);
//             const valor = !fin ? carrito[i++] : undefined;

//             return {
//                 fin,
//                 valor
//             }
//         }
//     }

// }

// const carrito = ['Producto1', 'Producto2', 'Producto3'];


// const recorrerCarrito = crearIterador(carrito);

// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());


// TAMBIEN EXISTEN LOS GENERADORES EN JS (INVESTIGAR MAS ADELANTE)


// NUEVOS ITERADORES JS

// entries
const ciudades = ['Paris', 'Londres', 'Taiwan', 'Israel', 'New York'];
const ordenes = new Set([1, 3, 7, 24]);
const datos = new Map();

datos.set('nombre', 'Sam');
datos.set('profesion', 'Programador');


// ITERADORES POR DEFAULT
    for (let ciudad of ciudades){
        console.log(ciudad);
    }

    for (let orden of ordenes){
        console.log(orden);
    }

    for (let dato of datos){
        console.log(dato);
    }

// for (let entry of ciudades.entries()){
//     console.log(entry);
// }

// for (let entry of ordenes.entries()){
//     console.log(entry);
// }

// for (let entry of datos.entries()){
//     console.log(entry);
// }


// values iterador
// for(let value of ciudades.values()){
//     console.log(value);
// }

// // keys iterador
// for(let keys of ciudades.keys()){
//     console.log(keys);
// }



