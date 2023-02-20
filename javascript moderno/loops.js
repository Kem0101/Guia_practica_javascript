// i < variable.length 
// esta sentencia recorre toda la propiedad aunque el operador es menor que, porque .length hace 
// referencia al tamaño del arreglo a partir del numero 1 aunque los array comienzan desde cero
// asignando la posición de cada propiedad.

for (let i = 0; i < 10; i++) {

    if (i === 5) { // si ejecutamos este if luego de la evaluacion ejecutara el console y luego seguira ejecutando el codigo
        // console.log('Este es el numero 5'); 
        break; // este break rompe con el loop y termine el condigo al cumplirse la validación
    }

    // console.log(`Numero ${i}`);
}

// carrito de compras
const carrito = [
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Monitor curvado', precio: 300 },
    { nombre: 'Lapto mac', precio: 2000, descuento: true },
    { nombre: 'Mouse', precio: 50 },
    { nombre: 'Bocinas', precio: 150 }
];

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        // console.log(`${carrito[i].nombre} tiene descuento`);
        continue; // continue nos permite ejecutar la linea de codigo que cumple con la sentencia
        // y luego saltar a la linea siguiente del loop fuera del if
    }
    //    console.log(carrito[i].nombre);
}


// Ejercicio Fizz Buzz 100 numeros
// divisibles de 3 fizz
// divisibles de 5 buzz
// divisibles de 3 y 5 fizz buzz

// NOTA: SI TENEMOS UN IF MULTIPLE LA PRIMERA CONDICION DEBE SER LA DEL CASO DE MENOS PROBABILIDAD
for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        // console.log(`${i} Fizz Buzz`);
    }
    if(i % 3 === 0){
        // console.log(`${i} Fizz`);
    }
    else if(i % 5 === 0){
        // console.log(`${i} Buzz`);
    }
}


// while

let i = 0; // Inicializar while

while(i < 10){ // Condición
    // console.log(`Número ${i}`);

    i++; // Incremento

}

// do while
let j = 0; // Inicio

do{
    // console.log(`Número ${j}`);

    j++; // Incremento
}while(j < 10); //Condición


// forEach y .map
const tareas = ['Orar', 'Bañar', 'Comer', 'Trabajar', 'Estudiar'];

// tareas.forEach( acciones => console.log(acciones));

// tareas.map( acciones => console.log(acciones)); 
// La unica diferencia entre forEach y .map es que crear una nueva variable, duplicando el arreglo


// for of
for(let tarea of tareas){ // for of es un array method
    // console.log(tarea);
}


// for in
const automovil = {
    marca: 'BMW',
    modelo: 'X5',
    año: 2020,

}

// si iteramos con for in sobre un array lo que nos va a devolver son los indece, el for in es para
// iterar sobre objetos js
for(let auto in automovil){ 
    // console.log(auto); // si iteramos directamento sobre el objeto nos devuelve la clave(propiedad)
    // console.log(automovil[auto]); // de esta forma obtenemos el valor de la propiedad
}
// A partir de ES7 tenemos esta forma de iterar objetos
for( let [llave, valor] of Object.entries(automovil)) {
    // console.log(llave, valor);
}


