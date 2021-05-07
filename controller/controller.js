

function someone_else_func () {
    
  // Get the checkbox
    var checkBox = document.getElementById("someone_else_checkbox");
  
  // Get the output div
    var div_someone_else = document.getElementById("someone_else");

    
  // If the checkbox is checked, display the output div
    if (checkBox.checked == true){
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