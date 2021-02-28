let turnToggle = true;
let turn, winner


const wrapper = document.querySelector('#wrapper')
const container = document.querySelectorAll('.container')
const squares = document.querySelectorAll('.squares')

const path = [
    '', '', '',
    '', '', '',
    '', '', ''
]

function play(element) {

    if (element.innerText != '') {
        alert('Sua jogada já foi feita!')
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
        gameOver()
    }
}

//* Filtering the index of each played square
function filter() {
    for (let i = 0; i < squares.length; i++) {

        if (squares[i].innerText != '') {
            path[i] = squares[i].innerText
        }
    }
}

//* Winning Path
/*
012, 345, 678
036, 147, 258
058, 256
*/
function gameOver() {

    if ((path[0] === path[1]) && (path[0] === path[2]))
        winner = path[0]

    else if ((path[3] === path[4]) && (path[3] === path[5]))
        winner = path[3]

    else if ((path[6] === path[7]) && (path[6] === path[8]))
        winner = path[6]

    else if ((path[0] === path[3]) && (path[0] === path[6]))
        winner = path[0]

    else if ((path[1] === path[4]) && (path[1] === path[7]))
        winner = path[1]

    else if ((path[2] === path[5]) && (path[2] === path[8]))
        winner = path[2]

    else if ((path[0] === path[5]) && (path[0] === path[8]))
        winner = path[0]

    else if ((path[2] === path[5]) && (path[2] === path[6]))
        winner = path[2]

    else
        winner = 'draw'

    console.log(winner)
}



