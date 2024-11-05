#  Curso Javascript Conceptos

**Javascript**  en un lenguaje de programción interpreado de alto nivel, lo que significa que no puede ser compilado antes de ser ejecutado. Lee el programa en tiempo de ejecución (se encarga de ir leyendo linea por linea).

**Javascript** en un lenguaje **dinamicamente tipado**, hace referencia a que no hay que especificar el tipo de dato cuando la declaras. También es un lenguaje de **tipado debil** que permite realizar operaciones entre diferentes tipos de datos sin convertirlos previamente.

## Variables y Contantes

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
- ** BigInt:** Representa valores númericos demasiado grandes `console.log(typeof(27n)) -> 'bigint'`.
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

