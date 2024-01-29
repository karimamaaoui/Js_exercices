let dice=document.querySelector(".dice");
let playerOne=document.querySelector(".player--0");
let playerTwo=document.querySelector(".player--1");
let scoreOne=document.getElementById("score--0");
let scoreTwo=document.getElementById("score--1");
let currentScoreOne=document.querySelector("#current--0");
let currentScoreTwo=document.querySelector("#current--1");
let newGameBtn=document.querySelector(".btn--new");
let holdBtn=document.querySelector(".btn--hold");
let rollBtn=document.querySelector(".btn--roll");
let bnsArr=document.querySelectorAll(".btn");


let scores=[0,0];
let activePlayer=0;
let playing=true;
let currentScore=0;

function resetGame(){
    scores=[0,0];
    activePlayer=0;
    playing=true;
    currentScore=0;

    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
    playerOne.classList.remove('player--winner');
    playerTwo.classList.remove('player--winner');
    scoreOne.textContent=0;
    scoreTwo.textContent=0;
    currentScoreOne.textContent=0;
    currentScoreTwo.textContent=0;
    
}

resetGame();

function switchPlayer(){
    //ken aadnou l classe ynahihalou ken maandouch yzidhalou
    playerOne.classList.toggle("player--active");
    playerTwo.classList.toggle("player--active");
    currentScore=0;
    document.querySelector(`#current--${activePlayer}`).textContent=currentScore;

    activePlayer=activePlayer===0 ? 1 : 0;
}


//rolls dice
rollBtn.addEventListener('click', () => {
    if(playing){
    let diceNum=Math.ceil(Math.random()*6);
    //display dice
    dice.classList.remove("hidden");
    dice.src=`images/dice-${diceNum}.png`;
    
    console.log('dice num', diceNum);

    if(diceNum!=1){
        currentScore+=diceNum;
        document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
    }
    else{
        switchPlayer();
    } }
});


//holds score

holdBtn.addEventListener('click',()=>{
   if(playing){
    scores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];
    if(scores[activePlayer]>=20)
    {
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner"); 
        playing=false;
    }

else{
        switchPlayer();
    }
}
})

//game reset
newGameBtn.addEventListener('click',resetGame)