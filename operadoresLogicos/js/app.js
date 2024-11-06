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