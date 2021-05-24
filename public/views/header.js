class Navbar extends HTMLElement {
  connectedCallback() {
    setTimeout(() => {
      this.innerHTML = `
      <p>TESTE INFERNO</p>
    `;
    });
  }
}

customElements.define("myNavbar", Navbar);
