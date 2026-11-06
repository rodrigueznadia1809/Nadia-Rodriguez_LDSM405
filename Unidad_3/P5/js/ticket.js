window.onload=function(){
    var  datosGuardados=localStorage.getItem("registroPedido");
    var datosPedido=JSON.parse(datosGuardados);
    document.getElementById("salidaCliente").innerText=datosPedido.cliente;
    document.getElementById("salidaSubtotal").innerText=datosPedido.subtotal;
    document.getElementById("salidaDescuento").innerText=datosPedido.ahorro;
    document.getElementById("salidaTotal").innerText=datosPedido.total;

    var contenedorLista=document.getElementById("salidaListaProductos");
    contenedorLista.innerHTML='';
    for(let i=0; i<datosPedido.producto.length; i++){
        var itemLi=document.createElement("li");
        itemLi.innerText=datosPedido.producto[i];
        contenedorLista.appendChild(itemLi);
    }
}