// Los callbacks son buenos para utilizarlos en escenario como si tengo una funcion que me lista 
// todos los clientes de una empresa y al llamar esta funcion se esta agregando un nuevo cliente
// entonces utilizo un callbacks que luego de ejecutar la funcion de agregar nuevo cliente entonces
// llema nuevamente a la funcion listar clientes

// const paises = ['Taiwan', 'Philipa', 'Francia', 'Grecia', 'Isarael', 'Australia', 'Roma'];


// function agregarPais(pais, callbacks){
//     setTimeout(() => {
//         paises.push(pais);
//         callbacks();
//     },3000)
// }


// function listarPaises(){
//     setTimeout(() => {
//         paises.forEach(pais => {
//             console.log(pais);
//         })

//     },1000)
// }

// listarPaises();

// agregarPais('Cuba', listarPaises);



// EJEMPLO DE UN CALLBACK HELL
// const paises2 = [];


// function agregarPais(pais, callbacks){
//     paises2.push(pais);
//     callbacks();
  
// }


// function listarPaises(){
//    console.log(paises2);
// }


// function iniciarCallbackHell(){
//     setTimeout(() => {
//         agregarPais('Alemania', listarPaises);
//         setTimeout(() => {
//             agregarPais('Taiwan', listarPaises);
//         },3000);
//     },3000);
// }


// iniciarCallbackHell();


// CREANDO PROMISE .THEN .CATCH
// Hay tres valores posibles
// fullfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - No se ha cumplido y tampoco fue rechazado 
            // (esto pasa cuando se inicia un una promise pero no se ha definido la acción)


// const aplicarDescuento = new Promise((resolve, reject) => {

//     let descuento = true;

//     if(descuento){
//         resolve('Descuento aplicado');
//     }else{
//         reject('No se aplico el descuento');
//     }

// })

// aplicarDescuento
//     .then(resultado => descuento(resultado)) // tambien puedo llamar una funcion que ejecute alguna instrucción
//     .catch(error => console.log(error));



// function descuento(mensaje){ // la llamo desde el promise
//     console.log(mensaje);
// }


// DE CALLBACK HELL A PROMISE
const paises3 = [];

const addPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises3.push(pais);
        resolve(`Agregado: ${pais}`);

    },3000);
})

addPais('Brazil')
    .then(resultado => {
        console.log(resultado);
        console.log(paises3);
        return addPais('Taiwan');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises3);
        
    })
    
