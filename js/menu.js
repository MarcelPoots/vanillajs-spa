import { navigate } from './router.js';

class AppMenu extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListener('click', this.onClick);
  }

  onClick = (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    e.preventDefault();
    navigate(link.getAttribute('href'));
  }

  setActive(path) {
    this.querySelectorAll('a').forEach(a =>
      a.classList.toggle('active', a.getAttribute('href') === path)
    );
  }

  render() {
    this.innerHTML = `
      <style>
        nav {
          width: 220px;
          height: 100vh;
          float: left;
          background: #2c3e50;
          padding: 20px;
          box-sizing: border-box;
        }
        a {
          display: block;
          color: white;
          text-decoration: none;
          margin-bottom: 10px;
        }
        a.active {
          font-weight: bold;
          text-decoration: underline;
        }
      </style>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    `;
  }
}

customElements.define('app-menu', AppMenu);
