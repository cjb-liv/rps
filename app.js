const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const result2Display = document.getElementById('result2')

const possibleChoices = document.querySelectorAll('button') /*this selects all buttons on the form*/
let userChoice
let computerChoice
let result
let result2

let winCondition

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
	getResult()
	getResult2()
}
)
)

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 
	console.log(randomNumber)

	if (randomNumber === 1) {
		computerChoice = 'rock'
	}
	if (randomNumber === 2) {
		computerChoice = 'scissors'
	}
	if (randomNumber === 3) {
		computerChoice = 'paper'
	}
	computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
	if (computerChoice === userChoice){
		result = "Its a draw!"
	}
	if (computerChoice == 'rock' && userChoice == 'paper') {
		result = 'You Win!'
	}
	if (computerChoice == 'scissors' && userChoice == 'paper') {
		result = 'Computer Wins!'
	}
	if (computerChoice == 'rock' && userChoice == 'scissors') {
		result = 'Computer Wins!'
	}
	if (computerChoice == 'paper' && userChoice == 'scissors') {
		result = 'You Win!'
	}
	if (computerChoice == 'scissors' && userChoice == 'rock') {
		result = 'You Win!'
	}
	if (computerChoice == 'paper' && userChoice == 'rock') {
		result = 'Computer Wins!'
	}
	resultDisplay.innerHTML = result
}

function getResult2() {
	if (computerChoice === userChoice){
		result = "Its a draw!"}
		else {
			winCondition = {
				"paper":"rock",
				"rock" :"scissors",
				"scissors":"paper"
			}
			if(userChoice == winCondition[computerChoice]){
				result2 = "Computer Wins!"
			}
			else{
				result2 = "You Win!"
			}
	}
	result2Display.innerHTML = result
}