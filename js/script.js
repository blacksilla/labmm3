/**
 * Created by blacksilla on 13/01/2018.
 */
/**
 * Created by blacksilla on 13/01/2018.
 */

window.onload=function () {
    window.onkeydown=function(e){processaTecla(e)};
    jogar();
};

var posicao_jogador,posicao_fundo;

function jogar() {
    document.getElementById("player").style.left="0px";
    posicao_jogador=parseInt(document.getElementById("player").style.left);
    posicao_fundo=parseInt(document.getElementById("bg").style.left);
    console.log(posicao_jogador,posicao_fundo);



}

function processaTecla(e){
    var tecla=e.key;
    console.log("tecla",tecla);
    switch(tecla){
        case "ArrowRight":
            document.getElementById("player").style.left=parseInt(document.getElementById("player").style.left) + 20 + "px";
            document.getElementById("bg").style.left=parseInt(document.getElementById("bg").style.left) - 20 + "px";
            console.log("posicao jogador",posicao_jogador,"posicao fundo",posicao_fundo);
            break;
        case "ArrowLeft":
            document.getElementById("player").style.left=parseInt(document.getElementById("player").style.left) - 20 + "px";
            document.getElementById("bg").style.left=parseInt(document.getElementById("bg").style.left) + 20 + "px";
            console.log("posicao jogador",posicao_jogador,"posicao fundo",posicao_fundo);
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


