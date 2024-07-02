
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});


// Prompt for the first number
// let num1 = parseInt(prompt("Enter the first number: "));

// // Prompt for the second number
// let num2 = parseInt(prompt("Enter the second number: "));

// // Calculate the sum
// let sum = num1 + num2;

// // Print the sum to the console
// console.log(`Die Summe der Zahlen ist: ${sum}`);




// // Fordern Sie den Benutzer auf, die erste Zahl einzugeben
// let zahl1 = prompt("Geben Sie die erste Zahl ein:");

// // Fordern Sie den Benutzer auf, die zweite Zahl einzugeben
// let zahl2 = prompt("Geben Sie die zweite Zahl ein:");

// // Konvertieren Sie die eingegebenen Werte in Zahlen
// zahl1 = parseFloat(zahl1);
// zahl2 = parseFloat(zahl2);

// // Berechnen Sie die Summe der beiden Zahlen
// let summe = zahl1 + zahl2;

// // Geben Sie die Summe in die Konsole aus
// console.log("Die Summe der Zahlen ist: " + summe);





let numbers = /^[0-9]+$/;
let maxTrys = 5;
let count = 0;

let firstNumber;
do
{
    count++;
    firstNumber = prompt("Bitte eine Zahl eingeben: ");
} 
while (!firstNumber.match(numbers) && count < maxTrys);

if (count >= maxTrys){
    firstNumber = Math.random();
    console.log("Es wurde keine Zahl eingeben. Eine Zufallszahl wird stattdessen verwendet: " + firstNumber );
}

let secondNumber;
count = 0;
do
{
    count++;
    secondNumber = prompt("Bitte eine weitere Zahl eingeben: ");
} 
while (!secondNumber.match(numbers) && count < maxTrys);

if (count >= maxTrys){
    secondNumber = Math.random();
    console.log("Es wurde keine weitere Zahl eingeben. Eine Zufallszahl wird stattdessen verwendet: " + secondNumber );
}

let sumNumbers = Number (firstNumber) + Number (secondNumber);

console.log("Die Summe der Zahlen ist: " + sumNumbers );