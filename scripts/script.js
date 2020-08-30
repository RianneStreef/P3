console.log("test")


const header = document.getElementById('header-fx');

setTimeout(() => header.classList.add('header-fx'), 100)


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

function changeTitleClass() {
  if (window.pageYOffset > '5') {
    title.classList.add('title-background')
  } else {
    title.classList.remove('title-background')
  }
}

