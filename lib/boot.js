var myGame = {} ;
var spriteA;
var counter = 0;
var step = Math.PI*2/360;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.image('dog','images/dog.png');
	},
	create:function(){
		spriteA = this.game.add.sprite(this.centerX,this.centerY,'dog');
		spriteA.alpha= 0.5 ;
		spritex = this.game.width/2 ;
		spriteA.anchor.x=spriteA.y =0.5;
	},	

	update:function() {
		var tStep = Math.sin(counter);
		spriteA.y = (this.game.height /2) + tStep *30;
		spriteA.rotation += Phaser.Math.degToRad(0.1 * tStep);
		counter += step;

		},
	render:function(){
		this.game.debug.spriteInfo(spriteA,32,32);
		},
}