const board = Array.from(document.querySelectorAll('.case'));
const restart = document.querySelector('span#restart');
const msg = document.querySelector('p#msg');
let symbol = "X";
let ctrMoves = 1;



gameOn();


function gameOn() {
   board.forEach(cell => cell.addEventListener('click', play)
   );
}


function play(event) {
    event.target.innerHTML = symbol;
    event.target.removeEventListener("click", play);
    if (checkGameOver()) {
        board.forEach(cell => cell.removeEventListener('click', play));
    }
    changeSymbol();
}



function changeSymbol() {
    symbol = symbol === 'X' ? 'O' : 'X';
    ctrMoves++;
}


function checkGameOver() {
    if (wins()) {
        msg.innerHTML = `${symbol} wins`;
        return true;
    } else if (ctrMoves === 9) {
        msg.innerHTML = "Draw";
        return true;
    }
    return false;
}


const wins = () => {
    return cellText(0) === cellText(1) && cellText(0) === cellText(2) && cellText(0) !== ""
        || cellText(3) === cellText(4) && cellText(3) === cellText(5) && cellText(3) !== ""
        || cellText(6) === cellText(7) && cellText(6) === cellText(8) && cellText(6) !== ""


        || cellText(0) === cellText(3) && cellText(0) === cellText(6) && cellText(0) !== ""
        || cellText(1) === cellText(4) && cellText(1) === cellText(7) && cellText(1) !== ""
        || cellText(2) === cellText(5) && cellText(2) === cellText(8) && cellText(2) !== ""

        || cellText(0) === cellText(4) && cellText(0) === cellText(8) && cellText(0) !== ""
        || cellText(2) === cellText(4) && cellText(2) === cellText(6) && cellText(2) !== ""
        ;
}

function cellText(index) {
    return board[index].innerText;
}


window.addEventListener('load', () => {
    board.forEach(cell => (cell.innerHTML = ""))
});


restart.addEventListener('click', () => {
    msg.innerHTML = "";
    symbol = "X"
    board.forEach(cell => {
        cell.innerHTML = "";
        gameOn();
        ctrMoves = 1;
    })
});
