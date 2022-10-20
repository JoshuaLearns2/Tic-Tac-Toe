const X_MARKER = 'X-marker';
const O_MARKER = 'O-marker';

let yourTurn;

const place = document.querySelectorAll('[data-board]')

place.forEach(board => {
  board.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
  const board = e.target;

  const currentTurn = yourTurn ? X_MARKER : O_MARKER;

  const X = document.createElement('div');
  const O = document.createElement('div');

  const X_turn = place.appendChild(X);
  const O_turn = place.appendChild(0);

  X.classList.add('X-marker');
  O.classList.add('O-marker');

  X.textContent = 'X';
  O.textContent = 'O';

}

function placeMarker(board, currentTurn)


