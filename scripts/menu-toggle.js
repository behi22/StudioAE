export function initMenuToggle() {
  const menuButton = document.getElementById('menu-button');
  const navTab = document.querySelector('.nav-tab');
  const subNavbar = document.querySelector('.sub-navbar');
  const header = document.querySelector('header');
  const hiddenLogo = document.querySelector('.nav-logo-container');
  const servicesToggle = document.getElementById('services-toggle');
  const backButton = document.getElementById('back-button');

  if (
    menuButton &&
    navTab &&
    subNavbar &&
    header &&
    hiddenLogo &&
    servicesToggle &&
    backButton
  ) {
    menuButton.addEventListener('click', () => {
      if (
        navTab.classList.contains('hidden') &&
        subNavbar.classList.contains('hidden')
      ) {
        navTab.classList.remove('hidden');
        navTab.classList.add('visible');
        menuButton.classList.add('close');
        hiddenLogo.classList.remove('hidden');
        header.classList.add('menu-open');
      } else {
        navTab.classList.add('hidden');
        navTab.classList.remove('visible');
        subNavbar.classList.add('hidden');
        subNavbar.classList.remove('visible');
        menuButton.classList.remove('close');
        hiddenLogo.classList.add('hidden');
        header.classList.remove('menu-open');
      }
    });

    servicesToggle.addEventListener('click', (event) => {
      event.preventDefault();
      navTab.classList.add('hidden');
      navTab.classList.remove('visible');
      subNavbar.classList.remove('hidden');
      subNavbar.classList.add('visible');
    });

    backButton.addEventListener('click', () => {
      subNavbar.classList.add('hidden');
      subNavbar.classList.remove('visible');
      navTab.classList.remove('hidden');
      navTab.classList.add('visible');
    });
  }
}
