// header anim
var baner = document.getElementsByClassName('baner');
var headerContent = document.getElementsByClassName('headerContent');
function banerFun() {
  baner[0].style.top = '0vh';
  baner[0].style.opacity = '1';
  baner[0].style.transform = 'scale(1)';
  headerContent[0].style.transform = 'scale(1)';
  setTimeout(function () {
    baner[0].style.transition = '0s ease';
  }, 1300);
}

// about double hover
var stripes = document.getElementsByClassName('stripes');
var secTwo = document.getElementsByClassName('secTwo');

function stripesFun() {
  if(stripes[0].getClientRects()[0].top < window.innerHeight /3){
    stripes[0].style.opacity = '1';
    secTwo[0].style.background = '#d1c4a3'
  }else{
    stripes[0].style.opacity = '0';
    secTwo[0].style.background = 'rgba(196,178,122,1)'
  }
}

// recent projects double hover
var recentProjects = document.getElementsByClassName('recentProjects');
function recentProjectsFun() {
  if(recentProjects[0].getClientRects()[0].top < window.innerHeight /3){
    recentProjects[0].style.background = '#33343b';
  }else{
    recentProjects[0].style.background = '#fff';
  }
}

// parallax
function paralaxFun() {
  baner[0].style.marginTop = -window.pageYOffset / 2 + 'px';
  // console.log(window.pageYOffset);
}

// window event listeners
// window event listeners
// window event listeners
window.addEventListener('load',()=>{
  banerFun();
});

window.addEventListener('scroll',()=>{
  stripesFun();
  recentProjectsFun();
  paralaxFun();
});
