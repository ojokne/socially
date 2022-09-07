const number = document.querySelector('#number')
const alertContainer = document.querySelector('.alert-container')
const alertClose = document.querySelector('#alert-close')

alertClose.addEventListener('click', () => {
    alertContainer.style.display = 'none'
})


const profileDiv = document.querySelector('.profiles')

for (let i = 1; i <= localStorage.length; i++) {

    const statementSpan = document.createElement('span')
    const primarySpan = document.createElement('span')
    const secondarySpan = document.createElement('span')
    const universitySpan = document.createElement('span')
    const hobbiesSpan = document.createElement('span')

    statementSpan.textContent = 'Personal Statement'
    primarySpan.textContent = 'Primary SChool'
    secondarySpan.textContent = 'Secondary School'
    universitySpan.textContent = 'University'
    hobbiesSpan.textContent = 'Hobbies'

    const profile = JSON.parse(localStorage[i])
    const statement = profile.statement
    const primary = profile.primary
    const secondary = profile.secondary
    const university = profile.university
    const hobbies = profile.hobbies

    const divStatement = document.createElement('div')
    const divPrimary = document.createElement('div')
    const divSecondary = document.createElement('div')
    const divUniversity = document.createElement('div')
    const divHobbies = document.createElement('div')

    const spanStatement = document.createElement('span')
    const spanPrimary = document.createElement('span')
    const spanSecondary = document.createElement('span')
    const spanUniversity = document.createElement('span')
    const spanHobbies = document.createElement('span')

    spanStatement.textContent = (statement)
    spanPrimary.textContent = (primary)
    spanSecondary.textContent = (secondary)
    spanUniversity.textContent = (university)
    spanHobbies.textContent = (hobbies)

    const deleteBtn = document.createElement('button')
    const deleteBtnText = document.createTextNode('Delete')
    deleteBtn.appendChild(deleteBtnText)
    deleteBtn.setAttribute('id', profile.id)
    deleteBtn.addEventListener('click', (e) => {
        deleteProfile(e)
        displayNumber()
    })

    const updateBtn = document.createElement('button')
    const updateBtnText = document.createTextNode('Update')
    updateBtn.appendChild(updateBtnText)

    const divButton = document.createElement('div')

    divStatement.appendChild(statementSpan)
    divStatement.appendChild(spanStatement)

    divPrimary.appendChild(primarySpan)
    divPrimary.appendChild(spanPrimary)

    divSecondary.appendChild(secondarySpan)
    divSecondary.appendChild(spanSecondary)

    divUniversity.appendChild(universitySpan)
    divUniversity.appendChild(spanUniversity)

    divHobbies.appendChild(hobbiesSpan)
    divHobbies.appendChild(spanHobbies)
    divButton.appendChild(deleteBtn)
    divButton.appendChild(updateBtn)

    divStatement.classList.add('profile-group')
    divPrimary.classList.add('profile-group')
    divSecondary.classList.add('profile-group')
    divUniversity.classList.add('profile-group')
    divHobbies.classList.add('profile-group')
    divButton.classList.add('button-group')

    const profileContainer = document.createElement('div')
    profileContainer.appendChild(divStatement)
    profileContainer.appendChild(divPrimary)
    profileContainer.appendChild(divSecondary)
    profileContainer.appendChild(divUniversity)
    profileContainer.appendChild(divHobbies)
    profileContainer.appendChild(divButton)

    profileContainer.classList.add('profile-container')
    profileContainer.setAttribute('id', `div${profile.id}`)

    profileDiv.appendChild(profileContainer)
}


window.addEventListener('load', () => {
    displayNumber()
    if (localStorage.length == 0) {
        alertContainer.style.display = 'block'
    }
})


function displayNumber() {
    if (localStorage.length != 0) {
        number.textContent = localStorage.length
        number.className = 'badge'
    }
}

function deleteProfile(e) {
    console.log('clicked');
    const profile = document.querySelector(`#div${e.target.id}`)
    profileDiv.removeChild(profile)
    localStorage.removeItem(`${e.target.id}`)
}