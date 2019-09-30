var carContainerTwo = document.getElementsByClassName('carContainerTwo');
var headingTextInsideTwo = document.getElementsByClassName('headingTextInsideTwo');
var textBoxFixedTwo = document.getElementsByClassName('textBoxFixedTwo');
var rightArrowTwo = document.getElementsByClassName('rightArrowTwo');
var leftArrowTwo = document.getElementsByClassName('leftArrowTwo');
var sectionCarTwo = document.getElementsByClassName('sectionCarTwo');

// element jsx
var picNum  = 1;
var elem;
function setElemTwo() {
elem = `
  <div class="rightCarBox">
    <img src="assets/images/slider/${picNum % 6}.jpg" alt="">
  </div>
  <div class="headingText">
    <div class="headingTextInsideTwo">
      <h2>LATEST BLOG</h2>
    </div>
  </div>
  <div class="leftTextBox">
    <div class="arrows">
      <img onclick="leftTestTwo()" class="leftArrowTwo" src="assets/images/leftArrow.jpg" alt="">
      <img onclick="rightTestTwo()" class="rightArrowTwo" src="assets/images/rightArrow.jpg" alt="">
    </div>
    <div class="button buttonCar">
      <p>Travel</p>
    </div>
    <p class="carDate">11/22/2018</p>
    <div class="textBoxFixedTwo">
      <div class="textBox">
        <h2>A SUNNY DAY AT THE LOCAL <br> LAKE IN SAN MARINO </h2>
        <p class="carLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com</p>
        <p class="pinkCyrus">By Cyrus Khamak</p>
      </div>
    </div>
  </div>
`
}
// element jsx

function carContainerTwoShrinkTwo() {
  carContainerTwo[1].style.width = '0%';
}

function initWidthTwo() {
  headingTextInsideTwo[1].style.width = '47vw';
  textBoxFixedTwo[1].style.width = '100%';
}

function setWidthTwo() {
  headingTextInsideTwo[0].style.width = '47vw';
  textBoxFixedTwo[0].style.width = '100%';
}

initWidthTwo();


var checkArrowTwo = 0;
function leftTestTwo() {
  if (checkArrowTwo === 0){
    picNum--;
    setDivsTwo();
    carContainerTwoShrinkTwo();
    setTimeout(function () {
      initWidthTwo();
      setWidthTwo()
      checkArrowTwo = 0;
    }, 1500);
  }
  checkArrowTwo = 1;
}

function rightTestTwo() {
  if (checkArrowTwo === 0){
    picNum++;
    setDivsTwo();
    carContainerTwoShrinkTwo();
    setTimeout(function () {
      initWidthTwo();
      setWidthTwo()
      checkArrowTwo = 0;
    }, 1500);
  }
  checkArrowTwo = 1;
}


function setDivsTwo() {
  setElemTwo();
  var newDiv = document.createElement('div');
  newDiv.className = 'carContainerTwo';
  newDiv.innerHTML = elem;
  sectionCarTwo[0].removeChild(sectionCarTwo[0].children[1]);
  sectionCarTwo[0].insertAdjacentElement('afterbegin',newDiv);

}



// listeners
rightArrowTwo[0].addEventListener('click',()=>{
  if (checkArrowTwo === 0) {
    rightTestTwo();
  }

});

rightArrowTwo[1].addEventListener('click',()=>{
  if (checkArrowTwo === 0) {
    rightTestTwo();
  }
})

leftArrowTwo[0].addEventListener('click',()=>{
  console.log(123);
  if (checkArrowTwo === 0) {
    leftTestTwo();
  }

});

leftArrowTwo[1].addEventListener('click',()=>{
  console.log(123);
  if (checkArrowTwo === 0) {
    leftTestTwo();
  }
});

rightTestTwo();
setInterval(function () {
  if (checkArrowTwo === 0) {
    rightTestTwo();
  }
}, 6000);
