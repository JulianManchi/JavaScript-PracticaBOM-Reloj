let contador = 1;

// Ejecutar una funcion pasado cierto tiempo en milisegundos

// Primer metodo (No se usa muy habitualmente)
function mostarPublicidad(){
    if(contador === 5){
        // quiero obtener el intervalo
        window.clearInterval(codigo);
    }
    document.write(`<p>Ahora muestro publicidad</p>`);
    contador = contador + 1;
}

// window.setTimeout(mostarPublicidad, 3000);

// Segundo metodo (Se usa habitualmente)
// window.setTimeout(function (){
//     document.write(`<p>Ahora muestro publicidad</p>`);
// }, 4000);

// // Tercer metodo (Se usa habitualmente)
// setTimeout(()=>{
//     document.write(`<p>Ahora muestro publicidad</p>`);
// }, 4500);

// Ejecutar una funcion cada cierto tiempo en milisegundo y que se repita
// setInterval(() => {
//     document.write(`<p>Ahora muestro publicidad</p>`);
// }, 5000);

let codigo = setInterval(mostarPublicidad, 3000);