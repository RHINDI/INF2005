/**
 * Created by rhindi on 12/15/15.
 */
var dbProd  =  null;
var dbEmpl  =  null;

function lireBdJson()
{
    dbProd = localStorage.getItem('dbProduct');
    dbEmpl = localStorage.getItem('dbEmploye');
    if((dbProd == "undefined")||(dbProd == null)||
        (dbEmpl == "undefined")||(dbEmpl == null) )
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

function ajoutProduit()
{
    var nom = $('#name').val();
    var prix = $("#prix").val();
    var image = $("#imagePro").val();
    var categorie = $("#categoriePro").find(":selected").text();
    var desc = $("#description").val();

    if((nom == "undefined")||(nom == null)||
        (prix == "undefined")||(prix == null) ||
        (image == "undefined")||(image == null) ||
        (categorie == "undefined")||(categorie == null)
        (desc == "undefined")||(desc == null))
    {
        alert("vous devait remplire tous les champs SVP!!!!");
        return(false);
    }
    var jsonObject = {
        "nom":nom,
        "prix":prix,
        "image":image,
        "proCategorie":categorie,
        "description":desc

    };
    dbProd.listProduct.push(jsonObject);//ajout dans le tableau des description
    localStorage.setItem('dbProduct', JSON.stringify(dbProd));
    return(true);
}
function ajoutEmploye()
{
    var nom = $('#empName').val();
    var prenom = $("#empPrenom").val();
    var email = $("#empEmail").val();
    var fonction = $("#empFonction").val();

     if((nom == "undefined")||(nom == null)||
     (prenom == "undefined")||(prenom == null) ||
     (email == "undefined")||(email == null) ||
     (fonction == "undefined")||(fonction == null)
     ){
     alert("vous devait remplire tous les champs SVP!!!!");
     return(false);
     }

    var jsonObject = {
        "nom":nom,
        "prenom":prenom,
        "email":email,
        "fonction":fonction
    };
    dbEmpl.listEmploye.push(jsonObject);
    localStorage.setItem('dbEmploye', JSON.stringify(dbEmpl));
    return(true);
}

$(document).ready(function()
{
    lireBdJson();
    $("#ajProduit").submit( function()
    {
        return ajoutProduit();
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
