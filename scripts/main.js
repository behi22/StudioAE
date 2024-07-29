import { initMenuToggle } from './menu-toggle.js';
import { initSubNavToggle } from './sub-nav-toggle.js';
import { initNavToggle } from './nav-toggle.js';
import { initDragToScroll } from './drag-to-scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  initSubNavToggle();
  initNavToggle();
  initDragToScroll();
});
