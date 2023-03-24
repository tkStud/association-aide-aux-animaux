const toggleNavButton = document.getElementById('toggle-btn');
const navbar = document.getElementById('navbar-menu');
const btnCross =document.getElementById('btn-cross')

toggleNavButton.addEventListener('click', function() {
  if (navbar.style.display === 'none') {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
});

btnCross.addEventListener('click' , function(){
  if (navbar.style.display === 'block'){
    navbar.style.display = 'none';
  } else {
    navbar.style.display='none';
  }
})