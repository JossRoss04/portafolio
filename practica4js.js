function generarRFC(){
var nom=document.getElementById("nombre").value;
var apa=document.getElementById("apellipa").value;
var ama=document.getElementById("apellima").value;
var yb=document.getElementById("Byear").value;
var mb=document.getElementById("Bmonth").value;
var db=document.getElementById("Bday").value;

var primeraLetraNombre = nom.substring(0,1);

var primerasDosLetrasApa = apa.substring(0,2);

var primeraLetraAma = ama.substring(0,1);

var ultimosDosCaracteresByear = yb.substring(2,4);

var primerosDosCaracteresBmonth = mb.substring(0,2);

var primerosDosCaracteresBday = db.substring(0,2);


var rfc = primerasDosLetrasApa + primeraLetraAma + primeraLetraNombre + ultimosDosCaracteresByear + primerosDosCaracteresBmonth + primerosDosCaracteresBday;

rfc = rfc.toUpperCase();

document.getElementById("rfc").value = rfc;
}