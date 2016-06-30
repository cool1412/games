var myGame = {} ;
var myimage;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
	   this.game.load.image('monster1','images/monster1.png');
	   this.game.load.image('ball','images/ball.png');
	
	
 	},	
 	create:function(){
 		this.game.physics.startSystem(Phaser.Physics.ARCADE);
 		cursors = this.game.input.keyboard.createCursorKeys();
 		ball= this.game.add.sprite(400,200,'ball');
 		knoker=this.game.add.sprite(400,200,'monster1');
 		this.game.physics.enable([knoker,ball],Phaser.Physics.ARCADE);
 		knoker.body.immoveable=true;
 		ball.body.velocity.setTo(100,100);
 		ball.body.collideWorldBounds=true;
 		ball.body.bounce.setTo(1,1);		
 				},


	update:function() {
		this.game.physics.arcade.collide(knoker,ball);
		if(cursors.up.isDown){
			knoker.body.velocity.y= -300;

		}else if(cursors.down.isDown){
			knoker.body.velocity.y= 300;
		}else if(cursors.left.isDown) {
			knoker.body.velocity.x= -300;
		}else if(cursors.right.isDown){
			knoker.body.velocity.x= 300;
		}
		else{
			knoker.body.velocity.setTo(0,0);
		}
	},
	render:function(){
		this.game.debug.spriteInfo(ball,32,32);
	},	 
	
		 
}