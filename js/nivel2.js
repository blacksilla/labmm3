/**
 * Created by blacksilla on 13/01/2018.
 */
window.onload=function () {
    carregaElementos();

};

var salto = new Audio("../sons/salto.mp3");
var x=document.cookie;
var posicao_jogador,posicao_fundo;
var c=1;
var fired = false;
var ferramentas=0;
var deteta=null;
var sementes=0;



function carregaElementos() {
    sementes=localStorage.getItem("sementes");
    document.getElementById("pontSementes").innerHTML="Sementes: "+ sementes;
    document.getElementById("player").style.left="0px";
    document.getElementById("bg").style.left=0 +"px";
    for(i=1;i<6;i++){
        document.getElementById("action").innerHTML=document.getElementById("action").innerHTML + "<img class='ferramentas' src='img/outros/shovel-01.png' id='ferramenta"+i+"' height='40' width='40'/>"
    }
    for(i=1;i<6;i++){
        document.getElementById("action").innerHTML=document.getElementById("action").innerHTML + "<img class='buracos' src='img/buraco0.png' id='buraco"+i+"'/>"
    }


    document.getElementById("ferramenta1").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("ferramenta2").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("ferramenta3").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("ferramenta4").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("ferramenta5").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("buraco1").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("buraco2").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("buraco3").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("buraco4").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("buraco5").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    posicao_jogador=parseInt(document.getElementById("player").style.left);
    posicao_fundo=parseInt(document.getElementById("bg").style.left);
    document.getElementById("ferramenta1").style.top= 350 + "px";
    document.getElementById("ferramenta2").style.top= 350 + "px";
    document.getElementById("ferramenta3").style.top= 350 + "px";
    document.getElementById("ferramenta4").style.top= 350 + "px";
    document.getElementById("ferramenta5").style.top= 350 + "px";
    document.getElementById("buraco1").style.top= 370 + "px";
    document.getElementById("buraco2").style.top= 370 + "px";
    document.getElementById("buraco3").style.top= 370 + "px";
    document.getElementById("buraco4").style.top= 370 + "px";
    document.getElementById("buraco5").style.top= 370 + "px";
    document.getElementById("player").style.top=275 +"px";

    window.onkeydown=function(e){processaTecla(e)};


}

function processaTecla(e) {
    posicao_jogador = parseInt(document.getElementById("player").style.left);
    posicao_fundo = parseInt(document.getElementById("bg").style.left);
    var tecla = e.key;
    console.log("tecla", tecla);
    switch (tecla) {
        case "ArrowRight":
            animacao("d");
            if (posicao_jogador >= 0 && posicao_jogador <= 240) {
                mover("direita");
            }
            //console.log("posicao jogador", posicao_jogador, "posicao fundo", posicao_fundo);
            if (posicao_fundo > -2300) {
                document.getElementById("bg").style.left = parseInt(document.getElementById("bg").style.left) - 5 + "px";
                document.getElementById("ferramenta1").style.left = parseInt(document.getElementById("ferramenta1").style.left) - 5 + "px";
                document.getElementById("ferramenta2").style.left = parseInt(document.getElementById("ferramenta2").style.left) - 5 + "px";
                document.getElementById("ferramenta3").style.left = parseInt(document.getElementById("ferramenta3").style.left) - 5 + "px";
                document.getElementById("ferramenta4").style.left = parseInt(document.getElementById("ferramenta4").style.left) - 5 + "px";
                document.getElementById("ferramenta5").style.left = parseInt(document.getElementById("ferramenta5").style.left) - 5 + "px";
                document.getElementById("buraco1").style.left = parseInt(document.getElementById("buraco1").style.left) - 5 + "px";
                document.getElementById("buraco2").style.left = parseInt(document.getElementById("buraco2").style.left) - 5 + "px";
                document.getElementById("buraco3").style.left = parseInt(document.getElementById("buraco3").style.left) - 5 + "px";
                document.getElementById("buraco4").style.left = parseInt(document.getElementById("buraco4").style.left) - 5 + "px";
                document.getElementById("buraco5").style.left = parseInt(document.getElementById("buraco5").style.left) - 5 + "px";
            }
            break;
        case "ArrowLeft":
            animacao("e");
            if (posicao_jogador <= 260 && posicao_jogador > 0) {
                mover("esquerda");
            }
            //console.log("posicao jogador", posicao_jogador, "posicao fundo", posicao_fundo);
            if (posicao_fundo < 0) {
                document.getElementById("bg").style.left = parseInt(document.getElementById("bg").style.left) + 5 + "px";
                document.getElementById("ferramenta1").style.left = parseInt(document.getElementById("ferramenta1").style.left) + 5 + "px";
                document.getElementById("ferramenta2").style.left = parseInt(document.getElementById("ferramenta2").style.left) + 5 + "px";
                document.getElementById("ferramenta3").style.left = parseInt(document.getElementById("ferramenta3").style.left) + 5 + "px";
                document.getElementById("ferramenta4").style.left = parseInt(document.getElementById("ferramenta4").style.left) + 5 + "px";
                document.getElementById("ferramenta5").style.left = parseInt(document.getElementById("ferramenta5").style.left) + 5 + "px";
                document.getElementById("buraco1").style.left = parseInt(document.getElementById("buraco1").style.left) + 5 + "px";
                document.getElementById("buraco2").style.left = parseInt(document.getElementById("buraco2").style.left) + 5 + "px";
                document.getElementById("buraco3").style.left = parseInt(document.getElementById("buraco3").style.left) + 5 + "px";
                document.getElementById("buraco4").style.left = parseInt(document.getElementById("buraco4").style.left) + 5 + "px";
                document.getElementById("buraco5").style.left = parseInt(document.getElementById("buraco5").style.left) + 5 + "px";
            }
            break;
        case "ArrowUp":
            salto.pause();
            salto.play();
                salta();
                animacao("cima");
                break;

    }
    detetaColisao();
    /*if(ferramentas==5){
        document.getElementById("btn_nivel_3").disabled="false"
    }else {
        document.getElementById("btn_nivel_3").disabled = "true"
    }*/
}


