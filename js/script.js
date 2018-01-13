/**
 * Created by blacksilla on 13/01/2018.
 */

window.onload=function () {
    console.log("teste"); 
    carregaElementos();
    document.getElementById("jogar").onclick=function () {
        jogar();
    }
};



function carregaElementos(){
    document.getElementById("menu_inicial").style.display="block";
}

function jogar() {
    document.getElementById("menu_inicial").style.display="none";
    
}