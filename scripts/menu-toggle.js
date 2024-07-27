export function initMenuToggle() {
  const menuButton = document.getElementById('menu-button');
  const navTab = document.querySelector('.nav-tab');
  const subNavbar = document.querySelector('.sub-navbar');

  if (menuButton && navTab && subNavbar) {
    menuButton.addEventListener('click', () => {
      if (
        navTab.classList.contains('hidden') &&
        subNavbar.classList.contains('hidden')
      ) {
        navTab.classList.remove('hidden');
        navTab.classList.add('visible');
        menuButton.textContent = 'Close';
      } else {
        navTab.classList.add('hidden');
        navTab.classList.remove('visible');
        subNavbar.classList.add('hidden');
        subNavbar.classList.remove('visible');
        menuButton.textContent = 'Menu';
      }
    });
  }
}
