var myGame = {} ;
var myimage;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
	    this.game.load.image('monster1','images/monster1.png');
		
	
	
 	},	
 	create:function(){
 		this.game.physics.startSystem(Phaser.Physics.ARCADE);
 		myimage=this.game.add.sprite(0,0,'monster1');
 		this.game.physics.enable(myimage,Phaser.Physics.ARCADE);
 		myimage.body.velocity.setTo(150,150);
 		myimage.body.collideWorldBounds=true;
 		myimage.body.bounce.set(1);

		},


	update:function() {
		
		
	},
	render:function(){
		this.game.debug.spriteInfo(myimage,32,32);

	},	 
	
		 
}