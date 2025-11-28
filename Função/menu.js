//1
function conferirSequencia (){
let n1 = Number ( prompt(" Digite o primeiro número"));
let n2 = Number ( prompt(" Digite o segundo número"));
let n3 = Number ( prompt(" Digite o terceiro número"));


if ( n1 < n2 && n2 < n3 ) {
     alert(" Os números estão em ordem crescente");
} else{
     alert(" Os números não estão em ordem crescente");
}
}

//2
function descontoNaCompra() {
    let valorTotalCompra = parseFloat(prompt("Digite o valor total da compra: "))

let desconto;

if (valorTotalCompra <= 100) {

}

// else if (valorTotalCompra > 100 && valorTotalCompra <= 200)

else if (valorTotalCompra <= 200) {
    desconto = 0.1;
}

else {
    desconto = 0.2;
}

let valorFinal = valorTotalCompra - (valorTotalCompra * desconto);

alert(valorFinal)
}  

//3
function imparPar() {
    let numero = parseInt(prompt("Digite um número válido"))

if (numero % 2 === 0) {
    alert("O número " + numero + " é PAR.");

}else {
    alert ("O número " + "é ÍMPAR");
}
}

//4
function crescenteOuDecrescente() {
    let n1 = Number ( prompt(" Digite o primeiro número"));
let n2 = Number ( prompt(" Digite o segundo número"));
let n3 = Number ( prompt(" Digite o terceiro número"));


if ( n1 < n2 && n2 < n3 ) {
     alert(" Os números estão em ordem crescente");
} else{
     alert(" Os números não estão em ordem decrescente");
}
}

//5
function notaDosAlunos() {
    alert("Informe ás notas de 0 á 10")

let nota1 = parseFloat(prompt("Digite a primeira nota:"))
let nota2 = parseFloat(prompt("Digite a segunda nota:"))
let nota3 = parseFloat(prompt("Digite a terceira nota:"))
let nota4 = parseFloat(prompt("Digite a quarta nota:"))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("A média do aluno é: " + media)

if(media >= 7){
    console.log("Aprovado")
}
else if(media < 7 && media >= 5){
    console.log("Recuperação")
}
else{
    console.log("Reprovado ;-;")
}
}