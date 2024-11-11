#  Curso Javascript Conceptos

**Javascript**  en un lenguaje de programción interpreado de alto nivel, lo que significa que no puede ser compilado antes de ser ejecutado. Lee el programa en tiempo de ejecución (se encarga de ir leyendo linea por linea).

**Javascript** en un lenguaje **dinamicamente tipado**, hace referencia a que no hay que especificar el tipo de dato cuando la declaras. También es un lenguaje de **tipado debil** que permite realizar operaciones entre diferentes tipos de datos sin convertirlos previamente.

## Variables y Constantes

En programación una variable es un espacio en memoria  en la cual podemos guardar números, texto.

Las variables contan de tres elementos:

`let nombre = 'user'`

**nombre:** es el indentificador único para referirse a la variable.
**Tipo de dato:**  es el tipo de información que se almacena en la variable, puede ser decimales, cadenas de texto, booleanos.
**Valor:** es el contenido actual almacenado en la variable.

### Reglas para nombrar variables

- Los nombres de las variables no pueden contener espacios.
- Los nombres de las variables pueden ininiar con una letra, con guión bajo o con el signo de pesos o de dolar ($).
- No se pueden utilizar como variables palabras reservadas del lenguaje.

## Operaciones Aritméticas

Algunos operadores en Javascript son:
- **Suma: **se utiliza eñ operador + `(a + b)`.
- **Resta:** se utiliza el operador - `(a - b)`.
- **Multiplicación:** se utiliza el operador `*` `(a * b)`.
- **División:** se utiliza el operador / `(a / b)`.

  ###  Librería Math

Existen varios methodos de la [librería Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math "librería Math") para hacer otra operaciones:
-  `Math.pow(20, 2) -> 400`
-  `Math.round(42.8) -> 43`
-  `Math.ceil(4.3) -> 5`
-  `Math.floor(4.9) -> 4`
- `Math.trunc(4.2) -> 4`
- `Math.sign(5) -> 1`
- `Math.abs(-5.5) -> 5.5`

## Tipos de Datos en Javascript

### Datos primitivos de Javascript

Existen seis tipos de datos primitivos controlados por el operador `typeof` :
- **String:** Representa datos textuales `console.log(typeof("user")) -> 'string'`.
- **Number:** Permite representar o manipular valores numéricos `console.log(typeof(259)) -> 'number'`.
- **Boolean:** Representa un valorr lógico true o false `console.log(typeof(true)) -> 'boolean'`.
- **Undefined:**  Representa una variable la cual no se le asignado un valor `console.log(typeof(undefined)) -> undefined`.
- **BigInt:** Representa valores númericos demasiado grandes `console.log(typeof(27n)) -> 'bigint'`.
- **Symbol:** Se usa para crear valores único, irrepetibles `console.log(typeof(Symbol)) -> ''function`.

###  Coerción de tipos

La coerción hace referencia a la converción automática o implicita de tipos de datos.

La conversión es similar a la coerción porque ambas convierten valores de un tipo de dato a otro. 

La coerción es implicita mientra la conversión puede ser implicita o explicita.

Ejemplo:

- Implicita `console.log(27 + '5') -> 275`.
- Explicita `console.log(27 + Number('5')) -> 32`
  
## Booleanos

El objeto Boolean es un dato de tipo lógico, dejando que javascript se encargue de convertirlo a cadena o número en función del contexto.
Consta de dos valores: 
- Un booleano **true** equivale a 1, para verdadero 
- Un booleano **false** equivale a 0, para falso.

Su uso es imprescindible para el uso de bucles y condicionales

### Valores Truthy y Falsy

Los valores convertibles a false se conocen como **falsy**, estos son:
- 0
- "" (string vacío)
- false
- NaN
- undefined
- null

Los valores **truthy** son todos los valores que no sean falsy, es aquel que es verdadero en un contexto booleano.

## Operadores de Comparación
Permiten comparar dos operadores y devuelven un valor booleano.

En caso de que los operadores sean de tipo diferente, javascript intenta convertirlos a un mismo tipo para poder compararlos.

