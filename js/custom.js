
//============ Fixed header ============//

// effetto ridimensionamento navbar //

$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 350 )
        $(".navbar-default").css("padding", "10px 0px 7px");
    else
        $(".navbar-default").css("padding", "50px 0px 50px");
});

// effetto ridimensionamento scritta coloristic //

$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 350 )
        $(".navbar-brand").css("font-size", "35px");
    else
        $(".navbar-brand").css("font-size", "42px");
});

// effetto hover e animazione scroll to top button //
$(window).scroll(function(){
    if($(window).scrollTop()>600){
        $("a.back-to-top").fadeIn("slow");
    }else{
        $("a.back-to-top").fadeOut("slow");
    }
})

$("a.back-to-top").click(function(){
    $("body").animate({
        scrollTop:0
    },"slow");

    return false;
})