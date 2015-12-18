/**
 * Created by rhindi on 12/15/15.
 */
var dbProd  =  null;
var dbEmpl  =  null;

function lireBdJson()
{
    dbProd = localStorage.getItem('dbProduct');
    dbEmpl = localStorage.getItem('dbEmploye');
    if(!dbProd || !dbEmpl )
    {
        var product = {
            "listProduct":[]
        };
        var employe = {
            "listEmploye":[]
        };
        
        localStorage.setItem('dbProduct', JSON.stringify(product));
        localStorage.setItem('dbEmploye', JSON.stringify(employe));
        dbProd  =  product;
        dbEmpl  =  employe;
    }
    else{
        dbProd = JSON.parse(dbProd);
        dbEmpl = JSON.parse(dbEmpl);
    }
}

function ajoutProduit(e)
{
    var nom = $('#name').val();
    var image = $("#imagePro").val();
    var categorie = $("#categoriePro").find(":selected").text();
    var desc = $("#description").val();
    var prix = $("#prix").val() ;

    if(!nom || !image || !categorie || !desc|| !prix )
    {
        alert("vous devait remplire tous les champs SVP!!!!");
        return(false);
    }

    if(prix.length > 3 || isNaN(parseFloat(prix)))
    {
        alert("Erreur :: le format du prix ==> 0.00 ou 0 !!!!");
        return(false);
    }
    var jsonObject = {
        "nom":nom,
        "prix":prix + " $",
        "image":image,
        "proCategorie":categorie,
        "description":desc

    };
    dbProd.listProduct.push(jsonObject);
    localStorage.setItem('dbProduct', JSON.stringify(dbProd));

    return(true);
}
function ajoutEmploye()
{
    var nom = $('#empName').val();
    var prenom = $("#empPrenom").val();
    var email = $("#empEmail").val();
    var fonction = $("#empFonction").val();
    var tel =$("empTel").val();

     if(!nom || !prenom || !email || !fonction || !tel){
     alert("vous devait remplire tous les champs SVP!!!!");
     return(false);
     }

    var jsonObject = {
        "nom":nom,
        "prenom":prenom,
        "email":email,
        "fonction":fonction,
        "tel":tel
    };
    dbEmpl.listEmploye.push(jsonObject);
    localStorage.setItem('dbEmploye', JSON.stringify(dbEmpl));

    return(true);
}

$(document).ready(function()
{
    lireBdJson();
    $("#ajProduit").submit( function(e)
    {
        return ajoutProduit(e);
    });
    $("#ajEmploye").submit( function()
    {
        return ajoutEmploye();
    });
    $('#closeBt').click(function()
    {
        window.close();
    });
});
