/**
 * Created by rhindi on 12/12/15.
 */

$(document).ready(function(){

// Change the video in the iframe
$(".directeur").click(
    function(){
        $("#1").attr("src","https://www.youtube.com/embed/Myq5V3ldiMA");
    });

// Close current windows
$('#closeBt').click(
     function (){
       window.close();
    });

// Popup windows
$('#site').click(
  function(e){
      var target = e.target;
     var url,pWidth, pHeight;

      if (target.id ==='a_connection'){
          url ="./html/logIn.html";
          pWidth = 840;
          pHeight= 450;
      }else if(target.className ==='a_product'){

          url ="./html/productDetails.html";
          pWidth = 1160;
          pHeight= 745;
      }else{
          return;
      }
      var center_left = (screen.width / 2) - (pWidth / 2);
      var center_top = (screen.height / 2) - (pHeight / 2);
      window.open(
          url,'popUpWindow',
          'height='+ pHeight + ',width=' + pWidth +
          ',left=' + center_left + ',top=' + center_top +
          ',resizable=no,' + 'scrollbars=no,' +
          'toolbar=no,' + 'menubar=no,' +
          'location=no,' + 'directories=no,'+
          'status=no','modal=1'
      )
  }
);
});