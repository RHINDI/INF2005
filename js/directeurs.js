/**
 * Created by rhindi on 12/18/15.
 */
$(document).ready(function()
{
    readJson();
});

function readJson(){
    $.getJSON('../json/directeurs.json',function(data){
        var listDire = data.listDirecteurs;

        for (var i = 0 ; i < listDire.length; ++i)
        {
            var obj = listDire[i];

            var div = '<div id=\'div' + i + '\'></div>';
            $('main').append(div);

            var img = '<img src=\''+obj['imag']+'\'  alt=\''+ obj['nom']+'\'>';
            $('#div'+ i).append(img);

            var p = '<p>'+
                '<span>Nom </span>: ' + obj['nom'] + ' <br/>'+
                '<span>Prenom </span>: ' + obj['prenom'] + ' <br/>'+
                '<span>Date debut </span>: ' + obj['dateDebut'] + ' <br/>'+
                '<span>Date Fin </span>: ' + obj['dateFin'] +  '</p>';

            $('#div'+ i).append(p);
        }
   });
}



