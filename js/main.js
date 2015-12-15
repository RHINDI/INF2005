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

// Popup window code
$('#product a').click(
    function () {
        var url ="./html/productDetails.html";
        var pWidth = 1160;
        var pHeight= 745;
        var center_left = (screen.width / 2) - (pWidth / 2);
        var center_top = (screen.height / 2) - (pHeight / 2);
        window.open(
            url,'popUpWindow',
            'height='+ pHeight + ',width=' + pWidth +
            ',left=' + center_left + ',top=' + center_top +
            ',resizable=no,' + 'scrollbars=no,' +
            'toolbar=no,' + 'menubar=no,' +
            'location=no,' + 'directories=no,'+
            'status=no')
});
