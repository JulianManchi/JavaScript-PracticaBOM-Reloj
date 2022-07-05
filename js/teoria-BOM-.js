// Ejecutar una funcion pasado cierto tiempo en milisegundos

// Primer metodo (No se usa muy habitualmente)
function mostarPublicidad(){
    document.write(`<p>Ahora muestro publicidad</p>`);
}

window.setTimeout(mostarPublicidad, 3000);

// Segundo metodo (Se usa habitualmente)
window.setTimeout(function (){
    document.write(`<p>Ahora muestro publicidad</p>`);
}, 4000);

// Tercer metodo (Se usa habitualmente)
setTimeout(()=>{
    document.write(`<p>Ahora muestro publicidad</p>`);
}, 4500);

