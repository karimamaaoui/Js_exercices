let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = document.querySelector('.score');

let highscore = 0;

let inputNumber = document.querySelector('.guess');
let divSecretNumber = document.querySelector('.number');

console.log(secretNumber);

function displayMessage(message) {
    document.getElementById('msg').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    if(!inputNumber.value) {
        displayMessage('⛔️ No Number !')
    }
    else {
        if(inputNumber.value == secretNumber) 
            {
                displayMessage('💪 You win !');
                document.body.style.backgroundColor = '#60b347';
                divSecretNumber.style.width = '30rem';
                divSecretNumber.textContent = secretNumber;
                document.querySelector('.check').disabled = true;
                score.textContent--;
                if(Number(score.textContent) > highscore) {
                    highscore = Number(score.textContent);
                    document.querySelector('.highscore').textContent = highscore;
                }
                
            }
            else {
                
                if(Number(score.textContent) > 1) {
                    displayMessage(inputNumber.value > secretNumber ? 'Too High' : ' Too Low');
                    score.textContent--;
                    inputNumber.value = '';
                }
                else {
                    displayMessage(' You lose !');
                    document.querySelector('.check').disabled = true;
                    document.body.style.backgroundColor = 'red';
                    score.textContent--;
                }
    }  
    }
})

document.querySelector('.again').addEventListener('click', () => {
    document.body.style.backgroundColor = '#222';
                divSecretNumber.style.width = '15rem';
                divSecretNumber.textContent = '?';
                score.textContent = 20;
                secretNumber = Math.floor(Math.random() * 20) + 1;
                document.querySelector('.check').disabled = false;
                displayMessage('start guessing...')
                inputNumber.value = '';


})