// function to enable ad disable checkbox
function someone_else_func() {

  var checkBox = document.getElementById("someone_else_checkbox");
  var div_someone_else = document.getElementById("someone_else");
  if (checkBox.checked == true) {
    div_someone_else.style.display = "block";
  } else {
    div_someone_else.style.display = "none";
  }
}

// function to resize navbar (responsiveness)
function topNav_resize() {
  var x = document.getElementById("myTopnav");
  console.log("este é o conteudo da variavel x: " +x)
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



//Implementing

// Apartir daqui não foi implementado
// Link do tutorial:https://www.codegrepper.com/code-examples/javascript/javascript+create+new+div+html+element+dynamically

// var newDiv = document.createElement("div");
// document.body.appendChild(newDiv);

// document.body.onload = addDependent;

// function addDependent () { 
//   // create a new div element 
//   var newDiv = document.createElement("div"); 
//   // and give it some content 
//   var newContent = document.createTextNode("Hi that works!"); 
  
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }