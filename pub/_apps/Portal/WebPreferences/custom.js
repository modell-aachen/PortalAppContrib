jQuery('document').ready(function() {
	jQuery('.newsItemContentText img').remove();

	jQuery('.newsItemContentText').each(function() {
	  	var wholeText   = jQuery(this).html();
	  	var partText    = wholeText.substring(0, 300);
	  	if (wholeText.length > 300) {
	    	jQuery(this).empty().append(partText + ' ...');
	    	jQuery(this).next().append('weiterlesen...').click(function() {
	    		jQuery(this).prev().slideUp().empty().append(wholeText).slideDown();
	    		jQuery(this).empty();
	    	});
	  	}
	});
});