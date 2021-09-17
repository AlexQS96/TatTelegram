window.onload = displayClock();
function displayClock(){
    var display = new Date().toLocaleTimeString([], {timeStyle: 'short'});
    document.getElementById("time").innerHTML = display;
    setTimeout(displayClock, 1000); 
}
      
var dt = new Date();
var date = dt.getDate();
var month = dt.getMonth();
var year = dt.getFullYear();
var monthArr = ["Enero", "Febrero","Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
month = monthArr[month];
document.getElementById("date").innerHTML=" - "+date+" de "+month+" del "+year;



// Boton Burgues

function burgerButtonM() {
    var burger = document.getElementById("burgerButton");
    burger.classList.toggle("is-active");
    var dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = "block";

    burger.addEventListener('click', function() {
        if(dropdown.style.display === "none"){
            dropdown.style.display = "block";
        }
        else
        {
            dropdown.style.display = "none";
        }
    })
}
