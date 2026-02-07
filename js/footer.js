class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <span>[<a href="about.html">about me</a>]</span>
      <span>[<a href="trips.html">trips</a>]</span>
      <span>[<a href="stardew.html">stardew</a>]</span>
      <span>[<a href="5g.html">5g notes</a>]</span>
      <br>
      <span onclick="Copy()" onmouseover="" style="cursor: pointer;" data-toggle="tooltip" data-placement="bottom" title="copied">[lyspfan@gmail.com]</span>
      `;
  }
}

function Copy() {
  navigator.clipboard.writeText("lyspfan@gmail.com");
}

customElements.define('footer-component', FooterComponent);