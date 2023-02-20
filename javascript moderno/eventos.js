// DomContentLoaded: se ejecuta luego de haber cargado todo el html
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Documento cargado: ejecutar codigo JS');
// });

// EVETOS DEL MOUSE
// const nav = document.querySelector('.navegacion');

// Ver diferentes eventos
// nav.addEventListener('click', () => {
//     console.log('Hizo click en la navegación');
// });

// nav.addEventListener('mousedown', () => {
//     console.log('Hizo click en la navegación')
// });

// nav.addEventListener('dblclick', () => {
//     console.log('Hizo doble click en la navegación')
// });

// nav.addEventListener('mouseup', () => {
//     console.log('Solto el click del mouse');
// });

// nav.addEventListener('mouseenter', () => {
//     console.log('Puso el cursor del mouse sobre el elemento seleccionado');
// });

// nav.addEventListener('mouseout', () => {
//     console.log('Quito el cursor del mouse del elemento seleccionado');
// });

// EVETOS SOBRE LOS INPUTS
// const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('Hiciste click sobre el input');
// });

// busqueda.addEventListener('keyup', () => {
//     console.log('Soltaste el click sobre el input');
// });

// busqueda.addEventListener('copy', () => {
//     console.log('Copiaste el texto que esta escrito en el input');
// });

// busqueda.addEventListener('paste', () => {
//     console.log('Pegaste texto en el input');
// });

// busqueda.addEventListener('cut', () => {
//     console.log('Cortaste el texto que esta en el input');
// });

// busqueda.addEventListener('blur', () => {
//     console.log('Entraste al input y luego hiciste un click fuera del input');
// });

// busqueda.addEventListener('input', () => {
//     console.log('Este evento hace todo lo que hacen los demas evento menos el blur');
// });

// busqueda.addEventListener('input', (e) => { // puedo capturar lo que se esta escribiendo en el input y la informacion acerca del input
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.value);

//     if(e.target.value == ''){
//         console.log('Puede ejecutar algun codigo o enviar un mensaje de que fallo la validación');
//     }
    
// });

// // EVENTOS SUDMIT QUE SUCEDEN EN UN FORMULARIO
// const formulario = document.querySelector('#formulario');

// formulario.addEventListener('click', (e) => {
//     e.preventDefault(); // esta linea de codigo nos ayuda a prevenir la opción por defecto que haria el elemento al que estamos llamando

//     console.log(e.target.method); // para saber que metodo http va a ejecutar este formulario
//     console.log(e.target.action); // para saber que action por defecto va a ejecutar este formulario
// });



// // OTRA FORMA DE HACER LA MISMA FUNCION
// const formulario1 = document.querySelector('#formulario');

// formulario1.addEventListener('click', validarFormulario );

// function validarFormulario(e){
//     e.preventDefault(); // esta linea de codigo nos ayuda a prevenir la opción por defecto que haria el elemento al que estamos llamando

//     console.log(e.target.method); // para saber que metodo http va a ejecutar este formulario
//     console.log(e.target.action); // para saber que action por defecto va a ejecutar este formulario
// }


// // EVENTO SCROLL 
// window.addEventListener('scroll', () => {

//     const scrollPX = window.scrollY;
//     console.log(scrollPX); // de esta forma vemos la cantidad de scroll que hemos dado en pixeles
    
//     const premium = document.querySelector('.premium');
//     const ubicacion = premium.getBoundingClientRect();

//     console.log(ubicacion);

//     if(ubicacion.top < 100){
//         console.log('El elemento ya esta visible');
//     }else {
//         console.log('Aun no esta visible, dar mas scroll');
//     }

// });

// EVENT BUBBLING (EVETO BURBUJA)
// const cardDiv = document.querySelector('.card');
// const infoDiv = document.querySelector('.info');
// const titulo = document.querySelector('.titulo');

// cardDiv.addEventListener('click', e => {
//     e.stopPropagation(); // stop propagation para prevenir el evento burbuja
//     console.log('Hiciste click en el card');
// });

// infoDiv.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log('Hiciste click en la info');
// });

// titulo.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log('Hiciste click en el titulo');
// });



// // PREVINIENDO EL EVENT BUBBLING (EVETO BURBUJA) CON DELEGATION 
// const cardDiv = document.querySelector('.card');

// cardDiv.addEventListener('click', e => {
//     console.log(e.target.classList); // de esta forma identifico que clase contiene donde estamos dando click y luego hago una condicion basado en estas clases

//     if(e.target.classList.contains('.card')){
//         console.log('Diste click en el card');
//     }
//     if(e.target.classList.contains('.info')){
//         console.log('Diste click en el info');
//     }
//     if(e.target.classList.contains('.titulo')){
//         console.log('Diste click en el titulo');
//     }
// })

