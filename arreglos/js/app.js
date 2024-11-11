let arreglo = [96, 'string', {}, true, [1, 2, 2]];

console.log(arreglo)

const salad = new Array(2, 3, 4)
console.log(salad)
console.log(new Array())

let arreglo1 = [ 10, 8, "manzana", "pera", true, false];
console.log(arreglo1[2])
arreglo1[0] = "django";
console.log(arreglo1[0])

console.log(arreglo1.length)

arreglo1.forEach(function(elemento, indice, array){
    console.log(elemento, indice)
})

//añadir un elemento al ultimo push
let nuevaLogitud = arreglo1.push('Naranja')
console.log(nuevaLogitud)
console.log(arreglo1)

//Elimina el ultimo elemento
let ultimo = arreglo1.pop()
console.log(arreglo1)

//añade un elemento al principio del array
let addArreglo1 = arreglo1.unshift("fresa")
console.log(arreglo1)

//alimina el primer elemento del array
let eliArreglo1 = arreglo1.shift()
console.log(arreglo1)

//Encuentra el indice del elemento del array
let encIndice = arreglo1.indexOf( "pera")
console.log(encIndice)


//Elimina uno o varios elemento mediante su posiciín
let eliminarElem = arreglo1.splice(2,2)
console.log(eliminarElem)
console.log(arreglo1)

let copiaArr = arreglo1.slice()
console.log(copiaArr)
console.log(arreglo1)

//recorrer un arreglo

let arreglo2 = [1, 2, 3, 4, 5]
console.log(arreglo2.length)
for(let i = 0; i < arreglo2.length; i++){
    console.log(arreglo2[i])
}


