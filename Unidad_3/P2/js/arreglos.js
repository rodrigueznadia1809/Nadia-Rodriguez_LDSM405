let vector=[10,20,30,40,50];
var cadena='';
vector.forEach(function(numero){
cadena+='<div style="background-color:#fde2e4;color:#880d1e;border:3px solid #6f1020;width:20%;text:align-center">'+numero+'</div>';
console.log(numero);
});
document.getElementById("imprimir").innerHTML=cadena;

function fechas(){
    let dias=new Array(7);
    dias[0]="Domingo";
    dias[1]="Lunes";
    dias[2]="Martes";
    dias[3]="Miércoles";
    dias[4]="Jueves";
    dias[5]="Viernes";
    dias[6]="Sábado";

    var d=document.getElementById("dia").value;
    document.getElementById("impdias").innerHTML=dias[d-1];

    let mes=new Array(12);
    mes[0]="Enero";
    mes[1]="Febrero";
    mes[2]="Marzo";
    mes[3]="Abril";
    mes[4]="Mayo";
    mes[5]="Junio";
    mes[6]="Julio";
    mes[7]="Agosto";
    mes[8]="Septiembre";
    mes[9]="Octubre";
    mes[10]="Noviembre";
    mes[11]="Diciembre";

    var mee=document.getElementById("m").value;
    document.getElementById("impmes").innerHTML=mes[mee];
}

function cargar(){
    sueldos=new Array(5);
    for(let i=0;i<5;i++){
        let valor=prompt("Captura un sueldo");
        sueldos[i]=parseFloat(valor);
        console.log(sueldos[i]);
    }
}

function mostrar(){
    var cad='';
    for(let j=0;j<sueldos.length;j++){
        cad+='<div style="background-color:#fde2e4;color:#880d1e;border:3px solid #6f1020;width:20%;text:align-right">'+sueldos[j]+'</div>';
    }
    document.getElementById("impsueldos").innerHTML+=cad;
}

