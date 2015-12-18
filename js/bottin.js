/**
 * Created by rhindi on 12/17/15.
 */
var dbEmpl  =  null;
function readDBEmply(){
    dbEmpl = localStorage.getItem('dbEmploye');
    if(!dbEmpl )
    {
        alert("Erreur :: la base de donnee est introuvable..!");
        return(false)
    }
    else{
        dbEmpl = JSON.parse(dbEmpl);
    }
}

$(document).ready(function(){
    readDBEmply();
    $('#empTable').DataTable( {
        "data":  $.map( dbEmpl, function (value, key) {
            return value;
        } ),
        "columns": [
            { "data": "nom" },
            { "data": "prenom" },
            { "data": "email" },
            { "data": "fonction" },
            { "data": "tel"}
        ]
    } );
});

