class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        h3 {
          color: purple;
        }
      </style>
      <h3>${this.getAttribute('name')}</h3>
    `
  }
}

window.customElements.define('user-card', UserCard);