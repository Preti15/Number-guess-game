'use strict';

// document.querySelector('.guess').value = 23;
// document.querySelector('.score').textContent = 10;
let randomNumber = Math.trunc(Math.random() * 20 ) + 1;
console.log(randomNumber);
let highScore = 0;
let GUESS =  document.querySelector('.guess');
// document.querySelector('.number').value = randomNumber;
const Default_Guess = document.querySelector('.guess').value ;
const Default_Message = "Start guessing...";
const Default_Score = 20;
const SECRET_NUMBER = document.querySelector('.number');
const SCORE = document.querySelector('.score');
const MESSAGE = document.querySelector('.message');
const HIGH_SCORE = document.querySelector('.highscore');


const show= () =>{
    let guessNumber =  Number(GUESS.value);
    let score = SCORE.textContent;
    let message = Default_Message;
    if (!guessNumber){
        MESSAGE.textContent = "No Number Found. Please Enter a number";  
    }else if(guessNumber === randomNumber){
        MESSAGE.textContent = "Yeyy...You Won the game";  
        highScore =  score>highScore ? score: highScore;
        SECRET_NUMBER.textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'; 
    }else if(guessNumber !== randomNumber){
        MESSAGE.textContent = "OOPPss, Wrong Guess..keep guessing"; 
        if(guessNumber<randomNumber){
            MESSAGE.textContent = "Guess higher number"; 
            score--; 
        }else if(guessNumber>randomNumber){
            MESSAGE.textContent = "Guess lower number"; 
            score--;
        } 
       SCORE.textContent = score;
    }
    // MESSAGE.textContent = message;
    HIGH_SCORE.textContent = highScore;
}

const reset = ()=>{
    randomNumber = Math.trunc(Math.random() * 20 ) + 1
    console.log(randomNumber);
    let score = SCORE.textContent;
    let highestScore = HIGH_SCORE.textContent;
    MESSAGE.textContent = Default_Message;
    SCORE.textContent = Default_Score;
    GUESS.value = Default_Guess;
    document.querySelector('body').style.backgroundColor = 'grey';
    SECRET_NUMBER.textContent = "?";
    if( score > highestScore) {
        highestScore = score;
    };
}

reset();

document.querySelector('.check').addEventListener('click', show);
document.querySelector('.again').addEventListener('click', reset);