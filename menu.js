function exibirTabuadaEscolhida(){
    let tabuadaEscolhida = parseInt (prompt("Digite o númerode uma tabuada desejada"));

    console.log(`====TABUADA ${tabuadaEscolhida}`);

    for (
        let i = 1; i <= 10; i++) {
            console.log(tabuadaEcolhida + "x" + i + "=" + (tabuadaEscolhida * i));
         }
}
exibirTabuadaEscolhida();
