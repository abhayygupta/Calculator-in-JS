// accessing input and buttons using DOM

let input = document.getElementById('input')
let buttons = document.querySelectorAll('button')

//empty string to store the input.

let string = ''

//using forEach loop to traverse button by button and adding eventlistener to know what user clicks on screen and putting handleInput() to act accordingly.

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML)
    })
})


// adding keyword event lsitener for tracking what user types on keyboard.

document.addEventListener('keydown', (e) => {
    const key = e.key


    //if-else statements that gives handleInput() function arguments to work on.


    if (!isNaN(key) || ['*', '+', '-', '/', '.'].includes(key)) {
        handleInput(key)
    }
    else if (key === 'Enter') {
        handleInput('=')
    }
    else if (key === 'backspace') {
        handleInput('DEL')
    }
    else if (key.toLowerCase() === 'c') {
        handleInput('AC')
    }
})

//The main function that helps performing operations on keyboard and mouse-click with simple switch statement.

function handleInput(value) {
    switch (value) {
        case '=':
            try {
                string = eval(string)
                input.value = string
            }
            catch {
                input.value = 'Error'
            }
            break
        case 'DEL':
            string = string.slice(0, string.length - 1)
            input.value = string
            break

        case 'AC':
            string = ''
            input.value = string
            break


        default:
            string = string + value
            input.value = string


    }
    adjustFontSize()
}

//This function shrinks the font-size if the text input is larger than the box and we dont have to scroll horizontally.


function adjustFontSize() {
    let maxFontSize = 70
    let minFontSize = 40
    input.style.fontSize = maxFontSize + 'px'
    while (input.scrollWidth > input.clientWidth && maxFontSize > minFontSize) {
        maxFontSize--
        input.style.fontSize = maxFontSize + 'px'
    }
}

let toggle = document.getElementById('toggle-theme')
let body = document.body
const main = document.getElementById('calculator')
toggle.addEventListener('click', e=>{
    changeTheme(e)
})

function changeTheme(){
    main.style.background = '#000000'
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    body.style.background = `rgb(${r}, ${g}, ${b})`

}

