function exibirTabuada(){
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));


console.log (`====TABUADA ${numero}====`)

for (let i = 1; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i ));
}

}

exibirTabuada();

function exibirTabuada(){
    let nomesolicitado = prompt("digite seu nome ");

return nomesolicitado;
}

function exibirnomesolicitado(){
    
}

// let nome = exibirTabuada();

// alert(nome)

function somaDoisNumeros(numero1, numero2){

    console.log(numero1+numero2);
}

somaDoisNumeros(10,10);

//Crie função para o exercicio 08 de Estrutura Condicional.
//Passe via parametro o peso e a altura.


function calcularIMC (peso, altura ){
   

let imc = peso / (altura * altura);

let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = "Sobrepeso";
} else if (imc >= 30.0 && imc <= 34.9) {
    classificacao = "Obesidade grau 1";
} else if (imc >= 35.0 && imc <= 39.9) {
    classificacao = "Obesidade grau 2";
} else {
    classificacao = "Obesidade grau 3";
}

alert("Obesidade grau 3. Se cuide por favor, sua vida estáem risco🤰");
} 
let pesoDigitado = parseFloat(prompt("Digite seu peso em kg:"));
let alturaDigitado = parseFloat(prompt("Digite sua altura em metros:"));

calcularIMC(pesoDigitado, alturaDigitado);