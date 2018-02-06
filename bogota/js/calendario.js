function calendario() {
//fecha actual
meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
lasemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
diassemana=["L","M","M","J","V","S","D"];

hoy = new Date();
annohoy = hoy.getFullYear();
meshoy = hoy.getMonth();
diasemana = hoy.getDay();
diahoy = hoy.getDate();

tit=document.getElementById("titulos1");
an=document.getElementById("titulos2");
ant=document.getElementById("anterior"); //mes anterior
pos=document.getElementById("posterior"); //mes posterior
// Elementos del DOM en primera fila
f0=document.getElementById("fila0");

// Definir elementos iniciales:
mescal = meshoy; //mes principal
annocal = annohoy //año principal
//iniciar calendario:
primeralinea()
cabecera()
escribirdias()

//FUNCIONES de creación del calendario:
//cabecera del calendario
function cabecera() {
        tit.innerHTML=meses[mescal];
         an.innerHTML=annocal;
         mesant=mescal-1; //mes anterior
         mespos=mescal+1; //mes posterior
         if (mesant<0) {mesant=11;}
         if (mespos>11) {mespos=0;}

  }
//primera línea de tabla: días de la semana.
function primeralinea() {
         for (i=0;i<7;i++) {
             celda0=f0.getElementsByTagName("th")[i];
             celda0.innerHTML=diassemana[i]
             }
         }
}

//rellenar celdas con los días
function escribirdias() {
         //Buscar dia de la semana del dia 1 del mes:
         primeromes=new Date(annocal,mescal,"1") //buscar primer día del mes
         prsem=primeromes.getDay() //buscar día de la semana del día 1
         prsem--; //adaptar al calendario español (empezar por lunes)
         if (prsem==-1) {prsem=6;}
         //buscar fecha para primera celda:
         diaprmes=primeromes.getDate()
         prcelda=diaprmes-prsem; //restar días que sobran de la semana
         empezar=primeromes.setDate(prcelda) //empezar= tiempo UNIX 1ª celda
         diames=new Date() //convertir en fecha
         diames.setTime(empezar); //diames=fecha primera celda.
         //Recorrer las celdas para escribir el día:
         for (i=1;i<7;i++) { //localizar fila
             fila=document.getElementById("fila"+i);
             for (j=0;j<7;j++) {
                 midia=diames.getDate()
                 mimes=diames.getMonth()
                 mianno=diames.getFullYear()
                 celda=fila.getElementsByTagName("td")[j];
                 celda.innerHTML=midia;
                 //Recuperar estado inicial al cambiar de mes:
                 celda.style.backgroundColor="#3498db";
                 celda.style.color="white";

                 //domingos en rojo
                 if (j==6) {
                    celda.style.color="black";
                    }
                 //dias restantes del mes en gris
                 if (mimes!=mescal) {
                    celda.style.color="#a0babc";
                    }
                 //destacar la fecha actual
                 if (mimes==meshoy && midia==diahoy && mianno==annohoy ) {
                    celda.innerHTML="<cite title='Fecha Actual'>"+midia+"</cite>";
                    }
                 //pasar al siguiente día
                 midia=midia+1;
                 diames.setDate(midia);
                 }
             }
         }
//Ver mes anterior
function mesantes() {
  nuevomes=new Date() //nuevo objeto de fecha
  primeromes--; //Restamos un día al 1 del mes visualizado
  nuevomes.setTime(primeromes) //cambiamos fecha al mes anterior
  mescal=nuevomes.getMonth() //cambiamos las variables que usarán las funciones
  annocal=nuevomes.getFullYear();
  escribirdias() //llamada a funcion de cambio de tabla.
  function actualizar() {
          tit.innerHTML=meses[mescal];
          an.innerHTML=annocal;
           mesant=mescal-1; //mes anterior
           mespos=mescal+1; //mes posterior
           if (mesant<0) {mesant=11;}
           if (mespos>11) {mespos=0;}

    }
    actualizar();
}
//ver mes posterior
function mesdespues() {
  nuevomes=new Date() //nuevo obejto fecha
  tiempounix=primeromes.getTime() //tiempo de primero mes visible
  tiempounix=tiempounix+(45*24*60*60*1000) //le añadimos 45 días
  nuevomes.setTime(tiempounix) //fecha con mes posterior.
  mescal=nuevomes.getMonth() //cambiamos variables
  annocal=nuevomes.getFullYear()
  escribirdias() //escribir la tabla
  function actualizar() {
           tit.innerHTML=meses[mescal];
           an.innerHTML=annocal;
           mesant=mescal-1; //mes anterior
           mespos=mescal+1; //mes posterior
           if (mesant<0) {mesant=11;}
           if (mespos>11) {mespos=0;}

    }
    actualizar();
}
calendario();
