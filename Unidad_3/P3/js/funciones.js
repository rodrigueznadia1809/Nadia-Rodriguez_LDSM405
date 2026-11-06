var cal={
    operador:0,
    op:0,
    resultado:0,
    mil: function(){ 
        this.resultado = this.operador / 1000;
        document.getElementById("resultado").innerText = "Resultado: " + this.resultado + " g";
    },
    gram: function(){ 
        this.resultado = this.operador / 1000;
        document.getElementById("resultado").innerText = "Resultado: " + this.resultado + " kg";
    },
    kilo: function(){ 
        this.resultado = this.operador * 1000;
        document.getElementById("resultado").innerText = "Resultado: " + this.resultado + " g";
    },
    g: function(){
        this.resultado = this.operador * 1000;
        document.getElementById("resultado").innerText = "Resultado: " + this.resultado + " mg";
    },
    m: function(){
        this.resultado=this.operador/1000000;
        document.getElementById("resultado").innerText = "Resultado: " + this.resultado + " kg";
    },
    k: function(){
        this.resultado=this.operador*1000000;
        document.getElementById("resultado").innerText = "Resultado: " + this.resultado + " mg";
    }
}
 
function calcular(){
cal.operador = parseFloat(document.getElementById("operador").value);
cal.op = parseInt(document.getElementById("op").value);
switch(cal.op){
    case 1:
        cal.mil();
        break;
    case 2:
        cal.gram();
        break;
    case 3:
        cal.kilo();
        break;
    case 4:
        cal.g();
        break;
    case 5:
        cal.m();
        break;
    case 6:
        cal.k();
        break;       
    }
}

var c={
    a:0,
    kg:0,
    res:0,
    imc: function(){
        this.res = this.kg/(this.a**2);
    if (c.res<18.5){
        document.getElementById("res").innerHTML="Bajo de peso";
        document.getElementById("res").innerHTML+=this.res;
    }else if(c.res >=18.5 && c.imc <=24.9){
        document.getElementById("res").innerHTML="Peso normal";
        document.getElementById("res").innerHTML+=this.res;

    }else{
        document.getElementById("res").innerHTML="Sobre peso";
        document.getElementById("res").innerHTML+=this.res;

    }
    }
}
function calcu(){
    c.a = parseFloat(document.getElementById("a").value);
    c.kg = parseFloat(document.getElementById("kg").value);
    c.imc();        
}

function factorial(){

var n=parseInt(document.getElementById("f").value);
let r=1;
do{
    r=r*n;
    n=n-1
}while(n>0)

document.getElementById("fac").innerHTML=r;

}

function ordena() {
    let n1 = parseFloat(document.getElementById("N1").value);
    let n2 = parseFloat(document.getElementById("N2").value);
    let n3 = parseFloat(document.getElementById("N3").value);
    let aux;
    if (n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    if (n1 > n3) {
        aux = n1;
        n1 = n3;
        n3 = aux;
    }
    if (n2 > n3) {
        aux = n2;
        n2 = n3;
        n3 = aux;
    }
    document.getElementById("orden").innerHTML =
        "Números ordenados: " + n1 + " " + n2 + " " + n3;
}
 