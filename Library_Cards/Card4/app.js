const btnReduce = document.querySelector('#btn-reduce');
const btnAdd = document.querySelector('#btn-add');
const lblPx = document.querySelector('.lbl-px');
const colorCard = document.querySelector('#color-card');
const card = document.querySelector('.card');
const headerCard = document.querySelector('.header-card');
const btnChangeColor = document.getElementById('change-color');
const myCV = document.querySelector('#my-cv');
const folder = document.querySelector('.fa-folder-open');


events();
function events() {
  btnAdd.addEventListener('click', addPixels);
  btnReduce.addEventListener('click', reducePixels);  
  btnChangeColor.addEventListener('click',changeColor);
}

function addPixels() {
  let newPixels = lblPx.textContent;
  newPixels++;
  lblPx.textContent = newPixels;  
  card.style.borderRadius = newPixels+'px';
  headerCard.style.borderTopRightRadius = newPixels+'px';           
  headerCard.style.borderTopLeftRadius = newPixels+'px';           
}

function reducePixels() {
  let newPixels = lblPx.textContent;
  newPixels--;
  lblPx.textContent = newPixels;  
  card.style.borderRadius = newPixels+'px';
  headerCard.style.borderTopRightRadius = newPixels+'px';           
  headerCard.style.borderTopLeftRadius = newPixels+'px';             
}

function changeColor() {
  headerCard.style.background = colorCard.value;
  myCV.style.background = colorCard.value;
  folder.style.color = colorCard.value;
}



