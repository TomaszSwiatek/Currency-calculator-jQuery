$(document).ready(function(e) { 
	$('.tooltip').hide();
	$('.trigger').mouseover(function() {
		var ttLeft,
		    ttTop,
            ttRightCorner = ttLeft + triggerW -tipW/2,
			$this=$(this),
			$tip = $($this.attr('data-tooltip')),
		    triggerPos = $this.offset(),
		    triggerH = $this.outerHeight(),
		    triggerW = $this.outerWidth(),
			tipW = $tip.outerWidth(),
		    tipH = $tip.outerHeight(),
		    screenW = $(window).width(),
			scrollTop = $(document).scrollTop();
		
		if (triggerPos.top - tipH - scrollTop > 0 ) {
			ttTop = triggerPos.top - tipH - 10;
		} else {
			ttTop = triggerPos.top + triggerH +10 ;			
		}
		
		var overFlowRight = (triggerPos.left + tipW) - screenW;	
		if (overFlowRight > 0) {
			ttLeft = triggerPos.left - overFlowRight - 10;	
		} else {
			ttLeft = triggerPos.right;	
		}
		
		
		$tip
		   .css({
			left : ttLeft + triggerW -tipW/2,
			top : ttTop,
			position: 'absolute'
		    })
			.fadeIn(200);
	}); // koniec funkcji mouseover
	$('.trigger').mouseout(function () {
		$('.tooltip').fadeOut(200);
	}); // koniec funkcji mouseout
}); // koniec funkcji ready