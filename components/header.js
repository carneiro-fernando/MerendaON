var headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
        <script src="header.js" type="text/javascript" defer></script>
        <link href="/styles/styles.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <!-- Logo, name and Profile -->
    <div class="index_header">
        <img id="logo_img"
            src="https://cdn0.iconfinder.com/data/icons/coffee-shop-44/64/breakfast_lunch_food_meal-512.png"
            alt="MerendaON icon">

        <div class="index_header_text">
            <span style="font-weight: normal;">Merenda</span>
            <span style="color: chartreuse;">On</span>
        </div>
                  
        <div style="flex: 1;">
            <img id="profile_img" src="https://github.com/carneiro-fernando.png" alt="User profile image">
        </div>
    </div>

   
    <!-- Navigation bar -->
    

      <!-- Resize TopNav -->
      
      

      `;

class Header extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    this.attachShadow({mode:"open"}).append(headerTemplate.content);
  }
}

customElements.define("header-component", Header);



var topnav = document.getElementById("myTopnav");
var topnavButton = document.getElementById("navBtn");

function topNavResize() {
  console.log("I reach here!");
  topnav.classList.toggle("responsive");
}

topnavButton.addEventListener("click", topNavResize);
