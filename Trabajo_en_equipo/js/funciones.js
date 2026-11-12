function cambiarModo() {
    const modo = document.getElementById('modo-calculo').value;
    const seccionVolumen = document.getElementById('seccion-volumen');
    const seccionArea = document.getElementById('seccion-area');
 
    if (modo === 'volumen') {
        seccionVolumen.style.display = 'block';
        seccionArea.style.display = 'none';
    } else {
        seccionVolumen.style.display = 'none';
        seccionArea.style.display = 'block';
    }
}
 
 
function actualizarInputsVolumen() {
    const figura = document.getElementById('figura-volumen').value;
    const contenedor = document.getElementById('inputs-volumen');
   
    if (figura === 'prisma-triangular') {
        contenedor.innerHTML = `
            <label>Base del triángulo (b): <input type="number" id="v-pt-base"></label>
            <label>Altura del triángulo (h): <input type="number" id="v-pt-alt-tri"></label>
            <label>Altura del prisma (H): <input type="number" id="v-pt-alt-prisma"></label>
        `;
    } else if (figura === 'prisma-rectangular') {
        contenedor.innerHTML = `
            <label>Largo: <input type="number" id="v-pr-largo"></label>
            <label>Ancho: <input type="number" id="v-pr-ancho"></label>
            <label>Altura: <input type="number" id="v-pr-altura"></label>
        `;
    } else if (figura === 'esfera') {
        contenedor.innerHTML = `<label>Radio (r): <input type="number" id="v-esf-radio"></label>`;
    }
}
 
 
function actualizarInputsArea() {
    const figura = document.getElementById('figura-area').value;
    const contenedor = document.getElementById('inputs-area');
   
    if (figura === 'trapecio') {
        contenedor.innerHTML = `
            <label>Base Mayor (B): <input type="number" id="a-trap-B"></label>
            <label>Base Menor (b): <input type="number" id="a-trap-b"></label>
            <label>Altura (h): <input type="number" id="a-trap-h"></label>
        `;
    } else if (figura === 'hexagono') {
        contenedor.innerHTML = `<label>Longitud del Lado (L): <input type="number" id="a-hex-lado"></label>`;
    } else if (figura === 'triangulo-rectangulo') {
        contenedor.innerHTML = `
            <label>Base (b): <input type="number" id="a-tr-base"></label>
            <label>Altura (h): <input type="number" id="a-tr-altura"></label>
        `;
    }
}
 
document.addEventListener('DOMContentLoaded', () => {
    actualizarInputsVolumen();
    actualizarInputsArea();
});
 
 
function calcularVolumen() {
    const figura = document.getElementById('figura-volumen').value;
    let resultado = 0;
    let descripcion = '';
 
    if (figura === 'prisma-triangular') {
        const base = parseFloat(document.getElementById('v-pt-base').value);
        const altTri = parseFloat(document.getElementById('v-pt-alt-tri').value);
        const altPrisma = parseFloat(document.getElementById('v-pt-alt-prisma').value);
        if (isNaN(base) || isNaN(altTri) || isNaN(altPrisma)) return alert('Ingresa todos los valores correctamente');
       
        resultado = ((base * altTri) / 2) * altPrisma;
        descripcion = `Volumen Prisma Triangular = ${resultado.toFixed(2)}`;
 
    } else if (figura === 'prisma-rectangular') {
        const largo = parseFloat(document.getElementById('v-pr-largo').value);
        const ancho = parseFloat(document.getElementById('v-pr-ancho').value);
        const altura = parseFloat(document.getElementById('v-pr-altura').value);
        if (isNaN(largo) || isNaN(ancho) || isNaN(altura)) return alert('Ingresa todos los valores correctamente');
       
        resultado = largo * ancho * altura;
        descripcion = `Volumen Prisma Rectangular = ${resultado.toFixed(2)}`;
 
    } else if (figura === 'esfera') {
        const radio = parseFloat(document.getElementById('v-esf-radio').value);
        if (isNaN(radio)) return alert('Ingresa un valor válido');
       
        resultado = (4 / 3) * Math.PI * Math.pow(radio, 3);
        descripcion = `Volumen Esfera = ${resultado.toFixed(2)}`;
    }
 
    document.getElementById('resultado-volumen').innerText = descripcion;
    guardarEnLocalStorage(descripcion);
}
 
 
function calcularArea() {
    const figura = document.getElementById('figura-area').value;
    let resultado = 0;
    let descripcion = '';
 
    if (figura === 'trapecio') {
        const B = parseFloat(document.getElementById('a-trap-B').value);
        const b = parseFloat(document.getElementById('a-trap-b').value);
        const h = parseFloat(document.getElementById('a-trap-h').value);
        if (isNaN(B) || isNaN(b) || isNaN(h)) return alert('Ingresa todos los valores correctamente');
       
        resultado = ((B + b) / 2) * h;
        descripcion = `Área Trapecio = ${resultado.toFixed(2)}`;
 
    } else if (figura === 'hexagono') {
        const lado = parseFloat(document.getElementById('a-hex-lado').value);
        if (isNaN(lado)) return alert('Ingresa un valor válido');
       
        resultado = (3 * Math.sqrt(3) / 2) * Math.pow(lado, 2);
        descripcion = `Área Hexágono Regular = ${resultado.toFixed(2)}`;
 
    } else if (figura === 'triangulo-rectangulo') {
        const base = parseFloat(document.getElementById('a-tr-base').value);
        const altura = parseFloat(document.getElementById('a-tr-altura').value);
        if (isNaN(base) || isNaN(altura)) return alert('Ingresa todos los valores correctamente');
       
        resultado = (base * altura) / 2;
        descripcion = `Área Triángulo Rectángulo = ${resultado.toFixed(2)}`;
    }
 
    document.getElementById('resultado-area').innerText = descripcion;
    guardarEnLocalStorage(descripcion);
}
 
 
function guardarEnLocalStorage(item) {
    let historial = JSON.parse(localStorage.getItem('historialCalculos')) || [];
    historial.push(item);
    localStorage.setItem('historialCalculos', JSON.stringify(historial));
}
 
 
function abrirHistorial() {
    window.open('historial.html', '_blank', 'width=600,height=600');
}