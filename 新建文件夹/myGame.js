var randomNumber=Math.floor(Math.random()*101);
console.log(randomNumber);
var guessField=document.querySelector('.guessField');
console.log(guessField);
guesses=document.querySelector('.guesses');
console.log(guesses);
var guessSubmit=document.querySelector('.guessSubmit');
var lowOrHi=document.querySelector('.lowOrHi');
var  lastResult=document.querySelector('.lastResult');

 


var guessCountn=1;//获取
var resetButton;
guessField.focus();
 
function checkGuess(){
    // document.write('我是结论')
    var userGuess=Number(guessField.value);
    console.log(typeof userGuess);
    console.log(userGuess)
  //  guesses.innerHTML+= guessField.value+" ";
  guesses.textContent+=userGuess+" ";
  guesses.style.backgroundColor="pink";//样式，背景颜色
}
// checkGuess();

