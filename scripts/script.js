console.log("test")


const hero = document.getElementById('heroFX');

setTimeout(() => hero.classList.add('hero-fx'), 100)




function openNav() {
  document.getElementById("myNav").classList.remove("nav-hidden-mobile");
  document.getElementById("openNav").style.display="none";
}

function closeNav() {
  document.getElementById("myNav").classList.add("nav-hidden-mobile");
  document.getElementById("openNav").style.display="inline-block";
}



window.onscroll = function () {
  changeTitleClass()
}

var title = document.getElementById('myTitle')

var sticky = title.offsetTop

const HEADER_HEIGHT = 60;
const HERO_HEIGHT = 300;

function changeTitleClass() {
  if (window.pageYOffset > HERO_HEIGHT - HEADER_HEIGHT) {
    title.classList.add('title-background')
  } else {
    title.classList.remove('title-background')
  }
}

function myFunction() {
  alert("Thank you for your message!");
}