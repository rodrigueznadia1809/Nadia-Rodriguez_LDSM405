var hora= new Date().getHours();
var saludo;
if(hora >18){
    saludo="Buenas noches";
}
else{
    saludo="Buen día";
}
document.getElementById("saludo").innerHTML=saludo;
 
var soltero=false;
var estatus;
if(soltero==false){
    estatus="Casi ni me dio envidia";
}
else{
    estatus="Esoooo, loba, lobaaa"
}
document.getElementById("estatus").innerHTML=estatus;