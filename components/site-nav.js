
class SiteNav extends HTMLElement {
  connectedCallback(){
    const home = this.getAttribute('home') || '/';
    const contact = this.getAttribute('contact') || 'contact.html';
    this.innerHTML = `
      <footer class="site-nav">
        <a href="${home}">Home</a>
        <button type="button" id="backBtn">Back</button>
        <a href="${contact}">Contact Us</a>
      </footer>`;
    this.querySelector('#backBtn').addEventListener('click', ()=> history.back());
  }
}
customElements.define('site-nav', SiteNav);
