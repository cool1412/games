var myGame = {} ;
var ninjaME;

myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.atlasJSONHash('ninja','images/ninja.png','images/ninja.json');
	},
	create:function(){
		ninjaME = this.add.sprite(0,0,'ninja');
		ninjaME.animations.add('attack',Phaser.Animation.generateFrameNames('myninja',0,9,'',4),30,true,false);
		ninjaME.animations.play('attack');
	},
	update:function() {
	
		
	},

}