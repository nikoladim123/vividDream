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

// recProjImageBox image car popup
var recProjImageBox = document.getElementsByClassName('recProjImageBox');
var recProjImg = document.getElementsByClassName('recProjImg');
var poUpImg = document.getElementsByClassName('poUpImg');
var poUpCarContainer = document.getElementsByClassName('poUpCarContainer');
var popUpCloseBox = document.getElementsByClassName('popUpCloseBox');
var popUpLeft = document.getElementsByClassName('popUpLeft');
var popUpRight = document.getElementsByClassName('popUpRight');
var popUpOverlay = document.getElementsByClassName('popUpOverlay');

for (var i = 0; i < recProjImg.length; i++) {
  recProjImg[i].addEventListener('click',(e)=>{
    poUpCarContainer[0].style.height = '100vh';
    // poUpImg[0].src = 'assets/images/popupCar/0.jpg';
    // console.log(e.target.getAttribute('src'));
  })
}
recProjImg[0].addEventListener('click',(e)=>{
  poUpImg[0].src = 'assets/images/popupCar/0.jpg';
});
recProjImg[1].addEventListener('click',(e)=>{
  poUpImg[0].src = 'assets/images/popupCar/2.jpg';
})
recProjImg[2].addEventListener('click',(e)=>{
  poUpImg[0].src = 'assets/images/popupCar/1.jpg';
})

popUpCloseBox[0].addEventListener('click',()=>{
  poUpCarContainer[0].style.height = '0vh';
});

function popUpFlash() {
  popUpOverlay[0].style.opacity = 1;
  setTimeout(function () {
    popUpChangeimageFun();
    popUpOverlay[0].style.opacity = 0;
  }, 150);
}

var imgInt = 10;
function popUpChangeimageFun() {
  // poUpImg[0].src = recProjImg[imgInt%3].getAttribute('src');
  poUpImg[0].src = 'assets/images/popupCar/' + imgInt%3 + '.jpg';
}

popUpLeft[0].addEventListener('click',()=>{
  imgInt--;
  popUpFlash();
})
popUpRight[0].addEventListener('click',()=>{
  imgInt++;
  popUpFlash();
})

// secInstagram double hover
var secInstagram = document.getElementsByClassName('secInstagram');
function instaFun() {
  if(secInstagram[0].getClientRects()[0].top < window.innerHeight /3){
    secInstagram[0].style.background = 'white'
  }else{
    secInstagram[0].style.background = '#3c4145'
  }
}

// recent projects double hover
var recentProjects = document.getElementsByClassName('recentProjects');
var recentHeading = document.getElementsByClassName('recentHeading');
function recentProjectsFun() {
  if(recentProjects[0].getClientRects()[0].top < window.innerHeight /3){
    recentProjects[0].style.background = '#33343b';
    recentHeading[0].style.top = '0vw'
  }else{
    recentProjects[0].style.background = '#fff';
    recentHeading[0].style.top = '7vw'
  }
}

// headerHone scale
var headerHone  = document.getElementsByClassName('headerHone');
function headerHoneFun() {
  if(headerHone[0].getClientRects()[0].top < window.innerHeight /1.2){
    headerHone[0].style.transform = 'scale(1)';
  }
}

// servicesHeading scale
var servicesHeading  = document.getElementsByClassName('servicesHeading');
var servicesSmallHeading  = document.getElementsByClassName('servicesSmallHeading');

function servicesHeadingFun() {
  if(servicesHeading[0].getClientRects()[0].top < window.innerHeight /1.2){
    servicesHeading[0].style.transform = 'scale(1)';
    servicesSmallHeading[0].style.opacity = '1';
  }
}

// portfolioHeader zoom
var portfolioHeader  = document.getElementsByClassName('portfolioHeader');
var portfolioHeaderSmall  = document.getElementsByClassName('portfolioHeaderSmall');
function portfolioHeaderFun() {
  if(portfolioHeader[0].getClientRects()[0].top < window.innerHeight /1.2){
    portfolioHeader[0].style.transform = 'scale(1)';
    portfolioHeaderSmall[0].style.opacity = '1';
  }
}

// parallax
function paralaxFun() {
  baner[0].style.marginTop = -window.pageYOffset / 2 + 'px';
  // console.log(window.pageYOffset);
}

// arrow arrowToTop
var arrowToTop = document.getElementsByClassName('arrowToTop');
var secTwo = document.getElementsByClassName('secTwo');
function arrowToTopFun() {
  if(secTwo[0].getBoundingClientRect().top - window.innerHeight /1.2 <= 0 ){
    arrowToTop[0].style.opacity = '0.31'
    arrowToTop[0].style.pointerEvents = 'auto'
  }else{
    arrowToTop[0].style.opacity = '0'
    arrowToTop[0].style.pointerEvents = 'none'
  }
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
  instaFun();
  headerHoneFun();
  servicesHeadingFun();
  portfolioHeaderFun();
  arrowToTopFun();
});
