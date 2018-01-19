/**
 * Created by blacksilla on 13/01/2018.
 */
/**
 * Created by blacksilla on 13/01/2018.
 */

window.onload=function () {
    window.onkeydown=function(e){processaSalto(e)};
    jogar();
};

var posicao_jogador;

function jogar() {
    posicao_jogador=parseInt(document.getElementById("player").style.left);
    console.log(posicao_jogador);
    document.getElementById("player").style.left="0px";
    document.getElementById("player").style.top="0px";

}

function processaSalto(e){
    var tecla=e.key;
    console.log("tecla",tecla);
    switch(tecla){
        case "ArrowRight":
            document.getElementById("player").style.left=parseInt(document.getElementById("player").style.left) + 10 + "px";
            console.log(parseInt(document.getElementById("player").style.left));
            break;
        case "ArrowLeft":
            document.getElementById("player").style.left=parseInt(document.getElementById("player").style.left) - 10 + "px";
            console.log(parseInt(document.getElementById("player").style.left));
            break;
    }
   /* if(tecla == " "){
        salto=setInterval(function(){salta()},100);
    }
    */
}
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


