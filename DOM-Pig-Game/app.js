



var scores , roundScore , activePlayer ,amePlaying;
init();


document.querySelector('.btn--roll').addEventListener('click', function() {
  if(gamePlaying){
  // 1. random number
  var dice = Math.floor(Math.random() * 6) + 1;
 
  //2. display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  //3. update the round score if the rolled number was not a 1
  if (dice !== 1){
  // add score
  roundScore += dice;
  document.querySelector('#current--' + activePlayer).textContent = roundScore;
  }else{
    //next player
   nextPlayer();
  }
  }

});


document.querySelector('.btn--hold').addEventListener('click', function(){
 if(gamePlaying){
   // add current score to globle score
   scores[activePlayer] += roundScore;

   //update the ui
   document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
 
   // chack if player won the game
   if (scores[activePlayer] >= 20){
     document.querySelector('#name--' + activePlayer).textContent = 'winner!';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.player--' + activePlayer).classList.add('winner');
     document.querySelector('.player--' + activePlayer).classList.remove('sctive');
     gamePlaying = false;
 }else{
  //next player
  nextPlayer();
   }
 }
  
});


function nextPlayer(){
   //next player
   activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
   roundScore = 0;
   document.getElementById('current--0').textContent = '0';
   document.getElementById('current--1').textContent = '0';
   
   document.querySelector('.player--0').classList.toggle('active');
   document.querySelector('.player--1').classList.toggle('active');

  // document.querySelector('.player--0').classList.remove('active');
   //document.querySelector('.player--1').classList.add('active');
 
  document.querySelector('.dice').style.display= 'none';
}
  document.querySelector('.btn--new').addEventListener('click', init);

function init(){
  scores =[0,0];
  activePlayer =0;
  roundScore =0;
  gamePlaying = true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'player 1';
document.getElementById('name--1').textContent = 'player 2';
document.querySelector('.player--0').classList.remove('winner');
document.querySelector('.player--1').classList.remove('winner');
document.querySelector('.player--0').classList.remove('active');
document.querySelector('.player--1').classList.remove('active');
document.querySelector('.player--0').classList.add('active');
}


























