function updateBanner() {
  const header = document.querySelector('.header');
  const banner = document.querySelector('.banner');
  
   banner.style.minHeight = `calc(100vh - ${header.offsetHeight}px)`;
}

window.addEventListener('load', updateBanner);
window.addEventListener('resize', updateBanner);