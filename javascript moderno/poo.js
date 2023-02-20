
// // class 
// class Student {

//     #nombre // de esta forma agregamos propiedades privadas

//     constructor(nombre, materia){
//         this.#nombre = nombre; // con el signo de # agregamos las propiedades privadas
//         this.materia = materia;
//     }

//     mostrarInfor(){ // esto es un método
//         console.log(`Nombre: ${this.nombre} tu materia es: ${this.materia} horario ${this.horario}`);
//     }

//     static institucion(){ // esto es un método estatico que pertenece a la clase
//                           // se llama invocando la clase y luego dicho metodo, no por instancia de objeto
//         return `Bucle calidad continua te prepara para el presente y futuro`;
//     }
// }

// const student = new Student('Juan', 'Programción');
// student.mostrarInfor();
// console.log(Student.institucion()); // de esta forma llamamos los métodos estaticos


// // Herencia 
// class Profesor extends Student {
//     constructor(nombre, materia, horario){
//         super(nombre, materia);
//         this.horario = horario;
//     }

// }

// const profesor = new Profesor('Sam', 'Base de datos', '5pm');
// console.log(profesor);
// profesor.mostrarInfor(); // este metodo no ha sido definido en la clase Profesor pero 
//                          // se hereda de la clase padre Student