'use strict';

var userName = prompt('What is your name?');
var first = 'Hey ' + userName + ' Welcome to my page.';
alert(first);


//function for Quswer one
var aboutmeQuswer1 = function() {
  var first = prompt('Am I from China?').toLowerCase();
  if (first === 'no' || first === 'n') {
    alert('You are my friend! ' + userName );
  }
  else if (first === 'yes' || first === 'y') {
    alert(userName + ' You got it wrong ');         
  } else {
    alert(userName + ' Its Invalid input');
  }
 
};
aboutmeQuswer1();

//function for Quswer 2
var aboutmeQuswer2 = function() {
  var first = prompt('I have 3 sons?').toLowerCase();
  if (first === 'no' || first === 'n') {
    alert('You are my friend! ' + userName );
  }
  else if (first === 'yes' || first === 'y') {
    alert(userName + ' You got it wrong ');         
  } else {
    alert(userName + ' Its Invalid input');
  }
 
};
aboutmeQuswer2();

//function for Quswer 3
var aboutmeQuswer3 = function() {
  var first = prompt('I like Seahawks?').toLowerCase();
  if (first === 'yes' || first === 'y') {
    alert('You got it wrong ' + userName );
  }
  else if (first === 'no' || first === 'n') {
    alert(userName + ' You got it got this! ');         
  } else {
    alert(userName + ' Its Invalid input');
  }
 
};
aboutmeQuswer3();


//function for Quswer 4
var aboutmeQuswer4 = function() {
  var first = prompt('Do I speak 5 languages?').toLowerCase();
  if (first === 'yes' || first === 'y') {
    alert('You got it :(' + userName );
  }
  else if (first === 'no' || first === 'n') {
    alert(userName + ' You got it wrong! ');         
  } else {
    alert(userName + ' Its Invalid input');
  }
 
};
aboutmeQuswer4();

//function for Quswer 5
var aboutmeQuswer5 = function() {
  var first = prompt('Have I visit 15 countries?').toLowerCase();
  if (first === 'no' || first === 'n') {
    alert('You got it wrong ' + userName );
  }
  else if (first === 'yes' || first === 'y') {
    alert(userName + ' You got it got this! ');         
  } else {
    alert(userName + ' Its Invalid input');
  }
 
};
aboutmeQuswer5();



// //calling function one
// aboutmeQuswer1();

// // function for the Quswer 2
// var aboutmeQuswer2 = function(){
//   var Quswer2 = prompt('How old is my son?').

// }



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
  alert('Let\s play guessing game');

  var choice = prompt('which state I have visited?');
  console.log('choice:' + choice);

  var attempt = 1;
  loop:
  while(attempt < 6)
  {
    for (var i = 0; i < stateVisited.length; i++){
      if(choice.toLowerCase() === stateVisited[i].toLowerCase){
        alert('Yes! you are rock star! thats is right!');
        break loop;

      }

    }
    choice = prompt('You all most got this, Let\'s try it again');
    attempt++;
    console.log('choice: ' + choice);

  }
};

stateGuess();






