const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What did you do today? ', answer => {
    console.log(`You answered: ${answer}`);
    fs.writeFile('log.txt', answer, err => {
        if (err) throw err;
        console.log('File has been saved');
    });
    rl.close();
});