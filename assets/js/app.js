// header anim
var baner = document.getElementsByClassName('baner');
function banerFun() {
  baner[0].style.top = '0vh';
  baner[0].style.opacity = '1';
  baner[0].style.transform = 'scale(1)';
}


// window event listeners
// window event listeners
// window event listeners
window.addEventListener('load',()=>{
  banerFun();
});
