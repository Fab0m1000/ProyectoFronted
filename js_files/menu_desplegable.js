const burguer_icon = document.querySelector('#hamburguerIcon');
const navTag = document.querySelector('nav');

burguer_icon.addEventListener('click', function(e) {
  /* console.log('haz hecho click'); */
  navTag.classList.toggle('open-nav');
}); 


