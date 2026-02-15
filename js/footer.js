class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        writings: 
        <span>[<a href="about.html">about me</a>]</span>
        <span>[<a href="notes.html">please read!!!</a>]</span>
        <br>
        misc:
        <span>[<a href="trips.html">travels</a>]</span>
        <span>[<a href="stardew.html">stardew valley</a>]</span>
        <br>
        contacts: 
        <span onclick="Copy()" onmouseover="" style="cursor: pointer;" data-toggle="tooltip" data-placement="bottom" title="copied">[lyspfan@gmail.com]</span>
        <span>[<a href="https://github.com/luyuanfan/" target="_blank">github</a>]</span>
        <span>[<a href="https://www.linkedin.com/in/luyuanfan/" target="_blank">linkedin</a>]</span>
      `;
  }
}

function Copy() {
  navigator.clipboard.writeText("lyspfan@gmail.com");
}

customElements.define('footer-component', FooterComponent);