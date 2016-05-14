var game = new Phaser.Game(1024,768,Phaser.AUTO,'gameDiv');
var mainState = {
	preload: function() {
		game.load.image('monster','images/pic1.png');
	},
	create: function()  {
		game.add.sprite(0,0,'monster');
	},
	update: function()  {



		},
 
	};



game.state.add('main',mainState);
game.state.start('main');