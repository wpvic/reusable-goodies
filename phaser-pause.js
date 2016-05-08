// First, gotta add the asset to the game
this.load.image('pause', 'assets/pause/black.png')

// Now, for the function:
// creates a pause button using pause image and also 
// adds all the logic behind a pausing game system.
// so this little function can be reused time and time again, just make sure to not forget a pause image
// Obs: gotta add this on the my_state.prototype! Also, need to call it from create() or whatever function starts the state
pauseAndUnpause:function(game)
{
	var pause_button = this.game.add.sprite(this.game.width - 20, 25, 'pause')
	pause_button.anchor.setTo(.5,.5)
	pause_button.scale.setTo(.2,.15)
	pause_button.inputEnabled = true
	// pause:
	pause_button.events.onInputUp.add(
		function()
		{
			if(!game.paused)
			{
				game.paused = true
			}
			pause_watermark = this.game.add.sprite(this.game.width/2, this.game.height/2, 'pause')
			pause_watermark.anchor.setTo(.5,.5)
			pause_watermark.alpha = .1
		}, this)
	// unpause:
	game.input.onDown.add( 
		function()
		{
			if(game.paused)
			{
				game.paused = false
				pause_watermark.destroy()
			}
		} , self)
}
