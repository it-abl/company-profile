class AblAccordion extends HTMLElement{
  connectedCallback(){
    const items = [...this.querySelectorAll('section')].map(sec => {
      const title = sec.getAttribute('data-title') || 'Section';
      // id dari SVG
      const auto = title.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'');
      const id = sec.getAttribute('data-id') || auto;

      return `
        <details id="${id}">
          <summary>${title}</summary>
          <div>${sec.innerHTML}</div>
        </details>`;
    }).join('');

    this.innerHTML = `<div class="accordion card">${items}</div>`;

    const s = document.createElement('style');
    s.textContent = `
      .accordion details{border:1px solid var(--border);border-radius:10px;margin:10px 0;padding:8px 12px;background:#0e1627}
      .accordion summary{cursor:pointer;font-weight:600;outline:none}
    `;
    this.appendChild(s);
  }
}
customElements.define('abl-accordion', AblAccordion);
