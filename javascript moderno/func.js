// JavaScript se ejecuta en dos pasos, primero crear las funciones y variables y luego 
// vuelve y corre todo el codigo para ejecutarlo 

// las function expression: js las declaras en la primera corrida como una variable por eso
// si las llamas antes de ejecutarlas no funcionan al contrario de las function declaration



// Declaracion de función (Function declaration)
function sumar () {
    // console.log(2 + 2);
}
sumar()



// Expresión de función (Function expression)
const sumar2 = function(){
    // console.log(3 + 3);
}
sumar2();

// JS tiene un grupo de funciones nativas del lenguaje que vienen ya pre-definidas 

// Diferencia entre funciones y metodos = basicamente hacen lo mismo su diferencia es
// en el entorno y la forma como se emplean

const numero1 = 20;
const numero2 = '20';


// console.log( parseInt(numero2)); // función 

// console.log( numero1.toString()); // método

// puedo agregar paramentros por defecto a mi funcion asignandole un valor inicial a 
// los parametros cuando los paso a la funcion ej: nombre = ''
function saludar(nombre = '', apellido = ''){  // estos valores dentro del paréntesis de la función son parametros
    // console.log(`Hola mi es ${nombre} ${apellido}`);
}
saludar('Sam', 'Martinez'); // estos valores al llamar la función se llaman argumentos



// funciones que retorna valores
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.18;
}

agregarCarrito(100);
agregarCarrito(200);
agregarCarrito(200);

const totalPagar = calcularImpuesto(total);

// console.log(`Este es el total sin impuesto: ${total}`);

// console.log(`El total a pagar es: ${totalPagar}`);




// Metodos de propiedad = estos son funciones dentro de un objeto

const reproductor = {
    agregarPlayList: function(nombre){
        console.log(`Agregando canción ${nombre} al play list`);
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo la play list ${nombre}`);
    },
    pausar: function(){
        console.log(`Pausando canción...`);
    },
    borrar: function(id){
        console.log(`Borrando la cancion ${id}`);
    }
}

// reproductor.agregarPlayList('Jesus mi fiel amor');
// reproductor.reproducirPlayList('Jesus mi fiel amigo');
// reproductor.pausar();
// reproductor.borrar(12);



// Arrow Function

const aprendiendo = () => {
    console.log('Conociendo las arrow function');
}

// las arrow funcion de una sola linea de codigo no exigen las llaves y tambien dan el return por implicito
// tambien si la función recibe un solo parametros no es obligatorio usar los parentesis 
const aprendiendo2 = () => console.log('Conociendo las arrow function');
const aprendiendo3 = () => 'Conociendo las arrow function';
// console.log(aprendiendo3());



// forEach y map en arrow function
const carrito = [
    {
        nombre: 'Celular',
        precio: 700
    },
    
    {
        nombre: 'Monitor curvado',
        precio: 300
    },
    
    {
        nombre: 'Lapto mac',
        precio: 2000
    },
    
    {
        nombre: 'Mouse',
        precio: 50
    },
    
    {
        nombre: 'Bocinas',
        precio: 150
    }

];

// carrito.forEach( product => console.log(` ${product.nombre} - Precio: ${product.precio}`));


// const result = carrito.map( product =>  ` ${product.nombre} - Precio: ${product.precio}`);
// console.log(result);


// Metodos de propiedad usando arrow function = estos son funciones dentro de un objeto
const reproductor2 = {
    cancion: '',
    agregarPlayList: nombre => console.log(`Agregando canción ${nombre} al play list`),
    reproducirPlayList: nombre => console.log(`Reproduciendo la play list ${nombre}`),
    pausar: () => console.log(`Pausando canción...`),
    borrar: id => console.log(`Borrando la cancion ${id}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obteniendoCacion(){
        console.log(`Agregando canción ${this.cancion}`);
    }
}

reproductor2.nuevaCancion = 'Tu presencia';
reproductor2.obteniendoCacion;

reproductor2.agregarPlayList('Jesus mi fiel amor');
reproductor2.reproducirPlayList('Jesus mi fiel amigo');
reproductor2.pausar();
reproductor2.borrar(12);