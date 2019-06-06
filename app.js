'use strict';


//function one
var aboutme = function() {
  var first = prompt('Am I from China?').toLowerCase();
  if (first === 'no' || first === 'n') {
    alert('You got it wrong');
  }
  else if (first === 'yes' || first === 'y') {
    alert('You are my friend!');         
  } else {
    alert('Invalid input');
  }
 
};

//calling function one
aboutme();




var numGuess = function() {
//Generate random number from 1-100
  var randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log(randomNumber);
  var sixthResponse = parseInt(prompt('Guess the number I am thinking in between 1-100'));

  console.log(sixthResponse);
  console.log(typeof(sixthResponse));

  for (var i = 0; i < 4; i++) {
    if (sixthResponse === randomNumber) {
      console.log('correct guess');
      alert('correct!!');
      break;

    }
    else if (sixthResponse > randomNumber) {
      sixthResponse = parseInt(prompt('Too high. Guess again!'));
      console.log('Too High!');
    }
    else {
      sixthResponse = parseInt(prompt('Too low. Guess again!'));
      console.log('Too low!');
    }
  }
};

numGuess();




// }
// // 7 Qustion
// // Crearing Arrey called 'statevisted' which has list of states

var stateGuess = function() {
  var stateVisited = new Array( 'new york', 'texas', 'new jersey', 'ohio', 'utah','maine', 'michigan');
  console.log('stateVisited:' + stateVisited);
  prompt('Let\s play guessing game');

  var choice = prompt('which state I have visited?');
  console.log('choice:' + choice);

  var attempt = 1;
  loop:
  while(attempt < 6)
  {
    for (var i = 0; i < stateVisited.length; i++){
      if(choice === stateVisited[i]){
        alert('Yes! you are rock star! thats is right!');
        break loop;

      }

    }
    choice = prompt('You all most got this, Let\s try it again');
    attempt++;
    console.log('choice: ' + choice);

  }
};

stateGuess();






