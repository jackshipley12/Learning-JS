const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('What is the temperature in farenheit?', temp => {
    console.log('That is ' + ((temp - 32) * 0.5556) + ' degrees in Celcius!');
    readline.close();
  });