// PARA USAR MODULOS EN JS Y PODER EXPORTAR E IMPORTAR VARIABLES, OBJETOS, FUNCIONES, CLASES ETC
// SI NO ESTAMOS USANDO ALGUNA LIBRERIA O FRAMEWORK ENTOCES DEBEMOS USAR type="module" EN LOS ARCHIVOS
// JS 

// los export default son otra forma de exportar funciones, clases, etc, esto se importan fuera de las llaves
// y pueden tener un nuevo al definise y otro al llamarse porque funcionan con un alias, asi como tambien
// puedes definir una funcion sin nombre y llamarla con cualquier nombre y va a funcionar por el reconocimiento de alias
// solo puede haber un export default por archivos




// Ejemplo con una clase
export const nombreCliente = 'Sam';
export const saldo = '70,000 US';

export function mostrarInfo(nombre, saldo){
    return `nombre ${nombre} y saldo ${saldo}`
}

export class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo(){
        return `nombre ${this.nombre} con saldo ${this.saldo}`
    }
}