var myGame = {} ;
var spriteA;
var counter = 0;
var step = Math.PI*2/360 ;
myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.image('dog','images/dog.png');
	},
	create:function(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		spriteA = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'dog');
		spriteA.anchor.set(0.5);
		this.game.physics.arcade.enable(spriteA);

	},	

	update:function() {
		var tStep = Math.sin(counter);
		spriteA.body.y = 120+ tStep * 60 ;
		counter += step;
	},
	render:function(){
		this.game.debug.body(spriteA);
	},
}