const headerTemplate = document.createElement("template");
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
    <div class="topnav" id="myTopnav">
        <a href="/" class="active">Retirada</a>
        <a href="/student">Aluno</a>
        <a href="/parent">Responsável</a>
        <a href="#none">Merenda</a>
        <a href="javascript:void(0);" class="icon" onclick="topNav_resize()">
          <i class="fa fa-bars"></i>
        </a>
      </div>

      <!-- Resize TopNav -->
      
      

      `;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
