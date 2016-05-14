var myGame = {} ;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.image('monster','images/monster.png');
	},
	create:function(){
		var image = this.add.sprite(this.world.centerX,this.world.centerY,'monster');
		this.physics.enable(image,Phaser.Physics.ARCADE);
		image.body.velocity.x = 150;

	},

}