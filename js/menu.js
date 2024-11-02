function seleccionar(link) {
    var opciones = document.querySelectorAll('#link a');
    opciones.forEach(opcion => opcion.className = ""); // Limpia la clase "seleccionado"
    link.className = "seleccionado"; // Solo agrega la clase al link seleccionado
 
    var nav = document.querySelector("nav");
    nav.className = ""; // Cierra el menú responsive si está abierto
 }


function responsiveMenu() {
    var nav = document.querySelector("nav"); // Selecciona el elemento nav
    if (nav.className === "") {
        nav.className = "responsive"; // Agrega la clase responsive a nav
    } else {
        nav.className = ""; // Quita la clase responsive
    }
}

// Función para aplicar las animaciones de las habilidades
window.onscroll = function(){
    efectosHabilidad()
};
function efectosHabilidad(){
    var skills = document.getElementById("habilidades");
    var distancia = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("java").classList.add("barra-progreso2");
        document.getElementById("csharp").classList.add("barra-progreso3");
        document.getElementById("dotnet").classList.add("barra-progreso4");
        document.getElementById("sql").classList.add("barra-progreso5");
        document.getElementById("ipv").classList.add("barra-progreso6");
    }
}