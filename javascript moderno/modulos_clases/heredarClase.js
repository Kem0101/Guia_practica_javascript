import { Cliente } from './modulosES.js';

export class Empresa extends Cliente {
    constructor(nombre, saldo, categoria, mostrarInfo){
        super(nombre, saldo, mostrarInfo);
        this.categoria = categoria;

    }

    mostrarInfo(){
        return `nombre ${this.nombre} con saldo ${this.saldo} y categoria ${this.categoria}`
    }
}