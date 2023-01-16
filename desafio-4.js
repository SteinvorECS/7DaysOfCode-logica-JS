var correctNumber = 3
var tries = 0

const sendButton = document.querySelector('[data-button="try"]')
const restartButtons = document.querySelectorAll('[data-button="restart"]')
const divList = document.querySelectorAll('div')
const gameDiv = document.querySelector('[data-content="game"]')
const lossDiv = document.querySelector('[data-content="out-of-tries"]')
const winDiv = document.querySelector('[data-content="correct-guess"]')
const displayGuessesLeft = document.querySelectorAll('[data-message="tries"]')[0]
const displayTries = document.querySelectorAll('[data-message="tries"]')[1]
const displayMissedTry = document.querySelector('[data-message="missed"]')

function hideDiv (div) {
    div.classList.add ('hide')
}

function showDiv (div) {
    div.classList.remove ('hide')
}

function clearInput () {
    document.querySelector('[data-input="guess"]').value = ''
}

function guess () {
    let triedNumber = document.querySelector('[data-input="guess"]').value
    tries++;
    displayGuessesLeft.innerHTML = 3 - tries
    if (triedNumber == correctNumber) {
        displayTries.innerHTML = tries
        hideDiv (gameDiv)
        showDiv (winDiv)
    }
    else {
        if (tries == 3) {
            document.querySelector('[data-message="correct-number"]').innerHTML = correctNumber
            hideDiv (gameDiv)
            showDiv (lossDiv)
        }
        else {
            displayMissedTry.innerHTML = triedNumber+' não é o número em que estou pensando. Tente outra vez!'
            clearInput ()
        }
    }
}

function restart () {
    tries = 0
    displayTries.innerHTML = tries
    clearInput ()
    displayMissedTry.innerHTML = ''
    displayGuessesLeft.innerHTML = 3
    hideDiv (lossDiv)
    hideDiv (winDiv)
    showDiv (gameDiv)

}

sendButton.onclick = guess
restartButtons[0].onclick = restart
restartButtons[1].onclick = restart