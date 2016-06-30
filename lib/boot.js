var myGame = {} ;
var mysprite;
var mybounds;
myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.game.load.image('fox','images/fox.png');
		this.game.load.image('pic','images/bg1.png');

	},
	create:function(){

		this.game.stage.backgroudColor= '#2d2d2d' ;
		
		mybounds = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'pic');
		mybounds.anchor.set(0.5);
		
		mysprite = this.game.add.sprite(250,250,'fox');
		mysprite.inputEnabled = true ;
		mysprite.anchor.set(0.5);
		
		mysprite.input.enableDrag();
		mysprite.input.boundsSprite = mybounds;
 	},	

	update:function() {
		
		},
	render:function(){
		
		 

			},
}