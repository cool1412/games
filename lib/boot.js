var myGame = {} ;
var mysprite;
var mybounds;
myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.image('fox','images/fox.png');

	},
	create:function(){
		this.game.stage.backgroudColor ='#2d2d2d';
 		mybounds = new Phaser.Rectangle(100,100,500,400);
 		var graphics = this.game.add.graphics(mybounds.x,mybounds.y);
 		graphics.beginFill(0x000077);
 		graphics.drawRect(0,0,mybounds.width,mybounds.height);
 		mysprite = this.game.add.sprite(300,300,'fox');
 		mysprite.inputEnabled = true ;
 		mysprite.anchor.set(0.5);

 		mysprite.input.enableDrag();
 		mysprite.input.boundsRect = mybounds ;
 	},	

	update:function() {
		
		},
	render:function(){
		
		 

			},
}