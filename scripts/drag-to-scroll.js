const SCROLL_SPEED = 1;

export function initDragToScroll() {
  const spaces = document.querySelector('.spaces');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (spaces) {
    spaces.addEventListener('mousedown', (e) => {
      isDown = true;
      spaces.classList.add('active');
      startX = e.pageX - spaces.offsetLeft;
      scrollLeft = spaces.scrollLeft;
    });

    spaces.addEventListener('mouseleave', () => {
      isDown = false;
      spaces.classList.remove('active');
    });

    spaces.addEventListener('mouseup', () => {
      isDown = false;
      spaces.classList.remove('active');
    });

    spaces.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - spaces.offsetLeft;
      const walk = (x - startX) * SCROLL_SPEED;
      spaces.scrollLeft = scrollLeft - walk;
    });
  }
}
