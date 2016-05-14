var myGame = {} ;
var spriteA,spriteB;
var counter =0;
var step = Math.PI*2/360 ;
myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.image('dog','images/dog.png');
	},
	create:function(){
		spriteA =this.add.sprite(0,0,'dog');
		spriteA.alpha = 0.5;
		spriteA.x = this.world.width / 2;
		spriteA.anchor.x = spriteA.anchor.y= 0.5;

	},
	update:function() {
		var tStep = Math.sin(counter);
		spriteA.y = (this.world.height / 2) + tStep *30;
		spriteA.rotation += Phaser.Math.degToRad(0.1 * tStep);
		counter += step;
	},
	render:function(){
		this.game.debug.cameraInfo(this.game.camera,32,32);
	},
}