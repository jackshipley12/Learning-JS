var readline = require('readline');

var randomNum = Math.round(Math.random() * 10);

var terminal = readline.createInterface(
{
  input : process.stdin,
  output : process.stdout
});

terminal.setPrompt('Guess the number! (0-10): ');
terminal.prompt();
terminal.on('line', function(answer)
{
  var answerNum = parseInt(answer);

  if (answerNum > randomNum)
  {
    console.log('Too high!');
  }

  else if (answerNum < randomNum)
  {
    console.log('Too low!');
  }

  else if (answerNum === randomNum)
  {
    console.log('Great job! You got it!');
    process.exit(0);
  }})