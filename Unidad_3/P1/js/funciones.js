function selectVillano(){
var mensaje;
    if(document.formulario.villanos.value=='ManBat'){
        mensaje="Elegiste a Man-Bat";
        document.getElementById("saludar").innerHTML=mensaje;
        document.getElementById("saludar").style.color="#ff0000"
        document.getElementById("img").innerHTML='<img src="img/manbat.jpg" width=300 height=300/>';
    }
    else if(document.formulario.villanos.value=='Clay face'){
        mensaje="Elegiste a Clay Face";
        document.getElementById("saludar").innerHTML=mensaje;
        document.getElementById("saludar").style.color="#Fae100"
        document.getElementById("img").innerHTML='<img src="img/clayface.jpg" width=300 height=300/>';
        
    }
    else{
        mensaje="Elegiste a Poison Ivy";
        document.getElementById("saludar").innerHTML=mensaje;
        document.getElementById("saludar").style.color="#28a83e"
        document.getElementById("img").innerHTML='<img src="img/poisonivy.jpg" width=300 height=300/>';

    }

}

function calcular(){

}