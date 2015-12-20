/**
 * Created by rhindi on 12/18/15.
 */
var dbProd;
function readLocalDB()
{
    dbProd= localStorage.getItem('dbProduct');

    if( !dbProd)
    {
        alert('Erreur:: base de donnee non accesible..!');
        return(false)
    }else{
        dbProd=JSON.parse(dbProd);

    }
}

function getTheElement()
{
    var list = dbProd.listProduct;
    for(var i = 0 ; i < list.length; i++)
    {
        var name = list[i]['nom'];
        if( name ===  window.name)
        {
            var disc = list[i]['description'];
            var prix = list[i]['prix'];
            var image = list[i]['image'];

            $('header h1').append(name);
            $('#desc').append(disc);
            $('#detailsPro h1').append('Prix : ' + prix +'.');
            $('#proImg img').attr('src',image);
            $('#proImg img').attr('alt',name);

            break;
        }
    }
}

function animationImag()
{
   /* $("#proImg").animate({left: "+=500"}, 2000);
    $("#proImg").animate({left: "-=500"}, 1000);*/
    $("#proImg").slideDown(); //.animate({left: "-=500"}, 1000);
}

$(document).ready(function(){

    $('#closeBt').click(
        function (){
            window.close();
        });

    readLocalDB();
    getTheElement();
    animationImag();
});
