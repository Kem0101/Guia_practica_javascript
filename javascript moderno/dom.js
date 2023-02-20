let elemento;

// elemento = document;
// elemento = document.all;
// elemento = document.head;
// elemento = document.body;
// elemento = document.domain;
// elemento = document.forms;
// elemento = document[0].id;
// elemento = document[0].method;
// elemento = document[0].classList;
// elemento = document[0].actio;

// elemento = document.links;
// elemento = document.links[4];
// elemento = document.links[4].classList;
// elemento = document.links[4].className;

// elemento = document.images;

// elemento = document.scripts;

// console.log(elemento);

// querySelector => tiene la opcion tipo css laclase:nth-child(posición) para elegir un elemento en concreto
// querySelector => te permite seleccionar clases y tambien id
// querySelectorAll => retorna todos los elementos que cumplan con el selector pasado

// acceder a elementos html y modificar el contenido con querySelector, el css, etc
// variable.innerText => si en el css existe visibility: hidden; no lo va a encontrar
// variable.textContent => si en el css existe visibility: hidden; si lo va a encontrar
// viriable.innerHTML => se trae las etiquetas html

// const imagen = document.querySelector('.card img);
// imagen.src = 'ruta_del_archivo.jpg'

// modificar el estilo de una propiedad desde js
// const encabezado = document.querySelector('h1');
// encabezado.style.backgroundColor = 'blue';

// const card = document.querySelector('.card');
// card.classList.add('nueva-clase');
// card.classList.remove('card');

// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.firstElmentChild); puede seleccionar el primer elemento de la navegación
// console.log(navegacion.lastElmentChild); puede seleccionar el ultimo elemento de la navegación
// console.log(navegacion.childNodes) con childNodes los espacios en blancos son considerados elemetos
// console.log(navegacion.children) con children los espacios en blancos no son considerados elementos

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

// const card = document.querySelector('.card');
// console.log(card.children[0]);

// console.log(card.children[1].children[1].textContent);
// card.children[1].children[1].textContent = 'Modificando este elemento'

// card.children[0].src = 'img/imagen2.jpg';

// TRAVERSING DEL HIJO AL PADRE
// console.log(card.parentNode) parentNode toma en cuenta los espacios como un elemento se recomienta parentElement
// console.log(card.parentElement.parentElement) me permite ir subiendo a los elementos padres segun existan

// TRAVERSING DE ETIQUETAS HIJAS DEL MISMO PADRE
// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);


// TRAVERSING DE ETIQUETAS HIJAS DEL MISMO PADRE DEL ULTIMO HACIA LOS ANTERIORES 
// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElmentSibling);


// ELIMINAR ELEMENTOS CON JS
// const primerEnlace = document.querySelector('a');
// primerEnlace.remore();

// ELIMINAR ELEMENTOS DESDE EL PADRE
// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.child) => esto me devuelve cada hijo con su indice
// navegacion.removeChild(navegacion.child[1]); asi eliminamos un hijo desde el padre haciendo referencia a su posición


// Generar HTML con JS (crear elementos)
// const enlace = document.createElement('A'); creando etiqueta 
// enlace.textContent = 'Nuevo Enlace'; agregando el texto
// enlace.href = '/nuevo-enlace'; generando un elemento href con una ruta dentro de la etiqueta
// enlace.target = '_blank';  target='blank' para abrir el enlace en una nueva pagina
// console.log(enlace);

// pudiera ir agregando cualquier tipo de elemeto HTML e insertarlo al enlace
// enlace.setAttribute('data-enlace', 'nuevo-enlace');

// enlace.classList.add('nueva-clase'); 

// enlace.onClick = miFuncion;

// Seleccionar la etique donde insertaremos el nuevo contenido HTML
// const navegacion = document.querySelector('.navegacion'); 
// navegacion.appendChild(enlace); Esto agrega el nuevo enlace al final de la pagina

// console.log(navegacion.children); de esta forma sabemos las posiciones que existen dentro de navegación

// navegacion.insertBefore(enlace, navegacion.children[1]); insertar un elemento en la posición deseada

// function miFuncion(){ alert('diste click') };


// Dom scripting para crear un Card

// const parrafo1 = document.createElement('p');
// parrafo1.textContent('Concierto');
// parrafo1.classList.add('categoria', 'concierto');

// const parrafo2 = document.createElement('p');
// parrafo2.textContent('Concierto Cristiano');
// parrafo2.classList.add('titulo');

// const parrafo3 = document.createElement('p');
// parrafo3.textContent('$1000 por personas');
// parrafo3.classList.add('precio');

// crear div con la clase de info

// const info = document.createElement('div');
// info.classList.add('info');
// info.appendChild(parrafo1);
// info.appendChild(parrafo2);
// info.appendChild(parrafo3);

// crear la imagen

// const imagen = document.createElement('img');
// imagen.src = '/img/conciento.jpg';

// crear el card

// const card = document.createElement('div');
// card.classList.add('card');

// card.appendChild(imagen); asignar la imagen
// card.appendChild(info); asignar info

// INSERTAR EN EL HTML
// const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.insertBefore(card, contenedor.children[0]);


// EVENTOS JS
// const btnFlotante = document.querySelector('.btn-flotante');
// const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', mostrarOcultarFooter);

// function mostrarOcultarFooter(){
//     if(footer.classList.contains('activo')){
//         footer.classList.remove('activo');
//         this.classList.remove('activo');
//         this.textContent = 'Idioma y Moneda';
//     }else {
//         footer.classList.add('activo');
//         this.classList.add('activo');
//         this.textContent = 'X Cerrar';
//     }
// }
