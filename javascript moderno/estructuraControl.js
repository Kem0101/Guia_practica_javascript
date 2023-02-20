// Switch case
const metodoDePago = 'Paypal';


switch(metodoDePago){
    case 'Efectivo':
        // console.log(`Pagaste con ${metodoDePago}`);
        break;

    case 'Cheque':
        // console.log(`Pagaste con ${metodoDePago}`);
        break; 

    case 'Transferencia':
        // console.log(`Pagaste con ${metodoDePago}`);
        break; 

    default: 
        // console.log('Selecciona un método de pago valido');
}

// Operador ternario
const autenticado = false;
const montoSuficiente = true;

// console.log( puedePagar ? 'Pago exitoso' : 'Pago fallido');
 
// tambien puedo tener if anidados con el operador ternario
//console.log( autenticado ? montoSuficiente ? 'Pago exitoso' : 'Monto insuficiente' : 'No autenticado' );
