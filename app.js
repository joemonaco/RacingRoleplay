// Code By Webdevtrick ( https://webdevtrick.com )
var addNameBtn = document.querySelector('.addNameBtn');
// var doneAddingBtn = document.querySelector('.doneAddingBtn');
var remove = document.querySelector('.draggable');

var lapCount = document.getElementById('lap-count');
lapCount.addEventListener('click', addLap); 
var laps = 0;
var count = 1;

function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});

function addNewItem() {
  var newItem = document.querySelector('.input').value;
  if (newItem != '') {
    document.querySelector('.input').value = '';
    var li = document.createElement('li');
    var attr = document.createAttribute('draggable');
    var ul = document.getElementById('race-ul');
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    var div = document.createElement("div");
    div.classList.add('standings');
    var text = document.createTextNode(count);
    var paragraph = document.createElement("p");
    var text = document.createTextNode(count);
    paragraph.appendChild(text);
    div.appendChild(paragraph);
    count++;
    div.appendChild(li);
    ul.append(div);


    addEventsDragAndDrop(li);
  }
}

// function removeBtns() {
//     document.getElementById('list-standings').remove();
// }

addNameBtn.addEventListener('click', addNewItem);
// doneAddingBtn.addEventListener('click', removeBtns);

function selectedCheck(event) {
  
  let liEl = document.querySelectorAll('.ul-item-check');
    liEl.forEach((elem) => {
      if(elem.classList.contains('selected')){
        elem.classList.remove('selected');
      }
      
        event.target.classList.add('selected');
      });
}

function selectedAction(event) {
  
  let liEl = document.querySelectorAll('.ul-item-action');
    liEl.forEach((elem) => {
      if(elem.classList.contains('selected')){
        elem.classList.remove('selected');
      }
      
        event.target.classList.add('selected');
      });
}

function addLap(event) {

}


let ulElCheck = document.querySelectorAll('.ul-item-check');
ulElCheck.forEach((el) => {
      el.addEventListener('click', selectedCheck); 
    });

let ulElAction = document.querySelectorAll('.ul-item-action');
ulElAction.forEach((el) => {
      el.addEventListener('click', selectedAction); 
    });