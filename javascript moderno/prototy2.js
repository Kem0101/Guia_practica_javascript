// CREADO PROTOTY

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
}

Cliente.prototype.tipoCliente =  function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }
    else if(this.saldo > 5000){
        tipo = 'Platinum';
    }
    else {
        tipo = 'Basico';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `El nombre del cliente es ${this.nombre} su saldo ${this.saldo} y su estatus es ${this.tipoCliente() }`
}


Cliente.prototype.retirar = function(retiro){
    this.saldo -= retiro
}



// Instarciar objecto
// const sam = new Cliente('Sam', 12000);
// console.log(sam.tipoCliente());
// console.log(sam.nombreClienteSaldo());
// sam.retirar(3000);
// console.log(sam.nombreClienteSaldo());

// console.log(sam)


// HEREDAR PROTOTY
function Empleado(nombre, saldo, activo){
    Cliente.call(this, nombre, saldo);
    this.activo = activo
}

Empleado.prototype = Object.create(Cliente.prototype);

Empleado.prototype.estatusEmpleado = function(){
    return `El empleado esta activo: ${this.activo} actualmente`;
}


// INSTANCIAR
// const joel =  new Empleado('Joel', 8000, true);
// console.log(joel);
// console.log(joel.nombreClienteSaldo());
// console.log(joel.estatusEmpleado());