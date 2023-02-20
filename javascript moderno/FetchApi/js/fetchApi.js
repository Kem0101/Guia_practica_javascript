// NOTA: FetchApi no soporta XML solo puede cargar JSON y (textos planos)
// NOTA: Leer la docs de axios

// // Obtener datos desde un txt
// document.addEventListener('DOMContentLoaded', () => {

//     const cargarTxtBtn = document.querySelector('#cargarTxt');
//     cargarTxtBtn.addEventListener('click', obtenerDatos);

//     function obtenerDatos(){

//         const url = 'javascript moderno/FetchApi/data/datos.txt';

//         fetch(url)
//              .then( (respuesta) => {
//                 console.log(respuesta);

//                 return respuesta.text()
//             })
//             .then( datos => {
//                 console.log(datos)
//             })
//             .catch(error => {
//                 console.log(error);
//             })
            
//     }

// })


// Obtener datos desde un objecto
// document.addEventListener('DOMContentLoaded', () => {

//     const cargarJsonBtn = document.querySelector('#cargarJSON');
//     cargarJsonBtn.addEventListener('click', obtenerDatos);


//     function obtenerDatos(){
        
//         const url = 'javascript moderno/FetchApi/data/empleado.json';

//         fetch(url)
//             .then( respuesta => respuesta.json())
//             .then( resultado => mostrarHTML(resultado))
//     }

//     function mostrarHTML({empresa, id, nombre, trabajo}){
//         const contenido = document.querySelector('.contenido');

//         contenido.innerHTML = `
//             <p>Emplado: ${nombre} </p>
//             <p>Id: ${id} </p>
//             <p>Empresa: ${empresa} </p>
//             <p>Trabajo: ${trabajo} </p>
//         `;

//     }

// })

// Obtener datos desde un array 
// document.addEventListener('DOMContentLoaded', () => {
//     // Si quiero que estos datos se muestren inmediatamente cargue mi pagina puedo hacer los siguiente
//     // document.addEventListener('DOMContentLoaded', obtenerDatos)
//     // y eliminar cargarJsonArrayBtn y su evento escucha 

//     const cargarJsonArrayBtn = document.querySelector('#cargarJsonArray');
//     cargarJsonArrayBtn.addEventListener('click', obtenerDatos);


//     function obtenerDatos(){
        
//         const url = 'javascript moderno/FetchApi/data/empleados.json';

//         fetch(url)
//             .then( respuesta => respuesta.json())
//             .then( resultado => mostrarHTML(resultado))
//     }

//     function mostrarHTML(empleados){
//         const contenido = document.querySelector('.contenido');

//         let html = '';

//         empleados.forEach( empleado => {
//             const {id, nombre, empresa, trabajo} = empleado

//             html += `
//                 <p>Emplado: ${nombre} </p>
//                 <p>Id: ${id} </p>
//                 <p>Empresa: ${empresa} </p>
//                 <p>Trabajo: ${trabajo} </p>
//             `;
//         });

//         contenido.innerHTML = html;

        
//     }

// })


// Obtener datos desde una API
document.addEventListener('DOMContentLoaded', () => {
    // Si quiero que estos datos se muestren inmediatamente cargue mi pagina puedo hacer los siguiente
    // document.addEventListener('DOMContentLoaded', obtenerDatos)
    // y eliminar cargarJsonArrayBtn y su evento escucha 

    const cargarApiBtn = document.querySelector('#cargarAPI');
    cargarApiBtn.addEventListener('click', obtenerDatos);


    function obtenerDatos(){
        
        const url = 'https://picsum.photos/list';

        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarHTML(resultado))
        
    }

    function mostrarHTML(datos){
        const contenido = document.querySelector('.contenido');

        let html = '';

        datos.forEach( perfiles => {
            const {author, author_url} = perfiles

            html += `
                <p> Author: ${author} </p>
                <a href="${author_url}" target="_blank" >Ver Imagen </a>
            `;
        });

        contenido.innerHTML = html;

        
    }

})

