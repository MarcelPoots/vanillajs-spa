import { Home, About, Contact, NotFound } from './views.js';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact
};

export function initRouter() {
  window.addEventListener('popstate', render);
  render();
}

export function navigate(path) {
  history.pushState({}, '', path);
  render();
}

function render() {
  const app = document.getElementById('app');
  const path = location.pathname;
  const page = routes[path] || NotFound;
  app.innerHTML = page();
  document.querySelector('app-menu')?.setActive(path);
}
