const button = document.querySelector('.myBar')
let mobileDiv = document.querySelector('.mobileDiv')
const cancelButton = document.querySelector('.myCancel')
button.addEventListener('click', () => {
    mobileDiv.style.display = 'block'
})

cancelButton.addEventListener('click', () => {
    mobileDiv.style.display = 'none'
})