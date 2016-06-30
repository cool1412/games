var myGame = {} ;
var sprite1;
var sprite2;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
	   this.game.load.image('monsters1','images/monster1.png');
	   this.game.load.image('van','images/van.png');

	
 	},	
 	create:function(){
 		this.game.stage.backgroudColor='#2d2d2d';
 		sprite1 = this.game.add.sprite(150,300,'van');
 		sprite1.name = 'van';
 		this.game.physics.enable(sprite1,Phaser.Physics.ARCADE);
 		sprite1.body.immovable = true ;
 		sprite2 = this.game.add.sprite(700,300,'monsters1');
 		sprite2.name = 'monsters1';
 		this.game.physics.enable(sprite2,Phaser.Physics.ARCADE);
 		sprite2.body.velocity.x= -100;
 				},


	update:function() {
		this.game.physics.arcade.collide(sprite1,sprite2,this.collisionHandler,null,this);
	},
	render:function(){
		this.game.debug.bodyInfo(sprite1,32,32);
		this.game.debug.body(sprite1);
		this.game.debug.body(sprite2);
		},	 
	collisionHandler:function(obj1,obj2){
		this.game.stage.backgroundColor= '#992d2d';


	},

	
		 
}