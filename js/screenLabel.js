/*make sure dom content is loaded -instead js function DOMContentLoaded*/
/*ready() causes that i see one sec. labelscreen when my page is loading first time*/

$(document).ready(function(e) { 
    $('.tooltip').hide();

    $('.trigger').mouseover(function(){
       var ttLeft,
           ttTop,
           $this = $(this),  //s.347
           $tip = $($this.attr('data-tooltip')),
    /*elements to define position on site actual element*/
           triggerPos = $this.offset(),
           triggerH = $this.outerHeight(),
           triggerW = $this.outerWidth(),
           tipH = $tip.outerHeight(),
           tipW = $tip.outerWeight(),
           screenW = $(window).width(),
           scrollTop = $(document).scrollTop();
    /*has screen label enough place above top of our actual element?*/  
    /*vertical direction - top*/
           if(triggerPos.top - tipH - scrollTop > 0 ){
               ttTop = triggerPos.top - tipH - 10;
           }else{
               ttTop = triggerPos.top + triggerH + 10;
           }
        /*overflow from the right side*/
        var overFlowRight = (triggerPos.left + tipW) - screenW;
        if(overFlowRight > 0){
           ttLeft = triggerPos.left - overFlowRight - 10;
           }else{
               ttLeft = triggerPos.left;
           }
    /*Assign variables to css of actual trigger*/
        $tip.css({left: ttLeft, top: ttTop, position: 'absolute'}).fadeIn(200);    
    });
    /*end of the mouseover function*/
    $('.trigger').mouseout(function(){
        $('.tooltip').fadeOut(200);
    });
    /*end of the mouseout function*/
}); 
   /*end of the ready function*/
    
