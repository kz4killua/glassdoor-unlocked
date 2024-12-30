function unlock() {
  const wall = document.querySelector('div#ContentWallHardsell');
  if (wall) {
    wall.remove();
  }

  const overlay = document.querySelector('div#HardsellOverlay');
  if (overlay) {
    overlay.remove();
  }

  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  const html = document.querySelector('html');
  html.style.overflow = 'auto';

  document.onscroll = () => {};
}

unlock();

const target = document.querySelector('body');
const config = { attributes: true, childList: true, subtree: true };
const callback = (mutationsList, observer) => unlock();
const observer = new MutationObserver(callback);
observer.observe(target, config);