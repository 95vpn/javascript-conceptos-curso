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
