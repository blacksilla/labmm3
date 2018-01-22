/**
 * Created by blacksilla on 13/01/2018.
 */
window.onload=function () {
    carregaElementos();
    musica_final.play();
    musica_final.volume=0.2;
    musica_final.loop=true;

};


var musica_final= new Audio("sons/somFinal.mp3");
var posicao_jogador,posicao_fundo;
var c=1;
var tiro=false;
var flame=0;
var sementes=0;
var ferramentas=0;
var fps;
var gota=new Audio("sons/gota.mp3");


function carregaElementos() {
    sementes=localStorage.getItem("sementes");
    ferramentas=localStorage.getItem("ferramentas");
    document.getElementById("gota").style.left = "-50px";
    document.getElementById("player").style.left="0px";
    document.getElementById("bg").style.left=0 +"px";
    for(i=1;i<6;i++){
        document.getElementById("action").innerHTML=document.getElementById("action").innerHTML + "<img class='inimigo' src='img/inimigo/ELEMENTOS-11.png' id='flame"+i+"' width='100' height='140' />"
    }
    document.getElementById("flame1").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("flame2").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("flame3").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("flame4").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("flame5").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    posicao_jogador=parseInt(document.getElementById("player").style.left);
    posicao_fundo=parseInt(document.getElementById("bg").style.left);
    document.getElementById("flame1").style.top= 270 + "px";
    document.getElementById("flame2").style.top= 270 + "px";
    document.getElementById("flame3").style.top= 270 + "px";
    document.getElementById("flame4").style.top= 270 + "px";
    document.getElementById("flame5").style.top= 270 + "px";
    document.getElementById("player").style.top=275 +"px";
    fps = setInterval("actualizaJogo()", 1000 / 60);
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
                document.getElementById("flame1").style.left = parseInt(document.getElementById("flame1").style.left) - 5 + "px";
                document.getElementById("flame2").style.left = parseInt(document.getElementById("flame2").style.left) - 5 + "px";
                document.getElementById("flame3").style.left = parseInt(document.getElementById("flame3").style.left) - 5 + "px";
                document.getElementById("flame4").style.left = parseInt(document.getElementById("flame4").style.left) - 5 + "px";
                document.getElementById("flame5").style.left = parseInt(document.getElementById("flame5").style.left) - 5 + "px";
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
                document.getElementById("flame1").style.left = parseInt(document.getElementById("flame1").style.left) + 5 + "px";
                document.getElementById("flame2").style.left = parseInt(document.getElementById("flame2").style.left) + 5 + "px";
                document.getElementById("flame3").style.left = parseInt(document.getElementById("flame3").style.left) + 5 + "px";
                document.getElementById("flame4").style.left = parseInt(document.getElementById("flame4").style.left) + 5 + "px";
                document.getElementById("flame5").style.left = parseInt(document.getElementById("flame5").style.left) + 5 + "px";
            }
            break;
        case "ArrowUp":
                salta();
                break;
        case " ":
            gota.play();
            ativaTiro();
            console.log(sementes,ferramentas);
            break;

    }
    /*if(ferramentas==5 && sementes==5){
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
    var gotaV = parseInt(document.getElementById("gota").style.top) +  30;
    var gotaH = parseInt(document.getElementById("gota").style.left);

    var flameV=0;
    var flameH=0;

    var playerV = parseInt(document.getElementById("player").style.top) +  104;
    var playerH = parseInt(document.getElementById("player").style.left);

   for (var l = 1; l < 6; l++) {
        if(document.getElementById("flame" + l).style.display !== "none") {
            flameV = parseInt(document.getElementById("flame" + l).style.top);
            flameH = parseInt(document.getElementById("flame" + l).style.left);

            if ((gotaH+30 >= flameH && gotaH + 30 <= flameH + 140
                || gotaH <= flameH + 140 && gotaH >= flameH)
                && (gotaV >= flameV)) {
                document.getElementById("flame" + l).style.display = "none";
                document.getElementById("gota").style.left = "-50px";
                clearInterval(fps);
                flame++;
                window.onkeydown=function(e){processaTecla(e)};
                fps = setInterval("actualizaJogo()", 1000 / 60);
                console.log(flame);
            }
            if ((playerH+30 >= flameH && playerH + 30 <= flameH + 140
                || playerH <= flameH + 140 && playerH >= flameH)
                && (playerV >= flameV)) {
                clearInterval(fps);
                window.alert("Perdeste! Morreste queimado!");
                for(i=1;i<6;i++){
                    document.getElementById("flame"+i).remove();
                }
                carregaElementos();
                window.onkeydown=function(e){processaTecla(e)};
                fps = setInterval("actualizaJogo()", 1000 / 60);
                console.log(flame);
            }
        }
    }

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


function actualizaJogo() {
    if (tiro)
        moverTiro();

    detetaColisao();
    if(flame==5){
        clearInterval(fps);
        window.alert("Parabéns! Agora a floresta vai estar linda e verdejante!");
        window.top.location = "index.html";
    }
}

function ativaTiro() {
    if (!tiro) {
        document.getElementById("gota").style.left = parseInt(document.getElementById("player").style.left) + 49 + "px";
        console.log(document.getElementById("gota").style.left);
        document.getElementById("gota").style.top = parseInt(document.getElementById("player").style.top) + 30 + "px";
        tiro = true;
    }
}

function moverTiro() {
    var gotaY = parseInt(document.getElementById("gota").style.left);
    if (tiro) {
        if (gotaY >= -10){
            document.getElementById("gota").style.left = gotaY + 5 + "px";
        }
        else
            tiro = false;
    }
}






