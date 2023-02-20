// ESTO ES PROGRAMACION SIN USAR PROTOTY SI UN PROYECTO ES PEQUEÑO DE NO DEMASIADA FUNCIONES 
// Y DONDE NO MUCHA GENTE ESTARA MODIFICANDO EL CODIGO NO ES NECESARIO USAR PROTOTY
// SIN EMBARGO SI EL PROYECTO ES MUY GRANDE CON MUCHOS OBJECTOS Y PERSONAS MODIFICANDO EL CODIGO
// EL PROTOTY TE AYUDA A DEFINIR CUALES SON LAS FUNCIONES EXCLUSIVAS DE CADA OBJECTO

// DIFERENCIA ENTRE UNA FUNCTION ES QUE BUSCA EN EL MISMO OBJECTO Y EL ARROW FUNCTION BUSCA DESDE LA VENTA GLOBAL

// Objecto literal
const persona = {
    nombre: 'Sam',
    apellido: 'Martinez',
    edad: 31
}

// console.log(persona);

// Definición de objecto de tipo clase
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
}
const sam = new Cliente('Sam', 1000);


function Empresa(nombre, categoria){
    this.nombre = nombre;
    this.categoria = categoria;
}
const bucle = new Empresa('Bucle calidad continua', 'desarrollo');


function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un salgo de ${saldo}$ US `
}
console.log(formatearCliente(sam));


function formatearEmpresa(empresa){
    const {nombre, categoria} = empresa;
    return `La empresa ${nombre} de tipo ${categoria}`
}   
console.log(formatearEmpresa(bucle));