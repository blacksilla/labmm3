/**
 * Created by blacksilla on 13/01/2018.
 */
window.onload=function () {
    carregaElementos();
document.getElementById("sound_btn").onclick=function () {
          musica_fundo.pause();
}
};

var musica_fundo= new Audio("sons/fundo_jogo.mp3");
var posicao_jogador,posicao_fundo;
var active=[];
var c=1;
var sementes=0,ferramentas=0;
var deteta=null;


function carregaElementos() {
    localStorage.clear();
    musica_fundo.play();
    sementes=localStorage.getItem("sementes");
    ferramentas=localStorage.getItem("ferramentas");
    document.getElementById("player").style.left="0px";
    document.getElementById("bg").style.left=0 +"px";
    for(i=1;i<6;i++){
        document.getElementById("action").innerHTML=document.getElementById("action").innerHTML + "<img class='semente' src='img/outros/seed.png' id='semente"+i+"' />"
    }
    document.getElementById("semente1").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("semente2").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("semente3").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("semente4").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("semente5").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    posicao_jogador=parseInt(document.getElementById("player").style.left);
    posicao_fundo=parseInt(document.getElementById("bg").style.left);
    document.getElementById("semente1").style.top= 355 + "px";
    document.getElementById("semente2").style.top= 355 + "px";
    document.getElementById("semente3").style.top= 355 + "px";
    document.getElementById("semente4").style.top= 355 + "px";
    document.getElementById("semente5").style.top= 355 + "px";
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
                document.getElementById("semente1").style.left = parseInt(document.getElementById("semente1").style.left) - 5 + "px";
                document.getElementById("semente2").style.left = parseInt(document.getElementById("semente2").style.left) - 5 + "px";
                document.getElementById("semente3").style.left = parseInt(document.getElementById("semente3").style.left) - 5 + "px";
                document.getElementById("semente4").style.left = parseInt(document.getElementById("semente4").style.left) - 5 + "px";
                document.getElementById("semente5").style.left = parseInt(document.getElementById("semente5").style.left) - 5 + "px";
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
                document.getElementById("semente1").style.left = parseInt(document.getElementById("semente1").style.left) + 5 + "px";
                document.getElementById("semente2").style.left = parseInt(document.getElementById("semente2").style.left) + 5 + "px";
                document.getElementById("semente3").style.left = parseInt(document.getElementById("semente3").style.left) + 5 + "px";
                document.getElementById("semente4").style.left = parseInt(document.getElementById("semente4").style.left) + 5 + "px";
                document.getElementById("semente5").style.left = parseInt(document.getElementById("semente5").style.left) + 5 + "px";
            }
            break;
    }
    detetaColisao();
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

    for (var l = 1; l < 6; l++) {
        if(document.getElementById("semente" + l).style.display !== "none") {
            sementeV = parseInt(document.getElementById("semente" + l).style.top);
            sementeH = parseInt(document.getElementById("semente" + l).style.left);

            if ((playerH+49 >= sementeH && playerH + 49 <= sementeH + 30
                || playerH <= sementeH + 30 && playerH >= sementeH)
                && (playerV >= sementeV)) {

                document.getElementById("semente" + l).style.display = "none";
                sementes++;
                document.getElementById("pontSementes").innerHTML="Sementes: "+ sementes;
            }
        }
    }
    localStorage.setItem("sementes",sementes);
    if(sementes==5 && ferramentas==5){
        document.getElementById("btn_nivel_3").disabled=false;
    }
}

