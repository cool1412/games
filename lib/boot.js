var myGame = {} ;
var mysprite ;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
	    this.game.load.image('pic1','images/fox.png');

	
	
 	},	
 	create:function(){
 		
		mysprite = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'pic1');
		this.game.physics.enable(mysprite,Phaser.Physics.ACRADE);

		},


	update:function() {
	
		if(this.game.input.mousePointer.isDown){
			this.game.physics.arcade.moveToPointer(mysprite,400);
			if(Phaser.Rectangle.contains(mysprite.body,this.game.input.x,this.game.input.y))
			{
				mysprite.body.velocity.setTo(0,0);
			}
		}
		else {
			mysprite.body.velocity.setTo(0,0);
		}
	},
	render:function(){
	
	},	 
		 
}