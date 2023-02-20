// Guardar un valor en local storage
// localStorage.setItem('Nombre', 'Sam');

// Local storage solo guarda string, si quiero guardar objecto o array debo convertirlos en string
// con el metodo JSON.stringify(propiedad);

// const producto = {
//     nombre: 'Laptop mac pro',
//     precio: 2000
// }

// const productoString = JSON.stringify(producto); // Convirtiendo objecto en un string
// localStorage.setItem('Producto', productoString);   


// const meses = ['Enero', 'Febrero', 'Marzo'];
// localStorage.setItem('Meses', JSON.stringify(meses));


// TRAER DE VUELVE VALORES DESDE LOCAL STORAGE
// const nombre = localStorage.getItem('Nombre'); // un string
// console.log(nombre);

// const productojSON = localStorage.getItem('Producto');
// console.log(JSON.parse(productojSON));

// const meses = localStorage.getItem('Meses');
// const mesesJSON = JSON.parse(meses);
// console.log(mesesJSON);


// BORRAR DATOS DEL LOCAL STORAGE Y ACTUALIZARLOS
// localStorage.removeItem('Nombre');

// No existe metodo para actualizar un registro directamente del local storage, hay que llamarlo y rescribirlo
// const mesesArr = JSON.parse(localStorage.getItem('Meses'));
// console.log(mesesArr);
// mesesArr.push('Abril');
// console.log(mesesArr);
// localStorage.setItem('Meses', JSON.stringify(mesesArr));
