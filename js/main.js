/**
 * Created by blacksilla on 13/01/2018.
 */
 window.onload=function () {
    
};

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d')
    ;

var img = new Image();
img.src = '../img/sokoban_spritesheet.png';


var sprite = new Sprite("sokoban_spritesheet.png", 32, 16, [
    // specify a few sprite locations
    [10, 523],  // green
    [131, 523], // pink
    [191, 523]  // hit
]);
sprite.draw(0, 10, 200);
sprite.draw(1, 50, 200);
sprite.draw(2, 90, 200);


var spriteWidth  = 350,
    spriteHeight = 170,
    pixelsLeft   = 170,
    pixelsTop    = 10,

// Where are we going to draw
// the sprite on the canvas
    canvasPosX   = 20,
    canvasPosY   = 20
    ;

context.drawImage(img,
    pixelsLeft,
    pixelsTop,
    spriteWidth,
    spriteHeight,
    canvasPosX,
    canvasPosY,
    spriteWidth,
    spriteHeight
);

function Sprite(img, width, height, positions){
    this.img = img;
    this.width = width;
    this.height = height;
    this.positions = positions;
}
Sprite.prototype = {
    draw: function(position, x, y){
        var pos = this.positions[position];
        context.drawImage(
            this.img,
            pos[0],
            pos[1],
            this.width,
            this.height,
            x, y,
            this.width,
            this.height
        );
    }
};


