console.log('hello');



// CODE VOOR DE MENU 
var menuButton = document.getElementById('menu');
var menuSee = document.querySelector("header nav ul");

function menuverschijnt(){
  menuSee.classList.toggle("terug")

}

menuButton.addEventListener("click", menuverschijnt);