function obtenerFecha() {
  let fecha = new Date();

  // console.log(fecha.getDate()); // numeros del dia de la semana 1-31
  // console.log(fecha.getDay()); // numeros del los dias de domingo a sabado 0-6
  // console.log(fecha.getMonth()); // numeros del mes del 1 al 12
  // console.log(fecha.getFullYear()); //numeros del año

  let semanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let fechaReloj = document.getElementById("Fecha");
  fechaReloj.innerHTML = `${semanas[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

  // Arreglar los valores de un digito
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let horas = fecha.getHours();

  if(minutos < 10){
    minutos = `0` + minutos;
  }
  if(segundos < 10){
    segundos = `0` + segundos;
  }
  if(horas < 10){
    horas = `0` + horas;
  }

  let horaReloj = document.getElementById("Hora");
  horaReloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(obtenerFecha, 1000);

function cambiarColor(color){
    let seccion = document.getElementsByClassName('fechaHora');
    console.log(seccion[0]);
    seccion[0].className = `fechaHora ${color}`;
}
