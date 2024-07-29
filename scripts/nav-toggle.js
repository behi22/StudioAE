export function initNavToggle() {
  const servicesToggle = document.getElementById('services-toggle');
  const subNavbar = document.querySelector('.sub-navbar');
  const navTab = document.querySelector('.nav-tab');

  if (servicesToggle && subNavbar && navTab) {
    servicesToggle.addEventListener('click', (event) => {
      event.preventDefault();

      navTab.classList.add('hidden');
      navTab.classList.remove('visible');
      subNavbar.classList.remove('hidden');
      subNavbar.classList.add('visible');
    });
  }
}
