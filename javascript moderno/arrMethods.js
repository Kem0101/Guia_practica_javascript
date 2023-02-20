const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nombre', 'Diciembre'];


const carrito = [
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Monitor curvado', precio: 300 },
    { nombre: 'Lapto mac', precio: 2000, descuento: true },
    { nombre: 'Mouse', precio: 150 },
    { nombre: 'Bocinas', precio: 150 }
];

const producto = {nombre: 'Disco duro', precio: 500};

// comprobar si un valor existe en un objeto
meses.forEach(mes => {
    if(mes === 'Mayo'){
        // console.log('Mayo existe');
    }
})

const result = meses.includes('Mayo'); // esta forma solo funciona en arreglos de indices, no en arreglos de objetos
// console.log(result)

// para arreglos de objecto usamos .some
const existe = carrito.some( producto => producto.nombre === 'Celular');
// console.log(existe);

const existe2 = meses.some( mes  => mes === 'Mayor');
// console.log(existe2);


// findIndex para encontrar la posicion en un array
meses.forEach((mes, index) => {
    // console.log(index, mes);
});


const indice = meses.findIndex( mes => mes === 'Marzo');
// console.log(indice);


// encontrar un indice de un arreglo de objetos 

const indice2 = carrito.findIndex( producto => producto.precio === 150);
// findIndex retorna el primer valor que encuentra que cumple con la busqueda, 
// si hay varios valores que cumplen solo devuelve el primero
// console.log(indice2);



// .reduce => viendo como hacerlo con forEach
let total = 0;
carrito.forEach( producto => total += producto.precio );
// console.log(total);

// .reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0 ); // en .reduce le pasamos un parametro de inicio = 0 en este caso
// console.log(resultado);



// .filter
let resultado2;

resultado2 = carrito.filter(producto => producto.precio > 400);
resultado2 = carrito.filter(producto => producto.nombre !== 'Mouse');
resultado2 = carrito.filter(producto => producto.nombre === 'Lapto mac');

// console.log(resultado2);


// con un forEach y con un .find
let resultado3;
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Celular'){
        resultado3 = carrito[index]
    }
});
// console.log(resultado3);


// .find
const resultado4 = carrito.find( producto => producto.nombre === 'Celular');
// console.log(resultado4); 



// .every debe de cumplirse la condición en todos los elementos
const resultado5 = carrito.every( producto => producto.precio && producto.nombre);
// console.log(resultado5);



// .concat
const result2 = meses.concat(meses2);
// console.log(result2);

// spread operator
// si quiero agregar un string en particular no debo de usar los tres puntos
// spread operator no modifica el array original 
// el spread operator agrega los elementos en el orden que se los vayas pasando
const result3 = [...meses, ...meses2, 'otros datos'];
// console.log(result3);



// spread operator con objectos
// cuando agregamos un objecto a un array de objectos no tenemos que asignarle el spread operator
// a dicho objecto solo al array, porque los objectos no son iterables con spread operator
const carrito2 = [...carrito, producto];
console.log(carrito2);


