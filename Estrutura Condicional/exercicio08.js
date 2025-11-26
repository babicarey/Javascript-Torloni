// let peso = parseFloat(prompt("Digite seu peso: "));
// let altura = parseFloat(prompt("Digite sua altura: "));

// let imc = peso / (altura * altura);

// console.log("Seu IMC é: " + imc.toFixed(2));

// if (imc < 18.5) {
//     console.log("Abaixo do peso");
// } else if (imc < 25) {
//     console.log("Peso normal");
// } else if (imc < 30) {
//     console.log("Sobrepeso");
// } else if (imc < 35) {
//     console.log("Obesidade grau 1");
// } else if (imc < 40) {
//     console.log("Obesidade grau 2");
// } else {
//     console.log("Obesidade grau 3");
// }
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

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