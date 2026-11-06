function cargar(){
   temp = new Array(7)
   for (let i = 0; i<7; i++){
      let valor=prompt("Captura una temperatura: ");
      temp[i]=parseFloat(valor);
    }
}

function mostrar(){
    let suma=0;
    for(let i=0; i<7; i++){
        suma+=temp[i];
    }
    let promedio= suma/temp.length;
    let mayor=Math.max(...temp);
    let menor=Math.min(...temp);
    document.getElementById("min").innerHTML=menor;
    document.getElementById("max").innerHTML=mayor;
    document.getElementById("prom").innerHTML=promedio;
 }

let sueldos = new Array(3);
for(let i = 0; i < 3; i++){
    sueldos[i] = new Array(3);
}

sueldos[0][0] = 120; sueldos[0][1] = 240; sueldos[0][2] = 210; // Diseñador
sueldos[1][0] = 240; sueldos[1][1] = 280; sueldos[1][2] = 300; // Programador
sueldos[2][0] = 400; sueldos[2][1] = 600; sueldos[2][2] = 3000; // Lider

let puestos = ["Diseñador", "Programador", "Lider"];
let niveles = ["Newbe", "Jr", "Sr"];

function calcular(){
    let puesto = parseInt(document.getElementById("puesto").value);
    let nivel = parseInt(document.getElementById("nivel").value);
    
    let horas = parseFloat(document.getElementById("horas").value);

    let costoHora = sueldos[puesto][nivel];
    let total = costoHora * horas;

    document.getElementById("impSueldo").innerHTML = 
        puestos[puesto] + " " + niveles[nivel] + " // " + horas + " horas x $" + costoHora + " = Total: $" + total;
}

function dibujarOcho() {
    var cadena = '';

    cadena += '<article>S   S  S</article>';

    for (let i = 0; i < 2; i++) {
        cadena += '<article>S         S</article>';
    }

    cadena += '<article>S   S  S   </article>';

    for (let j = 0; j < 2; j++) {
        cadena += '<article>S         S</article>';
    }

    cadena += '<article>S   S   S   </article>';

    document.getElementById("resultadoOcho").innerHTML = cadena;
}


function gestionarAlumnos() {
    let alumnos = [];
    let cadena = '';

    for (let i = 0; i < 10; i++) {
        let nombre = prompt("Captura el nombre del alumno " + (i + 1) + " de 10:");
        alumnos.push(nombre); 
    }

    cadena += '<article>Lista original de alumnos:</article>';
    for (let i = 0; i < alumnos.length; i++) {
        cadena += '<article>Posición ' + i + ': ' + alumnos[i] + '</article>';
    }

    cadena += '<hr>';

    let inicioEliminar = parseInt(prompt("¿De qué posición deseas empezar a eliminar? (0 al 9):"));
    let cantidadEliminar = parseInt(prompt("¿Cuántas posiciones deseas eliminar a partir de ahí?"));

    alumnos.splice(inicioEliminar, cantidadEliminar);

    cadena += '<article>Lista después de eliminar el rango:</article>';
    for (let i = 0; i < alumnos.length; i++) {
        cadena += '<article>Posición ' + i + ': ' + alumnos[i] + '</article>';
    }

    cadena += '<hr>';

    let nombreBuscar = prompt("Ingresa un nombre para buscar y vaciar su posición:");
    let encontrada = false;

    for (let j = 0; j < alumnos.length; j++) {
        if (alumnos[j] === nombreBuscar) {
            alumnos[j] = "Vacío";
            encontrada = true;
        }
    }

    if (encontrada) {
        cadena += '<article>Se encontró y vació la posición del alumno: ' + nombreBuscar + '</article>';
    } else {
        cadena += '<article>No se encontró el alumno ' + nombreBuscar + ' en la lista actual.</article>';
    }

    cadena += '<br><article>Lista final de alumnos:</article>';
    for (let i = 0; i < alumnos.length; i++) {
        cadena += '<article>Posición ' + i + ': ' + alumnos[i] + '</article>';
    }

    document.getElementById("resultadoAlumnos").innerHTML = cadena;
}

let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

let agendaMatriz = [];

function agenda_definicion() {
    agendaMatriz = [];
    
    for (let i = 0; i < 7; i++) {
        agendaMatriz.push([]); 
    }
    llenar_agenda();
}

function llenar_agenda() {
    for (let i = 0; i < 7; i++) {
        let horaInput = prompt("Ingresa la hora para el día " + diasSemana[i] + " (ej: 19:00):");
        let eventoInput = prompt("Ingresa el tipo de evento para el día " + diasSemana[i] + " (ej: Cafeteria):");
        let descripcionInput = prompt("Ingresa la descripción para el día " + diasSemana[i] + " (ej: Mi roomie paga):");

        agendaMatriz[i] = [horaInput, eventoInput, descripcionInput];
    }
    imprimir_agenda();
}

function imprimir_agenda() {
    let aAgenda = '';
    
    aAgenda += '<article>hora        evento        descripcion</article>';
    aAgenda += '<hr>';

    for (let i = 0; i < 7; i++) {
        let diaActual = diasSemana[i];
        let horaVal = agendaMatriz[i][0];
        let eventoVal = agendaMatriz[i][1];
        let descVal = agendaMatriz[i][2];

        aAgenda += '<article>' + diaActual + '    ' + horaVal + '    ' + eventoVal + '    ' + descVal + '</article>';
    }

    document.getElementById("impAgenda").innerHTML = aAgenda;
}