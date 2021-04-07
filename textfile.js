const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('What do you want me to save in a text file?', text => {
    fs.writeFile('userInput.txt', text, (err) => {
        if (err) throw err;
    
        console.log('Input saved!');
    });
    readline.close();
  });


