var myGame = {} ;
var mysprite;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.image('monster','images/monster.png');
	},
	create:function(){
		this.physics.startSystem(Phaser.Physics.AECADE);
		mysprite = this.add.sprite(this.world.centerX,this.world.centerY,'monster');
		mysprite.anchor.set(0.5);
		this.physics.arcade.enable(mysprite);
	},
	update:function() {
		if(this.physics.arcade.distanceToPointer(mysprite,this.input.activePointer) > 8 ) {
			this.physics.arcade.moveToPointer(mysprite,300);

		}
		else {
			mysprite.body.velocity.set(0);
		}
	},

}