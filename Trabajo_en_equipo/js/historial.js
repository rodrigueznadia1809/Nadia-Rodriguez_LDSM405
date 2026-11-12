window.onload = function() {
    mostrarHistorial();
};
 
function mostrarHistorial() {
    const contenedor = document.getElementById('lista-historial');
    contenedor.innerHTML = '';
    let historial = JSON.parse(localStorage.getItem('historialCalculos')) || [];
   
    if (historial.length === 0) {
        contenedor.innerHTML = '<p>No hay cálculos guardados todavía.</p>';
        return;
    }
 
    historial.forEach(calc => {
        const p = document.createElement('p');
        p.innerText = calc;
        contenedor.appendChild(p);
    });
}
 
function limpiarHistorial() {
    localStorage.removeItem('historialCalculos');
    mostrarHistorial();
}