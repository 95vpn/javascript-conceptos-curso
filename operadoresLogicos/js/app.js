//OR ||
console.log(null || undefined  || 0)

true || console.log('first')
console.log(false || 1)


function A() {
    console.log('llamada A')
    return false;
}

function B() {
    console.log('llamada B')
    return true;
}

// console.log(B() || A())


console.log(A() || B())

// and &&
console.log(2 && 3 && 0 && 'asder')

console.log(true && 15 && '0' && 'asder')

//not

console.log(!"")

//double not

console.log(!!"")
console.log(!!"0")

// nullish coalescing ?? (fusión de nulos)

let valor = false;
console.log(valor ?? 'retorna esto')

let numero = 8;
console.log(numero ?? 'retorna esto')

let numero1 = 0;
console.log(numero1 ?? 'retorna esto')

let texto = '';
console.log(texto ?? 'retorna esto')

let texto1;
console.log(texto1 ?? 'retorna esto')

let valor1 = null;
console.log(valor1 ?? 'retorna esto')

