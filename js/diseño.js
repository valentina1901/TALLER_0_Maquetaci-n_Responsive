function alert(){

   swal("Términos y condiciones", "Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa , las leyes por las que nos regimos y determinados aspectos que siempre hemos creído que son ciertos . Por ello , estos Términos del Servicio ayudan a definir la relación que tiene Google contigo cuando interactúas con nuestros servicios . Por ejemplo , estos términos incluyen las siguientes secciones : Qué puedes esperar de nosotros , donde se describe cómo proporcionamos y desarrollamos nuestros servicios . Lo que esperamos de ti , donde se establecen ciertas reglas para utilizar nuestros servicios", {
       button: "Aceptar",
   } );

}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
setInterval(()=>{
    
  plusSlides(1)
},5000)