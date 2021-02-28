let turnToggle = true;
let gameOver = false
let moves = 0
let turn, winner = ''



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

    //*If the game isn't over yet
    if (moves >= 5) {

        for (let i = 0; i < winningPath.length; i++) {
            let winningRow = winningPath[i]
            let p = path[winningRow[0]]
            let p2 = path[winningRow[1]]
            let p3 = path[winningRow[2]]

            //*If all p's are equal AND have the same value 'element'
            if ((p === p2 && p2 === p3 && p === p3) && (p && p2 && p3 === element)) {
                winner = p
                gameOver = true
                console.log('Dentro do Loop')
            } else {
                if ((!gameOver) && (winner === '') && (path[i] != ''))
                    winner = 'Empate'
            }
        }
    }
}

