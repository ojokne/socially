const statement = document.querySelector('#statement')
const primary = document.querySelector('#primary')
const secondary = document.querySelector('#secondary')
const university = document.querySelector('#university')
const hobbies = document.querySelector('#hobbies')
const add = document.querySelector('#add')
const number = document.querySelector('#number')

const alertContainer = document.querySelector('.alert-container')
const alertClose = document.querySelector('#alert-close')

add.addEventListener('click', () => {
    obj = {
        id: (localStorage.length + 1),
        statement: statement.value,
        primary: primary.value,
        secondary: secondary.value,
        university: university.value,
        hobbies: hobbies.value,
    }
    try {

        localStorage.setItem(localStorage.length + 1, JSON.stringify(obj))
        statement.value = ''
        primary.value = ''
        secondary.value = ''
        university.value = ''
        hobbies.value = ''
        alertContainer.style.display = 'block'
        displayNumber()
    }
    catch (err) {
        console.log('Could not be added');
    }
})

alertClose.addEventListener('click', () => {
    alertContainer.style.display = 'none'
})

window.addEventListener('load', () => {
    displayNumber()
})

function displayNumber() {
    if (localStorage.length > 0) {
        number.textContent = localStorage.length
        number.className = 'badge'
    }
}