var alumno={
    nombre:'',
    matricula:'',
    carrera:'',
}

function guardarEnviar(){
    alumno.nombre=document.getElementById("nombre").value;
    alumno.matricula=document.getElementById("matricula").value;
    alumno.carrera=document.getElementById("carrera").value;


    localStorage.setItem("datosAlumno",JSON.stringify(alumno));
    console.log("JSON.stringify(alumno)");
    window.open("perfilEstudiante.html","_blank");
}