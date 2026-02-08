window.addEventListener('DOMContentLoaded', initCarousels);
window.addEventListener('resize', debounce(initCarousels, 200));

let heroFlick, vertFlicks = [], horiFlicks = [], navFlick;

function initCarousels() {
  const isMobile = window.innerWidth <= 768;

  // destruye héroe y nav si existen
  heroFlick && heroFlick.destroy();
  navFlick  && navFlick.destroy();
  vertFlicks.forEach(f => f.destroy());
  horiFlicks.forEach(f => f.destroy());
  vertFlicks = [];
  horiFlicks = [];

  // HERO (igual que antes)
  heroFlick = new Flickity('.hero-carousel', {
    cellAlign: 'left', contain: true,
    groupCells: isMobile ? 1 : 3,
    wrapAround: true, pageDots: false,
    imagesLoaded: true,
    prevNextButtons: true, draggable: true
  });

  // VERTICAL: inicializa cada uno
  document.querySelectorAll('.vertical-carousel').forEach(el => {
    vertFlicks.push(new Flickity(el, {
      cellAlign: 'left', contain: true,
      groupCells: false, wrapAround: false,
      pageDots: false, prevNextButtons: true,
      imagesLoaded: true,
      draggable: true
    }));
  });

  // HORIZONTAL: inicializa cada uno
  document.querySelectorAll('.horizontal-carousel, .another-horizontal-carousel').forEach(el => {
    horiFlicks.push(new Flickity(el, {
      cellAlign: 'left', contain: true,
      groupCells: false, wrapAround: false,
      pageDots: false, prevNextButtons: true,
      imagesLoaded: true,
      draggable: true
    }));
  });

  // NAV sólo en móvil
  if (isMobile) {
    navFlick = new Flickity('.nav-carousel', {
      cellAlign: 'left', contain: true,
      groupCells: 1, wrapAround: false,
      pageDots: false, prevNextButtons: true,
      imagesLoaded: true,
      draggable: true
    });
  }
}

function debounce(fn, ms) {
  let t;
  return () => {
    clearTimeout(t);
    t = setTimeout(fn, ms);
  };
}
