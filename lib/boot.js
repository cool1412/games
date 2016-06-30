var myGame = {} ;


myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.game.load.image('pic1','images/fox.png');
		this.game.load.image('pic2','images/dog.png');
		this.game.load.image('pic3','images/monster.png');
		
	},
	create:function(){
		var images = this.game.cache.getKeys(Phaser.Cache.IMAGE);
		for(var i =0; i<6 ;i++)
   	{
			var img = this.game.rnd.pick(images);
			var tempSprite = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,img);
			tempSprite.inputEnabled = true;
			tempSprite.input.enableDrag(false,true);
		}

		
 	},	

	update:function() {
		
		},
	render:function(){
		
		 

			},
}