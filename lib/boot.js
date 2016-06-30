var myGame = {} ;
var mysprite1 ;
var mysprite2 ;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
	    
		this.game.load.spritesheet('gameboy1','images/gameboy1.png',40,60);
		this.game.load.spritesheet('gameboy2','images/gameboy2.png',40,60);

	
	
 	},	
 	create:function(){
 		this.game.physics.startSystem(Phaser.Physics.ARCADE);
 		this.game.stage.backgroudColor = '#123184';
 		mysprite1 = this.game.add.sprite(300,0,'gameboy1',2);
 		mysprite2 = this.game.add.sprite(300,400,'gameboy2',3);
 		this.game.physics.arcade.enable([mysprite1,mysprite2]);
 		this.game.physics.arcade.gravity.y=200;

 		mysprite1.body.bounce.y=1;
 		mysprite1.body.collideWorldBounds = true;
		
		mysprite2.body.allowGravity = false;
		mysprite2.body.immovable = true;

		this.game.input.onDown.add(this.toggleBody,this);	


		},


	update:function() {
		this.game.physics.arcade.collide(mysprite1,mysprite2);
		
	},
	render:function(){
		this.game.debug.text('click disable body1',32,32);
		if(mysprite2.body.enable)
		{
			this.game.debug.body(mysprite2);
		}

	},	 
	toggleBody:function(){

		if(mysprite2.body.enable)
		{
			mysprite2.body.enable=false;
		}
		else
		{
			mysprite2.body.enable=true;
		}	

	},
		 
}