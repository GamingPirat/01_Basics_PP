

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

// function getSentence(arr,op) {
//     const GAP = " "
//     const PUNCT = "."
//     const ERROR_1 = "Etwas ist schief gelaufen!"
//     const prompt = require('prompt-sync')({sigint: true});
// startapp ()
// function startapp() {
//     output(getSentence)
// }
//     switch (getSentence) {
//     case (op)
//         return arr.join(GAP) + PUNCT;
//     case "Q1": 
//         return arr.join(GAP) + PUNCT;
//     case "E":
//         return arr.join(GAP) + PUNCT;
//     case "Q2":
//         return arr.join(GAP) + PUNCT;

//     default: // Wichtig!
//         return ERROR_1;
// }

// }
// 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sentences = {
  'S': ["Ich", "bin", "Max"],
  'Q': ["Bist", "du", "Max"],
  'E': ["Ich", "bin"],
  'L': ["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"]
};

function getSentence(words, type) {
    let sentence = words.join(' ');
    
    switch(type) {
        case 'S':
            return sentence + '.';
        case 'Q':
            return sentence + '?';
        case 'E':
            return sentence + '!';
        default:
            return sentence + '?'; // Default to question for 'L' type
    }
}

function output(sentence) {
    console.log(sentence);
}

function promptUser() {
    rl.question('Geben Sie den Operator ein (S, Q, E, L oder X zum Beenden): ', (input) => {
        if (input.toUpperCase() === 'X') {
            rl.close();
            return;
        }

        const type = input.toUpperCase();
        if (sentences[type]) {
            const result = getSentence(sentences[type], type);
            output(result);
        } else {
            console.log('Ungültiger Operator. Bitte versuchen Sie es erneut.');
        }

        promptUser();
    });
}

console.log('Willkommen zum Satzgenerator!');
console.log('S: Aussagesatz, Q: Fragesatz, E: Ausrufesatz, L: Langer Satz');
promptUser();

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
// function output(outputData) {
//     console.log(outputData);
// }