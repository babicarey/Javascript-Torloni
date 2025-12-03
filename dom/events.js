let elementBtn = document.getElementById("btn");
let elementoIdLeandra = document.getElementById("tecnica")
let novoElemento = document.createElement("a");
novoElemento.textContent = "Gemini | yunkvino";
novoElemento.href = "https://www.youtube.com/watch?v=L8B9_R1eCz8&list=RDL8B9_R1eCz8&start_radio=1";


elementBtn.addEventListener("click", () => {


    // alert("Você clicou no botão");

    // elementBtn.style.backgroundColor = "purple";

    document.body.appendChild(novoElemento);
//    console.log(document.body.children);

document.body.children[1].removeChild(elementoIdLeandra)
   

})
