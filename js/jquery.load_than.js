(function(jQuery) {
	jQuery.fn.loadimage = function(selector){
		var $img = jQuery(this);
		var data = $img.attr(selector);
		$img.attr('src',data);
	};
	jQuery.fn.loadonclick = function(){
		jQuery(this).find('img').loadimage('data-src');
	};
	jQuery.fn.loadonscroll = function(){
		jQuery(this).find('img').waypoint(function() {
			jQuery(this).loadimage('data-src');
		}, {offset:'100%', triggerOnce:true});
		jQuery.waypoints('refresh');
	};
})(jQuery);