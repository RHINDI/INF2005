/**
 * Created by rhindi on 12/12/15.
 */
var dbLog;

function setLoginInfo()
{
    dbLog= localStorage.getItem('dbLogin');

    if( !dbLog)
    {
        var user={
            "listUsers":[]
        };
        var objetUser={
            "user":"admin",
            "password":"Inf2005",
        };
        user.listUsers.push(objetUser);
        localStorage.setItem('dbLogin', JSON.stringify(user));
        dbLog = user;
    }
    else{
        dbLog=JSON.parse(dbLog);
    }
}


$(document).ready(function()
{
    setLoginInfo();

    // Change the nav On hover
    $('nav a').hover(
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
    $('.directeur').click(
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
          var idElement = target.name;
         var url,pWidth, pHeight;

          if (target.id ==='a_connection'){
              if(document.title == "TP2 INF2005:: index")
              {
                  url ="./html/logIn.html";
              }else{
                  url="./logIn.html";
              }
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
              url,idElement,
              'height='+ pHeight + ',width=' + pWidth +
              ',left=' + center_left + ',top=' + center_top +
              ',resizable=no,' + 'scrollbars=no,' +
              'toolbar=no,' + 'menubar=no,' +
              'location=no,' + 'directories=no,'+
              'status=no'
          )
      }
        );
});