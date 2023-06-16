function moveToRight(item) {
  var rightSide = document.getElementById('right-side');
  var itemButton = document.createElement('button');
  itemButton.innerText = item;
  rightSide.appendChild(itemButton);
}