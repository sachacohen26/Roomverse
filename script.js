const furnitureItems = document.querySelectorAll('.furniture');
const room = document.getElementById('room');
const resetButton = document.getElementById('reset');

furnitureItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

room.addEventListener('dragover', dragOver);
room.addEventListener('drop', dropItem);

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.src);
}

function dragOver(e) {
  e.preventDefault();
}

function dropItem(e) {
  e.preventDefault();
  const imageUrl = e.dataTransfer.getData("text/plain");

  const newItem = document.createElement('img');
  newItem.src = imageUrl;
  newItem.classList.add('furniture');
  newItem.style.position = 'absolute';
  newItem.style.left = e.offsetX - 50 + 'px';
  newItem.style.top = e.offsetY - 50 + 'px';
  newItem.draggable = true;

  newItem.addEventListener('dragstart', dragStart);

  room.appendChild(newItem);
  document.querySelector('.placeholder')?.remove();
}

resetButton.addEventListener('click', () => {
  room.innerHTML = '<p class="placeholder">Glisse un meuble ici 🧩</p>';
});
