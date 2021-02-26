let img
let toggle = true

function players() {

    if (toggle) {
        img = '/img/x.png'

        toggle = false
    } else {
        img = '/img/o.png'

        toggle = true
    }
}

function jogada(element) {
    players()
    element.style.backgroundImage = `url(${img})`

}