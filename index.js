var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("Enter your Name: ");
console.log("Welcome! " + userName + " to Game Of Thrones Quiz");

function next(question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("you are Right!");
    score = score + 1;
    console.log("score=" + score);
  } else {
    console.log("Sorry! You are Wrong!");
    console.log("score=" + score);
  }
  console.log("____________________________");
}
var question = [
  {
    question: "What is the full form of GOT? =>",
    answer: "game of thrones",
  },
  {
    question: "2)Who plays the role of Queen of Driagon? =>",
    answer: "emilia clarke",
  },
  {
    question: "Relation between Cersei Lanister and Jaime Lanister =>",
    answer: "brother and sister",
  },
  {
    question: "Who is a siter of Joffrey Baratheon? =>",
    answer: "myrcella baratheon",
  },
  {
    question: "Who is a  illegitimate son of LordEddard 'Ned' Stark? =>",
    answer: "Jon Snow ",
  },
];

for (var i = 0; i < question.length; i++) {
  currentQuestion = question[i];
  next(currentQuestion.question, currentQuestion.answer);
}
console.log("Your final score is=", score);
