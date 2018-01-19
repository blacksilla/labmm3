/**
 * Created by blacksilla on 13/01/2018.
 */
/**
 * Created by blacksilla on 13/01/2018.
 */

window.onload=function () {
    window.onkeyup=function(e){processaSalto(e)};
    carregaElementos();
    document.getElementById("jogar").onclick=function () {
        jogar();
    }
};



function carregaElementos(){
    document.getElementById("main").style.visibility="hidden";
    document.getElementById("menu_inicial").style.visibility="visible";
}

function jogar() {
    document.getElementById("menu_inicial").style.visibility="hidden";
    document.getElementById("main").style.visibility="visible";
    document.getElementById("screen").innerHTML=document.getElementById("screen").innerHTML + "<img id='jogador' src='img/personagem/andar/personagem1.png' />"
    document.getElementById("jogador").style.left="-200px";

}

function processaSalto(e){
    var tecla=e.key;
    console.log("tecla",tecla);
    if(tecla == " "){
        salto=setInterval(function(){salta()},100);
    }
}

function salta(){
    var altura=parseInt(document.getElementById("homer").style.top);
    console.log(document.getElementById("homer").style.top);
    document.getElementById("homer").style.top=altura - 5 + "px";
    if(altura==(195-65))
        document.getElementById("homer").style.top=altura + 5 + "px";
    clearInterval(salto);

}