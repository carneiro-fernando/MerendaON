function someone_else_func() {
  // Get the checkbox
  var checkBox = document.getElementById("someone_else_checkbox");

  // Get the output div
  var div_someone_else = document.getElementById("someone_else");

  // If the checkbox is checked, display the output div
  if (checkBox.checked == true) {
    div_someone_else.style.display = "block";
  } else {
    div_someone_else.style.display = "none";
  }
}

function topNav_resize() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Apartir daqui não foi implementado
// Link do tutorial:https://www.codegrepper.com/code-examples/javascript/javascript+create+new+div+html+element+dynamically

var newDiv = document.createElement("div");
document.body.appendChild(newDiv);

document.body.onload = addDependent;

function addDependent () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi that works!"); 
  
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}