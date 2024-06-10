AOS.init({
  
  offset: 120, 
  delay: 0, 
  duration: 700, 
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});