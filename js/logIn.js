
var dbLog;

function userLogin(){

    dbLog= localStorage.getItem('dbLogin');

    if( !dbLog)
    {
        alert('Erreur:: base de donnee non accesible..!')
        return (false);
    }else{
        dbLog=JSON.parse(dbLog);

    }
    var username = $('#username').val();
    var pwd = $('#password').val();

    var users = dbLog.listUsers[0];

    if(username == users['user'] && pwd == users['password']){
        window.open('./connection.html','Ajouter donne');
        sessionStorage.setItem('admin','Inf2005');
        this.closeWindow();
    }else{
        sessionStorage.removeItem('connecte');
    }
}

function closeWindow(){
    window.close();
}

$(document).ready(function(){

    $('#formConnect').submit( function(){
        return userLogin();
    });


    $('#closeBt').click(function() {
        closeWindow();
        });
});