function mover(e) {
    switch (e) {
        case "direita":
            document.getElementById("player").style.left = parseInt(document.getElementById("player").style.left) + 5 + "px";
            console.log("posicao jogador", posicao_jogador, "posicao fundo", posicao_fundo);
            animacao("d");
            break;
        case "esquerda":
            document.getElementById("player").style.left = parseInt(document.getElementById("player").style.left) - 5 + "px";
            console.log("posicao jogador", posicao_jogador, "posicao fundo", posicao_fundo);
            animacao("e");
            break;
    }
}


function animacao(k) {
    if (k == "d") {
        //console.log("numero imagem",c);
        c++;
        if (c >=20)
            c = 1;
        switch (c) {
            case 2:
                document.getElementById("player").src = "img/personagem/andar/personagem2.png";
                break;
            case 10:
                document.getElementById("player").src = "img/personagem/andar/personagem3.png";
                break;
            case 20:
                document.getElementById("player").src="img/personagem/andar/personagem4.png";
                break;

        }
    } else if (k == "e") {
        //console.log("numero imagem",c);
        c++;
        if (c >= 20)
            c = 1;
        switch (c) {
            case 2:
                document.getElementById("player").src = "img/personagem/andar/personagem6.png";
                break;
            case 10:
                document.getElementById("player").src = "img/personagem/andar/personagem7.png";
                break;
            case 20:
                document.getElementById("player").src = "img/personagem/andar/personagem8.png";
                break;
        }
    }
}
//console.log("source = ",document.getElementById("player").src);

function detetaColisao() {
    var playerV = parseInt(document.getElementById("player").style.top) +  104;
    var playerH = parseInt(document.getElementById("player").style.left);

    var sementeV=0;
    var sementeH=0;
    var buracoV=0;
    var buracoH=0;

    for (var l = 1; l < 6; l++) {
        if(document.getElementById("ferramenta" + l).style.display !== "none") {
            sementeV = parseInt(document.getElementById("ferramenta" + l).style.top);
            sementeH = parseInt(document.getElementById("ferramenta" + l).style.left);

            if ((playerH+49 >= sementeH && playerH + 49 <= sementeH + 30
                || playerH <= sementeH + 30 && playerH >= sementeH)
                && (playerV >= sementeV)) {

                document.getElementById("ferramenta" + l).style.display = "none";
                ferramentas++;
                document.getElementById("pontFerramentas").innerHTML="Ferramentas: "+ ferramentas;
                if(ferramentas==5){
                    window.alert("Conseguiste as 5 ferramentas!");
                }
            }
        }
    }
    for (var k = 1; k < 6; k++) {
        if(document.getElementById("buraco" + k).style.display !== "none") {
            buracoV = parseInt(document.getElementById("buraco" + k).style.top);
            buracoH = parseInt(document.getElementById("buraco" + k).style.left);

            if ((playerH+49 >= buracoH && playerH + 49 <= buracoH + 76
                || playerH <= buracoH + 76 && playerH >= buracoH)
                && (playerV >= buracoV)) {
                ferramentas=0;
                document.getElementById("pontFerramentas").innerHTML="Ferramentas: "+ ferramentas;
                window.alert("Perdeste!");
                for(i=1;i<6;i++){
                    document.getElementById("ferramenta"+i).remove();
                    document.getElementById("buraco"+i).remove();
                }
                carregaElementos();
            }
        }
    }
    for (var m = 1; m < 6; m++) {
            buracoV = parseInt(document.getElementById("buraco" + k).style.top);
            buracoH = parseInt(document.getElementById("buraco" + k).style.left);

            if ((sementeH+30 >= buracoH && sementeH + 30 <= buracoH + 76
                || sementeH <= buracoH + 76 && sementeH >= buracoH)
                && (sementeV >= buracoV)) {
                for(i=1;i<6;i++){
                    document.getElementById("buraco"+i).style.left=parseInt(Math.random()*(2300-200)+200) + "px";
                }
        }
    }

    localStorage.setItem("ferramentas",ferramentas);
}



function salta() {
    console.log(document.getElementById("player").style.top);
    playerV = parseInt(document.getElementById("player").style.top);
    var height = 0;
    var up = true;
    salto = setInterval(function () {
        if (height == 65)
            up = false;
        if (up)
            height += 5;
        else {
            height -= 5;
            if (height == 0)
                clearInterval(salto);
        }
        document.getElementById("player").style.top = playerV - height + "px";
        console.log(playerV);
    }, 100);
}









