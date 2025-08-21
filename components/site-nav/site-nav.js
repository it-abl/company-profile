class SiteNav extends HTMLElement {
    connectedCallback() {
        const home = this.getAttribute('home') || '/';
        const contact = this.getAttribute('contact') || 'contact.html';
        const currentPage = window.location.pathname;

        const showBackButton = currentPage !== home;

        this.innerHTML = `
            <footer class="site-nav">
                <a href="${home}">Home</a>
                ${showBackButton ? `<button type="button" id="backBtn">Back</button>` : ''}
                <a href="${contact}">Contact Us</a>
            </footer>
        `;

        if (showBackButton) {
            this.querySelector('#backBtn').addEventListener('click', () => history.back());
        }
    }
}

customElements.define('site-nav', SiteNav);
