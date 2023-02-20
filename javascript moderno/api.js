// NOTIFICACIONES NATIVAS DE JS

// setTimeout(() => {
//     const notificarBtn = document.querySelector('#notificar');

//     if(notificarBtn){
//         notificarBtn.addEventListener('click',  () => {
//             Notification
//                 .requestPermission()
//                 .then(resultado => {
//                 // console.log('El result es:', resultado);
//                 })
//         })
//     }


//     const verNotificaciones = document.querySelector('#verNotificaciones');

//     verNotificaciones.addEventListener('click', () => {
//         if(Notification.permission === 'granted'){
//             const notificacion = new Notification('Esta es la notificación', {
//                 icon: 'img/web.jpg',
//                 body: 'Bucle Calidad Continua, Desarrolla proyectos de alto nivel'
//             });

//             notificacion.onclick = function(){
//                 window.open('https://www.gbh.com.do');
//             }
//         }
//     })

// },1000);



// Intersection observer = es un API nativa de javascript
// Previamente vimos getClientReact, que nos permite identificar cuando un elemento esta visible,
// Tambien existe intersection observer

// document.addEventListener('DOMContentLoaded', () => {
    
//     const observer = new IntersectionObserver( entries => { // Aqui estoy inicializando el observer
//         console.log(entries[0]); // Este console.log se mantiene enviando informacion segun la observaciones del componente 
//         // tambien aqui puedo ejecutar cualquier logica e instrucción deseada
//         // ejemplo 
//         if(entries[0].isIntersecting){
//             // console.log('Ya esta visible');
//         }
//     });

//     observer.observe(document.querySelector('.class')); // Aqui estoy ejecutando el observer al componenete deseado
// })


// Detectar si hay conexión a internet o no
// window.addEventListener('online', estadoDeLaConexion);
// window.addEventListener('offline', estadoDeLaConexion);

// function estadoDeLaConexion(){
//     if(navigator.onLine){
//         console.log('Estas conectado a internet');
//     }else{
//         console.log('No estas conectado a internet');
//     }
// }

// Ejecutar y salir de pantalla completa
// document.addEventListener('DOMContentLoaded', () => {

//     const abrirBtn = document.querySelector('#pantalla-completa');
//     const salirBtn = document.querySelector('#salir-pantalla-completa');


//     abrirBtn.addEventListener('click', pantallaCompleta);
//     salirBtn.addEventListener('click', cerrarPantallaCompleta);


//     function pantallaCompleta(){
//         document.documentElement.requestFullscreen();
//     }

//     function cerrarPantallaCompleta(){
//         document.exitFullscreen();
//     }
// })


// Detectar cuando estamos viendo la pagina web actual
// document.addEventListener('visibilitychange', () => {
//     if(document.visibilityState === 'visible'){
//         console.log('Ejecutar la funcion que reproduce los videos');
//     }else {
//         console.log('Pausar el video');
//     }
// })

// Speech API
// nos permite capturar lo que esta hablando el usuario y transcribirlo, esta api exige permisos
// por parte del usuario
document.addEventListener('DOMContentLoaded', () => {

    const salida = document.querySelector('#salida');
    const microfono = document.querySelector('#microfono');

    microfono.addEventListener('click', ejecutarSpeechApi);

    function ejecutarSpeechApi(){

        const SpeechRecognition = webkitSpeechRecognition; // Inicio el webkit
        const recognition = new SpeechRecognition(); // Instancio un nuevo objeto

        recognition.start();

        recognition.onstart = function(){
            salida.classList.add('mostrar');
            salida.textContent = 'Escuchando...';
        };

        recognition.onspeechend = function(){
            salida.textContent = 'Dejo de grabar...';
            recognition.stop();
        };

        recognition.onresult = function(e){
            console.log(e.results);

            const {confidence, transcript} = e.results[0][0];

            const speech = document.createElement('p');
            speech.innerHTML = `Grabado: ${transcript}`;

            const confiabilidad = document.createElement('p');
            confiabilidad.innerHTML = `Confiabilidad de la información ${ parseInt(confidence * 100) }% `

            salida.appendChild(speech);
            salida.append(confiabilidad);
        }
    }
})



