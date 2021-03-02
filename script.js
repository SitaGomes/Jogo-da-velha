let turnToggle = true
let gameOver = false

let moves = 0

let turn = ''
let winner = ''

localStorage.setItem('valor_x', '0')
localStorage.setItem('valor_o', '0')

const jogadorX = document.querySelector('#playerX')
const jogadorO = document.querySelector('#playerO')

const pWinner = document.querySelector('#winner')
const wrapper = document.querySelector('#wrapper')
const container = document.querySelectorAll('.container')
const squares = document.querySelectorAll('.squares')

const path = [
    '', '', '',
    '', '', '',
    '', '', ''
]
const winningPath = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function play(element) {

    if ((element.innerText != '') || (gameOver)) {
        alert('Jogada inválida')
    } else {

        //* Checking turns
        switch (turnToggle) {

            case true:
                turn = 'X'
                element.innerText = turn
                turnToggle = false;
                break;

            case false:
                turn = 'O'
                element.innerText = turn;
                turnToggle = true;
                break

            default:
                alert('Error! Sua jogada não foi feita')
                break
        }
        filter()
        moves += 1

        gameCheck('O')
        gameCheck('X')

        leaderBoard(winner)
    }

    pWinner.innerText = `O vencedor é o jogador: ${winner}`
}

//* Filtering the index of each played square
function filter() {
    for (let i = 0; i < squares.length; i++) {

        if (squares[i].innerText != '') {
            path[i] = squares[i].innerText
        }
    }
}


function gameCheck(element) {

    //*If it's the 5th turn
    if (moves >= 5) {

        /*
            WinningRow has the index for the victory scenarios;
            p, p2 and p3 compare the victory scenarios indexes, 
                with the actual placed 'X' and 'O'.
        */
        for (let i = 0; i < winningPath.length; i++) {
            let winningRow = winningPath[i]
            let p = path[winningRow[0]]
            let p2 = path[winningRow[1]]
            let p3 = path[winningRow[2]]

            //*If all p's are equal AND have the same value 'element'
            if ((p === p2 && p2 === p3 && p === p3) && (p && p2 && p3 === element)) {
                winner = p
                gameOver = true

            } else {
                if ((!gameOver) && (winner === '') && (path[i] != ''))
                    winner = 'Empate'
            }
        }
    }
}

function leaderBoard(element) {

    //* Only if the game is over
    if (gameOver) {

        switch (element) {
            //* Add +1 every time somebody wins

            case 'X':
                localStorage.valor_x = Number(localStorage.valor_x) + 1
                break

            case 'O':
                localStorage.valor_o = Number(localStorage.valor_o) + 1
                break

            default:
                break
        }
    }

    jogadorX.innerHTML = localStorage.valor_x
    jogadorO.innerHTML = localStorage.valor_o
}


function resetPlay() {

    //* Take all the 'x' and 'o's
    for (let i = 0; i < path.length; i++) {
        path[i] = ''

        squares[i].innerText = ''

    }

    //! The game is resetting
    gameOver = false
    winner = ''

}

function resetLeaderBoard() {



}