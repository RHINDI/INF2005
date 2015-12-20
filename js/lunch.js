/**
 * Created by rhindi on 12/19/15.
 */
var dbProd, list;
function readLocalDB()
{
    dbProd= localStorage.getItem('dbProduct');

    if( !dbProd)
    {
        alert('Erreur:: base de donnee non accesible..!');
        return(false)

    }else{
        dbProd=JSON.parse(dbProd);
        list = dbProd.listProduct;
    }
}


$(document).ready(function(){
    readLocalDB();
    $('#sec_tree').jstree({
        "json_data" : {
            "data":[
                {
                    "data" : "Search engines"
                },
                {
                    "data" : "Networking sites"
                }
            ]
        },
        "plugins" : [ "themes", "json_data", "ui" ]
    });

});



