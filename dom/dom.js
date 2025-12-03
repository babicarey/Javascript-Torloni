let elementbody = document.getElementsByTagName("body"); 

console.log(elementbody);

let elementH1 = document.getElementsByTagName("h1"); 

elementH1[0].textContent= "Babi";
// console.log(elementH1)
 


let tecnicaLeandra = document.getElementById("tecnica");
console.log(tecnicaLeandra);

let jogadores = document.getElementsByClassName("jogador");

console.log(jogadores)

//-------------exibe po item 4 dos elementos que possuem a class jogador-------------
let quatroJogadores = document.getElementsByClassName("jogador");

console.log(quatroJogadores[4].textContent);


let jogadorMuralha = document.getElementsByClassName("jogador");
console.log(jogadorMuralha);
console.log(jogadorMuralha[3]);
jogadorMuralha[3].textContent = "bolacha";
jogadorMuralha[3].style.color = "blue";


tecnicaLeandra.style.color = "red";
tecnicaLeandra.style.fontSize = "50px";



