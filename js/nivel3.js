/**
 * Created by blacksilla on 13/01/2018.
 */
/**
 * Created by blacksilla on 13/01/2018.
 */
var posicao_jogador,posicao_fundo;
var c=1;
var sementes=0,ferramentas=0;
var deteta=null;
var posSemente1,posSemente2,posSemente3,posSemente4,posSemente5;
var c1,c2,c3,c4,c5;

window.onload=function () {
    carregaElementos();
    window.onkeydown=function(e){processaTecla(e)};
};



function carregaElementos() {
    document.getElementById("player").style.left=0 +"px";
    document.getElementById("bg").style.left=0 +"px";
    for(i=1;i<6;i++){
        document.getElementById("action").innerHTML=document.getElementById("action").innerHTML + "<img class='semente' src='img/outros/seed.png' id='semente"+i+"' width='30' height='30' style='left: 0px' />"
    }
    document.getElementById("semente1").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("semente2").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("semente3").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("semente4").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    document.getElementById("semente5").style.left=parseInt(Math.random()*(2300-200)+200) + "px";
    posicao_jogador=parseFloat(document.getElementById("player").style.left);
    posicao_fundo=parseFloat(document.getElementById("bg").style.left);

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
function processaTecla(e) {
    posicao_jogador = parseFloat(document.getElementById("player").style.left);
    posicao_fundo = parseFloat(document.getElementById("bg").style.left);
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
    posSemente1=parseInt(document.getElementById("semente1").style.left);
    posSemente2=parseInt(document.getElementById("semente2").style.left);
    posSemente3=parseInt(document.getElementById("semente3").style.left);
    posSemente4=parseInt(document.getElementById("semente4").style.left);
    posSemente5=parseInt(document.getElementById("semente5").style.left);

    c1=detetaColisao(posicao_jogador,posSemente1,49,30);
    console.log("c1 = ",c1);
    if(c1==true){
        document.getElementById("semente1").disabled="true";
        sementes++;
        document.getElementById("pontSementes").innerHTML="Sementes:"+sementes;
    }
}

function detetaColisao(obj1,obj2,obj1largura,obj2largura) {
    console.log("obj1 = ",obj1,"obj2 = ",obj2, obj1largura,obj2largura);
    if(obj1+obj1largura>=obj2 && obj2+obj2largura<=obj1){
        return true;
    }else{
        return false;
    }

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


