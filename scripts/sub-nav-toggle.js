export function initSubNavToggle() {
  const backButton = document.getElementById('back-button');
  const subNavbar = document.querySelector('.sub-navbar');
  const navTab = document.querySelector('.nav-tab');

  if (backButton && subNavbar && navTab) {
    backButton.addEventListener('click', () => {
      subNavbar.classList.add('hidden');
      subNavbar.classList.remove('visible');
      navTab.classList.remove('hidden');
      navTab.classList.add('visible');
    });
  }
}
