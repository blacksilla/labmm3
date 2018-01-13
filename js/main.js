/**
 * Created by blacksilla on 13/01/2018.
 */
var x = document.createElement('script');
x.src = "spriteSheet.js";
document.getElementsByTagName("head")[0].appendChild(x);


function loadInage(url) {
    return new Promise(resolve=function(){
            const image = new Image();
    image.addEventListener("load",function () {
        resolve(image);
    });
    image.src=url;
        })
}




const canvas=document.getElementById("screen");
const context=canvas.getContext("2d");

loadInage("img/sokoban_spritesheet.png")
.then(image)()
    const sprites=new SpriteSheet(image,16,16);
sprites.define("ground",0,0);
sprites.draw("ground",context,45,62);
    context.drawImage(image,0,0,16,16,0,0,16,16);
})