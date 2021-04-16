// .bounce, .flash, .pulse, .shake, .swing, .tada, .wobble, .bounceIn, .bounceInDown, .bounceInLeft, .bounceInRight, .bounceInUp, .bounceOut, .bounceOutDown, .bounceOutLeft, .bounceOutRight, .bounceOutUp, .fadeIn, .fadeInDown, .fadeInDownBig, .fadeInLeft, .fadeInLeftBig, .fadeInRight, .fadeInRightBig, .fadeInUp, .fadeInUpBig, .fadeOut, .fadeOutDown, .fadeOutDownBig, .fadeOutLeft, .fadeOutLeftBig, .fadeOutRight, .fadeOutRightBig, .fadeOutUp, .fadeOutUpBig, .flip, .flipInX, .flipInY, .flipOutX, .flipOutY, .lightSpeedIn, .lightSpeedOut, .rotateIn, .rotateInDownLeft, .rotateInDownRight, .rotateInUpLeft, .rotateInUpRight, .rotateOut, .rotateOutDownLeft, .rotateOutDownRight, .rotateOutUpLeft, .rotateOutUpRight, .slideInDown, .slideInLeft, .slideInRight, .slideOutLeft, .slideOutRight, .slideOutUp, .rollIn, .rollOut, .zoomIn, .zoomInDown, .zoomInLeft, .zoomInRight, .zoomInUp

jQuery.noConflict();
jQuery(window).load(function(){
jQuery(window).scroll(function(){
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem)
    {
        var docViewTop = jQuery(window).scrollTop();
        var docViewBottom = docViewTop + jQuery(window).height();
        var elemTop = jQuery(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }	
    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element	
	if (jQuery('.home1_section_area .center .servicebox').length > 0) { 
	if(elementScrolled('.home1_section_area .center .servicebox')) {
        var els = jQuery('.home1_section_area .center .servicebox'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('fadeInUp');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}
	
	if (jQuery('.home2_section_area .center .col-columns-2').length > 0) { 
    if(elementScrolled('.home2_section_area .center .col-columns-2')) {
        var els = jQuery('.home2_section_area .center .col-columns-2'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('fadeInLeft');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}
	
	if (jQuery('.home3_section_area .center .vgalslide').length > 0) { 
    if(elementScrolled('.home3_section_area .center .vgalslide')) {
        var els = jQuery('.home3_section_area .center .vgalslide'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('fadeInUp');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}
	  
	if (jQuery('.home4_section_area .center .cols4').length > 0) { 
    if(elementScrolled('.home4_section_area .center .cols4')) {
        var els = jQuery('.home4_section_area .center .cols4'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('fadeInUp');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}
	
	if (jQuery('.home5_section_area .center .clientslider li').length > 0) { 
    if(elementScrolled('.home5_section_area .center .clientslider li')) {
        var els = jQuery('.home5_section_area .center .clientslider li'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('zoomIn');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}

	if (jQuery('.home6_section_area .center').length > 0) { 
    if(elementScrolled('.home6_section_area .center')) {
        var els = jQuery('.home6_section_area .center'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('fadeInUp');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}
	
	if (jQuery('.home7_section_area .center .col-columns-5').length > 0) { 
    if(elementScrolled('.home7_section_area .center .col-columns-5')) {
        var els = jQuery('.home7_section_area .center .col-columns-5'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('fadeInUp');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}
	
	if (jQuery('.home7_section_area .center .homesidebar').length > 0) { 
    if(elementScrolled('.home7_section_area .center .homesidebar')) {
        var els = jQuery('.home7_section_area .center .homesidebar'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('fadeInUp');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}
	
	if (jQuery('.home8_section_area .center .col-columns-2').length > 0) { 
    if(elementScrolled('.home8_section_area .center .col-columns-2')) {
        var els = jQuery('.home8_section_area .center .col-columns-2'),
            i = 0,
            f = function () {
                jQuery(els[i++]).addClass('fadeInUp');
                if(i < els.length) setTimeout(f, 400);
            };
        f();
    }}
});
});
