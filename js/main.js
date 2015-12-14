/**
 * Created by rhindi on 12/12/15.
 */

// Change the nav On hover
$("nav a").hover(
    function(){
    var urlicon = $(this).css('background').replace('white', 'hover');
        $(this).css('background', urlicon)
        $(this).addClass('hover');
    }, function(){
        var urlicon = $(this).css('background').replace('hover', 'white');
        $(this).css('background', urlicon)
        $(this).removeClass("hover");
    });

// Change the video in the iframe
$(".directeur").click(
    function(){
        $("#1").attr("src","https://www.youtube.com/embed/Myq5V3ldiMA");
    });