| Operador  | Significado  |
| ------------ | ------------ |
|  `x == y` | Devuelve **true** si los dos operadores son iguales.  |
| `x === y`  | Devuelve **true** si los dos operadores son iguales y son del mismo tipo.   |
| `x != y`  | Devuelve **true** si los operadroes son diferentes.  |
| `x !== y`  | Devuelve **true** si los operadores son diferentes y son del mismo tipo.  |
|  `x > y` | Devuelve **true** si el operando de la izquierda es mayor que el operando de la derecha.  |
| `x >= y`  | Devuelve **true** si el operando de la derecha es mayor o igual al operando de la derecha.  |
| `x < y`  | Devuelve **true** si el operando de la izquierda es menor que el operando de la derecha.  |
| `x <= y `  | Devuelve **true** si el operando de la izquierda es menor o igual que el operando de la derecha.  |

Ejemplo:


```javascript
let resultado = 23 < 4;
// 23 no es menor que 4, resultado es false
resultado = 23 > 4;
// 23 es mayor 4, resultado es true
let edad = 24;
let resultado1 = resultado < edad;
// 	En Javascript al comparar un booleano (true) con un numero, true se convierte en 1 y false en 0, resultado1 es true por lo que 1 < 24.
```

### Comparación de Cadenas de texto
Al comparar cadenas de texto en Javascript usa los valores [unicode](https://es.wikipedia.org/wiki/Unicode "unicode") de los caracteres.

Si comparas letras minúsculas y mayúsculas, debes recordar que las mayúsculas tienen valores menores a las minúsculas.

```javascript
 let cadena1 = 'Javascript';
 let cadena2 = 'javascript'
 console.log(cadena1 < cadena2) -> true
```

## Operadores Lógicos
Los operadores lógicos comparan valores booleanos y devuelven valores booleanos.

- ### OR ` || `

Es representado por `||`
En la programación **clásica** si un operador es **true** devuelve **true**, de lo contrario devuelve **false**.
```javascript
console.log(true || true) -> true
console.log(true || false) -> true
console.log(false || true) -> true
console.log(false || false) -> false
```
**Multiples valores aplicados al operador `||`**

Evalua los operandos de izquierda a derecha.
Devuelve el primer valor verdadero o el último valor si todos son falsos.

```javascript
console.log(null || 1 || undefined || 0) -> 1
//devuelve el primer valor verdadero, 1

console.log(null || undefined || 0) -> 0
//devuelve el último valor si todo son falsos, 0
```
**Evaluación de Cortocircuito**
El operador `||` procesa sus argumentos hasta alcanzar el primer valor verdadero y ese valor se devuelve sin tocar el otro argumento.
```javascript
function A() {
	console.log('llamada A')
	return false;
}

function B() {
	console.log('llamada B') -> llamada B
	return true;
}

console.log(B() || A()) -> true
```

El operador `||` detiene la evalución al ejecutar la función `B()` y devuelve **true**.

A veces se usa el cortocircuito, para ejecutar comandos solo si la parte izquierda es falsa.

- ### AND &&

Es representado por `&&`

El la programación clásica devuelve **false** si un operador es **false** de lo contrario devuelve **true**. 

```javascript
console.log(true && true) -> true
console.log(true && false) -> false
console.log(false && true) -> false
console.log(false && false) -> false
```
**Multiples valores aplicados al operador `&&`**

Evalua los operandos de izquierda a derecha.
Devuelve el primer valor falso o el último valor si todos son verdadero.

```javascript
console.log(true && 15 && 0  && 'asder') -> 0
//devuerve el primer valor falsy

console.log(true && 15 && '0'  && 'asder') -> asder
//devuelve el último valor verdadero
```
> Precedencia del operador AND `&&` es mayor que la del operador OR `||`
El código `a && b || c && d` es lo mismo que `(a && b) || (c && d)`


- ### 	NOT `!`

Se representa con el signo de exclamación `!`.

Acepta un solo argumento y devuelve el valor contrario.

```javascript
console.log(!true) -> false
console.log(!"") -> true
```
El doble NOT `!!` sirve para convertir explicitamente cualquier valor a tipo booleano.

El primer `!` convierte el valor a booleano el segundo `!` lo invierte de nuevo.

```javascript
console.log(!!"") -> false
console.log(!!"0") -> true
//tenemos la conversión a booleano
```

La precedencia del `!!` es mayor que todos los operadores lógicos, se ejecuta primero antes que `&&` y `||`.

- ### Operador Nullish Coalescing `??`
Se escribe con doble signo de cierre de interrogación `??`

Es un operador que retorna el operando del lado derecho cuando el operando del lado izquierdo es `null` o `undefined`, caso contrario retorna el operando del lado izquierdo.

```javascript
let valor = false;
console.log(valor ?? 'retorna esto') -> false

let numero = 8;
console.log(numero ?? 'retorna esto') -> 8

let numero1 = 0;
console.log(numero1 ?? 'reotrna esto') -> 0

let texto = '';
console.log(texto ?? 'retorna esto') -> ''

let texto1;
console.log(texto1 ?? 'retorna esto') -> retorna esto

let valor1 = null;
console.log(valor1 ?? 'retorna esto') -> retorna esto
```

> Devuelve el primer argumento cuando no es `null` ni `undefined`

Comparación con OR `||`

El operador `||` puede ser usado de la misma manera que `??`.

```javascript
let definido = 'está definido';

console.log(null ?? undefined ?? definido ?? 'retorna esto') -> está definido

console.log(null || undefined || definido || 'retorna esto') -> está definido
```
> `||` Devuelve el primer valor verdadero.
> `??` Devuelve el primer valor definido.

### Precedencia
- La precedencia del operador `??` es la misma que `||`.
- `??` `||` son evaluados antes que `?` `=` pero después de la mayoría de operaciones como  `+` `*`.

### Prohibición de uso entre `??` , `||`, `&&`.
Se prohibe el uso de ?? con `||` y `&&`, salvo que la precedencia sea explécitamente especificada con paréntesis.

```javascript
console.log(1 && 2 ??3) -> Syntax error
console.log((1 && 2) ?? 3) -> 2
```

## Condiciones
Tomando deciciones en tu código, se puede condicionar un bloque código para que se ejecute unicamente si un criterio se a cumplido.

- Condicional **if**

**if** (condición) ejecuta código de ser verdadero (true).

`if(62) console.log('62 es truthy') -> 62 e truthy`

Cuando **if** tienen más de una linea de código se deben  utilizar llaves.

```javascript
if(18) {
	console.log('18 es truthy') -> 10 es truthy
	console.log('🚘') -> 🚘
}
````

- Condicional **if ... else**

Si el **if** no se cumple se ejecuta el **else**.

```javascript
let edad = 16;
if(edad >= 18) {
	console.log('Eres mayor de edad')
} else {
	console.log('Eres menor de edad') -> Eres menor de edad
}
```
- Condicional **else if**

Ayuda a especificar multiples condiciones, que significa 'de lo contrario si'

```javascript
let calificacion = 2;

if(calificacion == 10) {
    console.log('Excelente🚗')
} else if(calificacion > 7) {
    console.log('Muy Bien 🚓')
} else if(calificacion > 5) {
    console.log('Puedes mejorar 🚕')
} else {
    console.log('reprobado 🛺') -> reprobado 🛺
}
```

## Ciclos || Bucles

Un ciclo en programación también conocido como bucles son una estructura de control que permiten repetir un bloque de instrucciones las veces que sea necesario.

### Bucle for
Sintaxis:
```javascript
for( [instrucción_inicial];  [condición];  [instrucción_después_de _cada_interación] ){
	//bloque_de_instrucciones
}
```
**instrucción_inicial:** declaramos la variable con el valor inicial que se ejecuta el bucle.
**condición:** hasta que valor debe ejecutarse el bucle.
**instrucción_después_de _cada_interación:** es utilizada para incrementar o decrementar el valor de la variable luego de cada iteración.

Ejemplo:
```javascript
for(let i = 1; i <= 5; i++ ){
    console.log('repetir frase') ->
}
```
**instrucción_inicial:**let i = 1, varible declara i con el valor de 1.
**condición:**  i <= 5 se va a repetir la frase 5 veces.
**instrucción_después_de _cada_interación:** va ha incrementar el valor de la varible en 1 hasta menor o igual a 5.

### Bucle While
El bloque de código se ejecutará mientras la condicion sea verdadera.

Sintaxis:
```javascript
[instrucción_inicial]
while([condición]) {
	//instrucciones de código
	[instrucción_después_de _cada_iteración]
}
```
Ejemplo:
Resolviendo el ejemplo anterior pero ahora con while.
```javascript
let i = 1;
while(i<= 5) {
	console.log('Repetir frase')
	i++
}
```
**instrucción_inicial:** declaramos la variable con el valor inicial que se ejecuta el bucle.
**condición:** hasta que valor debe ejecutarse el bucle.
**instrucción_después_de _cada_interación:** es utilizada para incrementar o decrementar el valor de la variable luego de cada iteración.

### Bucle do ... while
Se ejecuta el bloque de intrucciones al menos una vez.

## Arreglos
Un arreglo es una colección de datos de cualquier tipo agrupados en una sola estructura.

**Datos de cualquier tipo: ** funciones, objetos, números, cadenas, booleanos incluso otros arreglos.

Los arreglos tienen longitud que es igual a la cantidad de elementos dentro del arreglo. La última posición del arreglo es la longitud del arreglo menos uno.

La posición de un elemento en el arreglo es conocido como indice, el indice del arreglo empieza con `0` y se incrementa en 1 con cada elemento.

Los arreglos se representan con corchetes `[ ]` y cada dato está separados por `(,)`.

```javascript
let arreglo = [96, 'string', {}, true, [1, 2, 2]];
indice  ->      0     1      2     3  	  4
```
### Obtener elementos dentro del arreglo
```javascript
let arreglo = [ 10, 8, "manzana", "pera", true, false]

console.log(arreglo[2]) -> "manzana"

```
### Método par arreglos
Dado el arreglo:
`let arreglo1 = [ 10, 8, "manzana", "pera", true, false];`

| Método  | Concepto  |
| ------------ | ------------ |
| push()  | Añade un elemento al final del Array |
```javascript
let nuevaLogitud = arreglo1.push('Naranja')
console.log(nuevaLogitud) -> 7
console.log(arreglo1) -> 10, 8, "manzana", "pera", true, false, Naranja 
```
| Método  | Concepto  |
| ------------ | ------------ |
| pop()  | Elimina el último elemento del Array  |
```javascript
let ultimo = arreglo1.pop()
console.log(arreglo1) -> 10, 8, "manzana", "pera", true, false
```
| Método  | Concepto  |
| ------------ | ------------ |
| unshift()  | Añade un elemento al principio del Array  |
```javascript
let addArreglo1 = arreglo1.unshift("fresa")
console.log(arreglo1) -> "fresa", 0, 8, "manzana", "pera", true, false
```
| Método  | Concepto  |
| ------------ | ------------ |
| shift()  | Elimina el primer elemento del Array  |
```javascript
let eliArreglo1 = arreglo1.shift()
console.log(arreglo1) -> 0, 8, "manzana", "pera", true, false
```
| Método  | Concepto  |
| ------------ | ------------ |
| indexOf()  | Encuentra el indice del elemento del Array  |
```javascript
let encIndice = arreglo1.indexOf( "pera")
console.log(encIndice) -> 3
```
| Método  | Concepto  |
| ------------ | ------------ |
| splice()  | Elimina uno o varios elementos mediante su posición  |
```javascript
let eliminarElem = arreglo1.splice(2,2)
console.log(eliminarElem) -> "manzana", "pera"
console.log(arreglo1) -> 0, 8, true, false
//splice modifica el arreglo original, es recomendable hacer una copia del arreglo
```
| Método  | Concepto  |
| ------------ | ------------ |
| slice()  | Copia un array  |
```javascript
let copiaArr = arreglo1.slice()
console.log(copiaArr) -> 0, 8, true, false
```
### Recorriendo Arreglos
```javascript
let arreglo2 = [1, 2, 3, 4, 5]
console.log(arreglo2.length) -> 5
for(let i = 0; i < arreglo2.length; i++
    console.log(i) -> 0, 1, 2, 3, 4
}
```
Para recorrer arreglos existe el bucle for pero tambien existen métodos alternativos que son más expresivos, legibles y fácil de entender al momento de leer el código.

- ### **forEach**








