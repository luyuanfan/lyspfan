class FooterComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <span>[<a href="content/about.html">about me</a>]</span>
        <span>[<a href="content/trips.html">trips</a>]</span>
        <span>[<a href="content/stardew.html">stardew</a>]</span>
        <span>[<a href="content/5g.html">5g notes</a>]</span>
        <br>
        <span onclick="Copy()" onmouseover="" style="cursor: pointer;" data-toggle="tooltip" data-placement="bottom" title="copied">[lyspfan@gmail.com]</span>
        <span>[<a href="https://github.com/luyuanfan/">github</a>]</span>
        `;
    }
  }
  
  function Copy() {
    navigator.clipboard.writeText("lyspfan@gmail.com");
  }
  
  customElements.define('indexfooter-component', FooterComponent);