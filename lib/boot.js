var myGame = {} ;
var mytext  ;
var counter = 0;
myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.image('monster','images/monster.png');
	},
	create:function(){
		var image=this.add.sprite(this.world.centerX,this.world.centerY,'monster');
		image.anchor.set(0.5);
		image.inputEnabled = true;
		mytext = this.add.text(this.world.centerX,30,'',{fill:'#33FF33'});
		mytext.anchor.set(0.5);
		image.events.onInputDown.add(this.listener,this);
	},
	listener:function(){
		counter++;
		mytext.text= " You Clicked " + counter + " time!!! ";

	},

}