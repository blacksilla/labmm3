/**
 * Created by blacksilla on 13/01/2018.
 */

window.onload=function () {
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
    
}