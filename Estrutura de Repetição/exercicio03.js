let tabuadaEscolhida = parseInt(prompt("Digite um número da tabuada desejada: "))

// 2 X 1 = 2
// 2 X 2 = 4
// 2 X 3 = 6
// 2 X 4 = 8
// 2 X 5 = 10
// 2 X 6 = 12
// 2 X 7 = 14
// 2 X 8 = 16
// 2 X 9 = 18
// 2 X 10 = 20

//1 numero dentro da condicao do for - inicializando - variavel
//2 numero dentro da condicao do for - condição - verifica a volta da variavel
//3 numero dentro da condicao do for - incremento - soma das voltas

console.log (`=====TABUADA ${tabuadaEscolhida}=====`);

for (let i = 1; i <= 10; i++){

    console.log(tabuadaEscolhida + " x " + i + " = " + (tabuadaEscolhida * i));
    
}