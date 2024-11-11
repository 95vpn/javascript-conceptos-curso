//imprimir numeros del uno al 10

/*
instrucción inicial
Condicion
instrucción despues de cada iteracion
*/ 
for(let i = 1; i <= 10; i++) {
    if( i == 5) {
        break;
    }
    console.log(i)
}
console.log('hola')

for(let i = 1; i <= 5; i++ ){
    console.log('repetir frase')
}

for(let i = 1; i < 10; i++) {
    console.log(i)
    if(i % 2 != 0) {
        continue;
    }
    console.log(i)
    console.log('Ed par')
}

let i = 1;
while(i<= 5) {
	console.log('Repetir frase')
	i++;
}