var myGame = {} ;
var mysound;
var checksound = false;
myGame.boot = function(game) {} ;
myGame.boot.prototype = {
	preload:function(){
		this.load.audio('Beep','sounds/Beep.mp3');
		this.load.image('dog','images/dog.png')
	},
	create:function(){
		mysound = this.game.add.audio('Beep');
		mysound.play();
		mysound.loopFull(0.5);
		var myimage = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'dog');
		myimage.anchor.set(0.5);
		myimage.inputEnabled = true ;
		myimage.events.onInputDown.add(this.listener,this);
	},	

	update:function() {
		
		},
	render:function(){
		
		},
		listener:function(){ 
			if(checksound == false) {
				mysound.pause();
				checksound = true;
} else {
	mysound.resume();
	checkSound = false;
}

			},
}