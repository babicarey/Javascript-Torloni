// let valorCompra = Number(prompt("Digite o valor total da compra: "));

// let desconto = 0;

// if (valorCompra <= 100) {
//     desconto = 0;
// } else if (valorCompra <= 200) {
//     desconto = valorCompra * 0.10;
// } else {
//     desconto = valorCompra * 0.20;
// }

// let valorFinal = valorCompra - desconto;

// alert("Valor da compra: R$ " + valorCompra.toFixed(2) +
//       "\nDesconto aplicado: R$ " + desconto.toFixed(2) +
//       "\nValor final a pagar: R$ " + valorFinal.toFixed(2));

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