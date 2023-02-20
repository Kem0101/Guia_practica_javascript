import { Empresa } from './heredarClase.js';
import { nombreCliente, mostrarInfo, Cliente, saldo } from './modulosES.js';

const cliente = new Cliente(nombreCliente, saldo);

// console.log(cliente.mostrarInfo());


const empresa = new Empresa('Sam', 8500, 'Desarrollador');
console.log(empresa.mostrarInfo());   