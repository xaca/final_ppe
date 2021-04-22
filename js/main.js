var secciones = [];
var rutas = ["","index","acercade","servicios","mi_experiencia","portafolio","contacto"];
var bajo_logeo = ["seccion_2","seccion_5"];
var usuario_logeado = true;//Esto es una simulacion de acceso, asi no funciona en la realidad porque es inseguro

window.onload = init;

function init(){
    setTimeout(hideURLbar, 0);
    asignarVariables();
    asignarEventos();
}
function hideURLbar() {
    window.scrollTo(0, 1);
}

function asignarVariables(){
	secciones["seccion_1"]= document.getElementById("seccion_1");
	secciones["seccion_2"]= document.getElementById("seccion_2");
	secciones["seccion_3"]= document.getElementById("seccion_3");
	secciones["seccion_4"]= document.getElementById("seccion_4");
	secciones["seccion_5"]= document.getElementById("seccion_5");
	secciones["seccion_6"]= document.getElementById("seccion_6");
}

function asignarEventos(){
	var temp;
	for(var i in secciones)
	{
		temp = secciones[i];
		temp.addEventListener("click",navegacion);
	}
}

function controlAcceso(indice){
	for(i in bajo_logeo)
	{
		if(bajo_logeo[i]==indice)
		{
			return true;
		}
	}
	return false;
}

function navegacion(event){
	var id = event.target.id;
	var indice = id.split("_")[1];
	var ruta = rutas[indice]+".html";

	if(controlAcceso(id) && usuario_logeado)
	{
		location.href = ruta;
	}
	else
	{
		alert("Error, esta seccion requiere logeo");
	}
}
