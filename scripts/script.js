// Going to minus header from hero
const HERO_SIZE = 300;
const HEADER_SIZE = 58;

const header = document.getElementById('header-fx');

setTimeout(() => header.classList.add('header-fx'), 100);

function openNav() {
  document.getElementById('myNav').classList.remove('nav-hidden-mobile');
  document.getElementById('openNav').style.display = 'none';
}

function closeNav() {
  document.getElementById('myNav').classList.add('nav-hidden-mobile');
  document.getElementById('openNav').style.display = 'inline-block';
}

window.onscroll = function () {
  changeTitleClass();
};

var title = document.getElementById('myTitle');

var sticky = title.offsetTop;

function changeTitleClass() {
  if (window.pageYOffset > HERO_SIZE - HEADER_SIZE) {
    title.classList.add('title-background');
  } else {
    title.classList.remove('title-background');
  }
}

function myFunction() {
  alert('The form was submitted');
}
