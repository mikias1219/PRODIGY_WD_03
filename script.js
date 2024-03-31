const gameBoard = document.getElementById('game');
const boardSize = 3;
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function createCell(index) {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    cell.addEventListener('click', () => {
        if (board[index] === '' && !checkForWin()) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkForWin()) {
                alert(`${currentPlayer} wins!`);
            } else if (board.every(cell => cell !== '')) {
                alert('It\'s a draw!');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
    return cell;
}

function checkForWin() {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function renderBoard() {
    gameBoard.innerHTML = '';
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = createCell(i);
        gameBoard.appendChild(cell);
    }
}

renderBoard();
