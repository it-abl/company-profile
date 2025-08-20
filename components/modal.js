
class AblModal extends HTMLElement{
  connectedCallback(){
    const title = this.getAttribute('title') || 'Detail';
    this.innerHTML = `
      <dialog>
        <header><h3>${title}</h3><button data-close aria-label="Close">✕</button></header>
        <div class="body"><slot></slot></div>
      </dialog>`;
  }
}
customElements.define('abl-modal', AblModal);

addEventListener('click', e=>{
  const opener = e.target.closest('[data-open]');
  if(opener){
    const sel = opener.getAttribute('data-open');
    const dlg = document.querySelector(sel)?.querySelector('dialog');
    if(dlg) dlg.showModal();
  }
  if(e.target.matches('[data-close]')){
    const dlg = e.target.closest('dialog');
    if(dlg) dlg.close();
  }
});
