if(true) console.log('first')

if(43) 
    console.log('43 es truthy')

//cuando el bloque de código está compuesto por más de una linea de codigo

if(true) {
    console.log('first')
    console.log('34')
}

let edad = 20;
if(edad >= 18) {
    console.log('Eres mayor de edad')
} else {
    console.log('Eres menor de edad')
}

//else if -> nos ayuda a especificar multiple condiciones

let calificacion = 2;

if(calificacion == 10) {
    console.log('Excelente🚗')
} else if(calificacion > 7) {
    console.log('Muy Bien 🚓')
} else if(calificacion > 5) {
    console.log('Puedes mejorar 🚕')
} else {
    console.log('reprobado 🛺')
}