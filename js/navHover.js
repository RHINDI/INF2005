/**
 * Created by rhindi on 12/16/15.
 */
// Change the nav On hover

$(document).ready(function()
{
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
});
