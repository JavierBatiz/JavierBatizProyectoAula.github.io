window.onscroll = function(){

    var pocision = window.pageYOffset || document.documentElement.scrollTop;
    
    var elemento1 = document.getElementById("Fondo");
    var elemento2 = document.getElementById("tarjetas");

    elemento1.style.top = pocision * (0.35*0.35) + "px"; 
    elemento2.style.top = pocision * (0.20*0.20) + "px" ; 
}

var eye = document.getElementById(`Hide_password`);
var input = document.getElementById(`Input_password`);

eye.addEventListener("click", function(){

    if(input.type == "password"){
        input.type = "text"
        eye.style.opacity = 0.8
    }else{
        input.type = "password"
        eye.style.opacity = 0.2
    }



})