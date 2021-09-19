const btnRow = document.getElementById('btn-flex-row');
const btnColumn = document.getElementById('btn-flex-column');
const btnContent = document.getElementById('btn-justify');
const selected = document.querySelector('#name-justify');
const image = document.getElementById('code-img');

eventListener();

function eventListener() {
  btnRow.addEventListener('click', activateRow);
  btnColumn.addEventListener('click', activateColumn);
  btnContent.addEventListener('click', activateJustify); 
  selected.addEventListener('change', chooseOption ); 
}

function activateJustify() {
  const justifyElement = document.getElementById('justify-content');
  justifyElement.style.visibility = 'visible'; 
}

function chooseOption(e) {
console.log(e.target.value);
 const element = document.querySelector('#elemento-padre');
 element.classList.value = '';
 element.classList.add(`justify-content-${e.target.value}`); 
 const image = document.getElementById('code-img');
 image.setAttribute('src',`/src/images/${e.target.value}.png`);
 image.style.width = '100%';
}

function activateRow() {
  const element = document.querySelector('#elemento-padre');  
  element.classList.remove('flex-direction-column');
  element.classList.add('flex-direction-row');
  // Revisar que muestre la imagen
  image.style.visibility = 'visible';
  image.setAttribute('src','/src/images/flex-direction-row.png');
  image.style.width = '100%';
}

function activateColumn() {
  const element = document.querySelector('#elemento-padre');
  const image = document.getElementById('code-img');
  element.classList.add('flex-direction-column');
  element.classList.remove('flex-direction-row');  
  image.style.visibility = 'visible';
  image.setAttribute('src','/src/images/flex-direction-column.png');
  image.style.width = '100%';
}
