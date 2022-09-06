var readlineSync = require("readline-sync");

var chalk = require("chalk");

var score = 0;

function welcome() {
  var userName = readlineSync.question(chalk.blue("What's your name? "));

  console.log("Welcome " + userName + " to how well you know me?");
  console.log("Let's Start");
}

var highScore = [{
  name: "Vinay",
  score: 6
},
{
  name: "Yash",
  score: 5
}                
]



var questions = [{
  question: chalk.yellow("What is my full Name?\n"),
  mcq: ["Vivek Singh","Vivek Shirsath","Vivek Kumar","Vivek Shah"],
  answer: "1"
}, {
  question: chalk.yellow("Who is my favorite Cricketer? \n"),
  mcq: ["Virat Kohli", "Rohit Sharma", "Rishabh Pant", "Kl Rahul"],
  answer: "0"
},
{
  question: chalk.yellow("Where do I Live?\n "),
  mcq: ["Pune", "Mumbai", "Valsad", "Surat"],
  answer: "3"
},
{
  question: chalk.yellow("Which is my favourite sport ?\n "),
  mcq: ["Table Tennis", "Cricket", "Football", "Volleyball"],
  answer: "1"
},
{
  question: chalk.yellow("Who is my favourite actor?\n "),
  mcq: ["Shahrukh", "Salman", "Aayushmann", "Kartikaryan"],
  answer: "0"
},{
  question: chalk.yellow("What is my favourite color?\n "),
  mcq: ["Blue", "Red", "White", "Black"],
  answer: "2"
}            ];


function quiz() {
  for (i = 0; i < questions.length; i++) {
    console.log("Question " + (i + 1))
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.mcq, currentQuestion.answer)
  }
}

function play(question, mcq, answer) {
  var userAnswer = readlineSync.keyInSelect(mcq,question);

  if (userAnswer == answer) {
    console.log(chalk.green("right!"));
    score = score + 1;
    console.log(chalk.whiteBright("Your score is:  " + score))


  } else {
    console.log(chalk.red("wrong!"));
    score = score -1;
    console.log(chalk.whiteBright("Your score is:  " + score))

  }

}
welcome();
quiz();

var totalScore = score;
console.log(chalk.yellow("Your total score is: " + totalScore));
console.log(chalk.cyanBright("Check out high scores..."));
function callScores(name, score){
  console.log(name + ":" + score); 
}


for(var i = 0; i<highScore.length; i++){
  currentScore = highScore[i];
  callScores(currentScore.name, currentScore.score);
  
}
congragulate(currentScore.score);
function congragulate(score){
  if(totalScore > currentScore.score){
  console.log(chalk.cyanBright("Congrats you beat the highscores. Congrats!"));
  }

  else{
    console.log(chalk.cyanBright("Good luck next time!"));
  }
}    



