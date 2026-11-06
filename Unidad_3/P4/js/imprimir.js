window.onload=function(){
    var resgistroGuardado=localStorage.getItem("datosAlumno");
    if(resgistroGuardado){
        var alumnoRecuperado=JSON.parse(resgistroGuardado);
        console.log(alumnoRecuperado);
        document.getElementById("resNombre").innerText=alumnoRecuperado.nombre;
        document.getElementById("resMatricula").innerText=alumnoRecuperado.matricula;
        document.getElementById("resCarrera").innerText=alumnoRecuperado.carrera;

    }
    else{
        alert("No se encontro alumno");
    }
}