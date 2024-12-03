const firstButton = document.querySelector('.btn1')
const secondButton = document.querySelector('.btn2')
const redButton = document.querySelector('.redBtn')
const blueButton = document.querySelector('.blueBtn')
const containerDiv = document.querySelector('.container')


firstButton.addEventListener('click', () => {
    containerDiv.style.backgroundColor = 'blue';

})
blueButton.addEventListener('click', () => {
    firstButton.style.backgroundColor = 'gray';
    firstButton.style.color = 'black';
    secondButton.style.backgroundColor = 'red';
    secondButton.style.color = 'white';
    

})
secondButton.addEventListener('click', () => {
    containerDiv.style.backgroundColor = 'red';
})
redButton.addEventListener('click', () => {
    secondButton.style.backgroundColor = 'gray';
    secondButton.style.color = 'black';
    firstButton.style.backgroundColor = 'green';
    firstButton.style.color = 'white';
    

})