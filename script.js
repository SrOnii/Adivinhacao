const num = document.getElementById("num");
const bverificar = document.getElementById("bverificar");
const bgeraroutro = document.getElementById("bgeraroutro");
const resultado = document.querySelector("#resultado");
const img = document.querySelector("#img");

let sorteado = Math.ceil(Math.random()*100);

function gerarNumero(){
    num.value = "";
    resultado.innerHTML = "";
    resultado.style.backgroundColor = "white";
    img.innerHTML = "";
    sorteado = Math.ceil(Math.random()*100);
}

console.log(sorteado);

function Jogar(){
    let valornum = num.value;
    if(valornum == ""){
        resultado.innerHTML = "Não Contêm Nada";
        resultado.style.backgroundColor = "#d9534f";
    }
    else{
        let diferenca = sorteado - valornum;
        if(diferenca == 0){
            resultado.innerHTML = "Parabens Você Acertou";
            resultado.style.backgroundColor = "#5cb85c";
            let tImg = document.createElement("img");
            tImg.setAttribute("src","joinha.jpg");
            img.appendChild(tImg);
        }
        else if(diferenca > 0){
            resultado.innerHTML = "Numero Sorteado é MAIOR";
            resultado.style.backgroundColor = "#f0ad4e";
        }
        else{
            resultado.innerHTML = "Numero Sorteado é MENOR";
            resultado.style.backgroundColor = "#f0ad4e";
        }
    }
}

bverificar.addEventListener("click", Jogar);
bgeraroutro.addEventListener("click", gerarNumero);
