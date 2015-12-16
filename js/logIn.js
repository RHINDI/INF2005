var dbLog= null;
function lireBdJson()
{
    dbLog= localStorage.getItem('dbLogin');

    if( dbLog == "undefined" || dbLog == null )
    {
           var user={
            "listUsers":[]
        };
        var objetUser={
            "user":"admin",
            "password":"pass",
        };
        user.listUsers.push(objetUser);
        localStorage.setItem('dbLogin', JSON.stringify(user));
        dbLog = user;
    }
    else{
        dbLog=JSON.parse(dbLog);
    }
}

function userLogin(){

    var username = $("#username").val();
    var pwd = $("#password").val();

    var users = dbLog.listUsers[0];

    if(username == users["user"] && pwd == users["password"]){
        window.open("./connection.html","Ajouter donne");
        sessionStorage.setItem("connecte","connecte");
        this.closeWindow();
    }else{
        sessionStorage.removeItem('connecte');
    }
};
function closeWindow(){
    window.close();
};
$(document).ready(function(){
    lireBdJson();
    $("#formConnect").submit( function(){
        return userLogin();
    });
// Close current windows
    $('#closeBt').click(function() {
        closeWindow();
        });
});