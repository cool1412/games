var myGame = {} ;


myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.game.load.image('pic1','images/fox.png');
		
	},
	create:function(){
		var images = this.game.add.sprite(300,200,'pic1');
		images.inputEnabled=true;
		images.input.enableDrag(true);

		
 	},	

	update:function() {
		
		},
	render:function(){
		
		 

			},
}