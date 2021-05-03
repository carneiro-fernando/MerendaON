
function to_another_check_func () {
    // Get the checkbox
    var checkBox = document.getElementById("to_another_checkbox");
    // Get the output text
    var text = document.getElementById("to_another");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      style.display = "block";
    } else {
      style.display = "none";
    }
  }