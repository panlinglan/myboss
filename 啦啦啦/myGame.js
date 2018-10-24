var randomNumber=Math.floor(Math.random()*101);
console.log(randomNumber);
var guessField=document.querySelector('.guessField');
console.log(guessField);
guesses=document.querySelector('.guesses');
console.log(guesses);
var guessSubmit=document.querySelector('.guessSubmit');
var lowOrHi=document.querySelector('.lowOrHi');
var  lastResult=document.querySelector('.lastResult');

 


var guessCount=1;//设置猜测次数为1
var resetButton;//设置重置按钮变量
guessField.focus();//焦点

function checkGuess(){
    // document.write('我是结论')
    var userGuess=Number(guessField.value);//获取用户输入的数据，病将其转换为数字
    console.log(typeof userGuess);
    console.log(userGuess)
  //  guesses.innerHTML+= guessField.value+" ";

  guesses.style.backgroundColor="pink";//样式，背景颜色

//如果猜测的字数为1，则加提示“上次猜的数”
  if(guessCount ===1){
  guesses.textContent='上次猜的数：';
  }

  guesses.textContent+=userGuess+" ";

if(userGuess===randomNumber){
  lastResult.textContent='恭喜你猜对了';
  lastResult.style.backgroundColor='green';
  lowOrHi.textContent=' ';
 //调用游戏结束函数
  setGameOver();
}

//如果十次都没有猜对
//


else if(guessCount===10){edc 
  lastResult.textContent='猜过十次，游戏结束！';
  lowOrHi.textContent=' ';
  setGameOver();
}
else{
  lastResult.textContent='你猜错了！';
  lastResult.style.backgroundColor='red';
  //背景颜色

if(userGuess<randomNumber){
  lowOrHi.textContent='你猜低了！';
}
else  if(userGuess>randomNumber){
    lowOrHi.textContent='你猜高了！';

  }
}

//猜数自增
guessCount++;
//清空文字区
guessField.value=' ';
//文字输入区获取焦点
guessField.focus();
}
//确定按钮设置单击事件
guessSubmit.addEventListener('click',checkGuess);


//阻止玩家继续猜测
//显示控件允许玩家重新开始游戏
function setGameOver(){
var resetButtonP=document.querySelector("div.resultParas p:last-child");
console.log(resetButtonP);
  resetButtonP.style.display="block";
}
//重置游戏
function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';

  }