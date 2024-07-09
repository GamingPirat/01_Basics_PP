

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// output(getSentence(["Ich","bin","Max"],"S"));
// output(getSentence(["Bist","du","Max"],"Q"));
// output(getSentence(["Ich","bin"],"E"));
// output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));





// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const sentences = {
//   'S': ["Ich", "bin", "Max"],
//   'Q': ["Bist", "du", "Max"],
//   'E': ["Ich", "bin"],
//   'L': ["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"]
// };

// function getSentence(words, type) {
//     let sentence = words.join(' ');
    
//     switch(type) {
//         case 'S':
//             return sentence + '.';
//         case 'Q':
//             return sentence + '?';
//         case 'E':
//             return sentence + '!';
//         default:
//             return sentence + '?'; // Default to question for 'L' type
//     }
// }

// function output(sentence) {
//     console.log(sentence);
// }

// function promptUser() {
//     rl.question('Geben Sie den Operator ein (S, Q, E, L oder X zum Beenden): ', (input) => {
//         if (input.toUpperCase() === 'X') {
//             rl.close();
//             return;
//         }

//         const type = input.toUpperCase();
//         if (sentences[type]) {
//             const result = getSentence(sentences[type], type);
//             output(result);
//         } else {
//             console.log('Ungültiger Operator. Bitte versuchen Sie es erneut.');
//         }

//         promptUser();
//     });
// }

// console.log('Willkommen zum Satzgenerator!');
// console.log('S: Aussagesatz, Q: Fragesatz, E: Ausrufesatz, L: Langer Satz');
// promptUser();

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
// function output(outputData) {
//     console.log(outputData);
// }


const readline = require('readline');

const sentences = {
  S: ["Ich", "bin", "Max"], // Sentence (ends with a period)
  Q: ["Bist", "du", "Max"], // Question (ends with a question mark)
  E: ["Ich", "bin"], // Exclamation (ends with an exclamation mark)
  L: ["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"], // Sentence (ends with a period)
  X: [] // Exit (no sentence generated)
};

const punctuation = {
  S: ".",
  Q: "?",
  E: "!",
  L: "."
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Enter an operator (S, Q, E, L, or X to exit): ');

rl.prompt();

rl.on('line', (input) => {
  const operator = input.trim().toUpperCase();

  if (operator === 'X') {
    console.log('Goodbye!');
    process.exit(0); // Exit the program with code 0
  } else if (sentences[operator]) {
    const sentence = sentences[operator].join(' ') + punctuation[operator];
    console.log(sentence);
  } else {
    console.error(`Invalid operator: ${operator}`);
  }

  rl.prompt();
});