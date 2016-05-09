animateFontSize:function(text, max_size, min_size, size_change_rate=1)
{
	// add 
	//does_title_need_to_grow = true to the create function
	if( this.game.does_title_need_to_grow && text.fontSize < max_size)
	{
		text.fontSize += size_change_rate
		if(text.fontSize == max_size)
		{
			this.game.does_title_need_to_grow = false
		}
	}
	if(!this.game.does_title_need_to_grow && text.fontSize > min_size)
	{
		text.fontSize -= size_change_rate
		if(text.fontSize == min_size)
		{
			this.game.does_title_need_to_grow = true
		}
	}
}