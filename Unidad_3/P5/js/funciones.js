var pedido={
    cliente:'',
    producto:[],
    precioUnitario:65,
    porcentajeDescuento:0,
    subtotal:0,
    ahorro:0,
    total:0,
    calcularTotal: function(){
        this.subtotal=this.precioUnitario*this.producto.length;
        this.ahorro=this.subtotal*this.porcentajeDescuento;
        this.total=this.subtotal-this.ahorro;
    }
}

function agregarBebida(){
    var nuevaBebida=document.getElementById("bebida").value;
    pedido.producto.push(nuevaBebida);
    var listaB=document.getElementById("listaBebidas");
    var listaLi=document.createElement("li");
    listaLi.innerText=nuevaBebida;
    listaB.appendChild(listaLi);
}

function procesaEnviar(){
    pedido.cliente=document.getElementById("cliente").value;
    pedido.porcentajeDescuento=document.getElementById("descuento").value;
    pedido.calcularTotal();

    localStorage.setItem("registroPedido", JSON.stringify(pedido));
    window.open("ticket.html", "_blank");
}