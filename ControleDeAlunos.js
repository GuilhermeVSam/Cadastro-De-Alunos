let numeroAlunos = 28;

for(let Contador = 0; Contador <= numeroAlunos; Contador++) {
    if(Contador == 0) {
    console.log("O numero é Zero");
    } else if(Contador % 2 == 0) {
    console.log(`O numero ${Contador} é Par`)
    } else if (Contador % 2 == 1) {
    console.log(`O numero ${Contador} é Impar`)
    }
}