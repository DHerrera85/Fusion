// Initialize Flickity on each carousel
window.addEventListener('DOMContentLoaded', () => {
  // Hero: 3 per page
  new Flickity('.hero-carousel', {
    cellAlign: 'left', contain: true,
    groupCells: 3, wrapAround: true,
    pageDots: false, prevNextButtons: true,
    draggable: true
  });

  // Vertical: 4 per page
  new Flickity('.vertical-carousel', {
    cellAlign: 'left', contain: true,
    groupCells: 4, wrapAround: true,
    pageDots: false, prevNextButtons: true,
    draggable: true
  });

  // Horizontal: 3 per page
  new Flickity('.horizontal-carousel', {
    cellAlign: 'left', contain: true,
    groupCells: 3, wrapAround: true,
    pageDots: false, prevNextButtons: true,
    draggable: true
  });
});