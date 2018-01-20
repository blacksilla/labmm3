/**
 * Created by blacksilla on 13/01/2018.
 */
/**
 * Created by blacksilla on 13/01/2018.
 */
var posicao_jogador,posicao_fundo;
var c=1;

window.onload=function () {
    carregaElementos();
    window.onkeydown=function(e){processaTecla(e)};

};



function carregaElementos() {
    document.getElementById("player").style.left=0 +"px";
    document.getElementById("bg").style.left=0 +"px";
    posicao_jogador=parseFloat(document.getElementById("player").style.left);
    posicao_fundo=parseFloat(document.getElementById("bg").style.left);
}


function processaTecla(e) {
    posicao_jogador=parseFloat(document.getElementById("player").style.left);
    posicao_fundo=parseFloat(document.getElementById("bg").style.left);
    var tecla = e.key;
    console.log("tecla", tecla);
    switch (tecla) {
        case "ArrowRight":
            if (posicao_jogador >= 0 && posicao_jogador <= 240) {
                mover("direita");
            }
            console.log("posicao jogador", posicao_jogador, "posicao fundo", posicao_fundo);
            if(posicao_fundo>-2300)
            document.getElementById("bg").style.left = parseInt(document.getElementById("bg").style.left) - 10 + "px";
            break;
        case "ArrowLeft":
            if (posicao_jogador <= 260 && posicao_jogador > 0) {
                mover("esquerda");
            }
            console.log("posicao jogador", posicao_jogador, "posicao fundo", posicao_fundo);
            if(posicao_fundo<0)
            document.getElementById("bg").style.left = parseInt(document.getElementById("bg").style.left) + 10 + "px";
            break;
    }
}

function mover(e) {
    switch (e) {
        case "direita":
            document.getElementById("player").style.left = parseInt(document.getElementById("player").style.left) + 20 + "px";
            console.log("posicao jogador", posicao_jogador, "posicao fundo", posicao_fundo);
            animacao("d");
            break;
        case "esquerda":
            document.getElementById("player").style.left = parseInt(document.getElementById("player").style.left) - 20 + "px";
            console.log("posicao jogador", posicao_jogador, "posicao fundo", posicao_fundo);
            animacao("e");
            break;
    }

    function animacao(k) {
        if (k == "d") {
            console.log("numero imagem",c);
            c++;
            if (c >=5)
                c = 1;
            switch (k) {
                case 1:
                    document.getElementById("player").src = "../img/personagem1.png";
                    break;
                case 2:
                    document.getElementById("player").src = "../img/personagem2.png";
                    break;
                case 3:
                    document.getElementById("player").src = "../img/personagem3.png";
                    break;
                case 4:
                    document.getElementById("player").src="../img/personagem/andar/personagem4.png";
                    break;

            }
        } else if (k == "e") {
            console.log("numero imagem",c);
            c++;
            if (c >= 5)
                c = 1;
            switch (k) {
                case 1:
                    document.getElementById("player").src = "../img/personagem1.png";
                    break;
                case 2:
                    document.getElementById("player").src = "../img/personagem2.png";
                    break;
                case 3:
                    document.getElementById("player").src = "../img/personagem3.png";
                    break;
                case 4:
                    document.getElementById("player").src = "../img/personagem4.png";
                    break;
            }
        }
    }
    console.log("source = ",document.getElementById("player").src);
}

   /* if(tecla == " "){
        salto=setInterval(function(){salta()},100);
    }
    */
/*
function salta(){
    var altura=parseInt(document.getElementById("homer").style.top);
    console.log(document.getElementById("homer").style.top);
    document.getElementById("homer").style.top=altura - 5 + "px";
    if(altura==(195-65))
        document.getElementById("homer").style.top=altura + 5 + "px";
    clearInterval(salto);

}
    */


