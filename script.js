let heroFlick, vertFlick, horiFlick, navFlick;

function initCarousels(){
  const isMobile = window.innerWidth <= 768;

  // destruir instancias previas
  [heroFlick, vertFlick, horiFlick, navFlick].forEach(f=>f&&f.destroy());

  // HERO: 3 desktop / 1 móvil
  heroFlick = new Flickity('.hero-carousel',{
    cellAlign:'left', contain:true,
    groupCells:isMobile?1:3, wrapAround:true,
    pageDots:false, prevNextButtons:true,
    draggable:true
  });

  // ADULT SERIES: 3 desktop / 2 móvil (scroll 1 en 1)
  vertFlick = new Flickity('.vertical-carousel',{
    cellAlign:'left', contain:true,
    groupCells:isMobile?2:3, wrapAround:false,
    pageDots:false, prevNextButtons:true,
    draggable:true
  });

  // ADULT PROJECTS: 3 desktop / 1 móvil (scroll 1 en 1)
  horiFlick = new Flickity('.horizontal-carousel',{
    cellAlign:'left', contain:true,
    groupCells:isMobile?1:3, wrapAround:false,
    pageDots:false, prevNextButtons:true,
    draggable:true
  });

  // NAV MENU: sólo en móvil
  if(isMobile){
    navFlick = new Flickity('.nav-carousel',{
      cellAlign:'left', contain:true,
      groupCells:1, wrapAround:false,
      pageDots:false, prevNextButtons:true,
      draggable:true
    });
  }
}

function debounce(fn,ms){
  let t;
  return ()=>{ clearTimeout(t); t=setTimeout(fn,ms) };
}

window.addEventListener('DOMContentLoaded',initCarousels);
window.addEventListener('resize',debounce(initCarousels,200));
