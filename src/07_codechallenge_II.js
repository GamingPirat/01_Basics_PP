/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

Bitte ggf. ein Struktogramm erstellen in Struktog

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

const name = prompt("Bitte geben Sie Ihren Namen ein:");

let age;
while (true) {
  age = prompt("Bitte geben Sie Ihr Alter ein:");
  if (!isNaN(age) && age >= 0) {
    age = parseInt(age);
    break;
  } else {
    console.log("Bitte geben Sie nur Zahlen ein!");
  }
}
console.log(`Name: ${name}`);
console.log(`Alter: ${age}`);

let drink;
if (age > 0 && age < 6) {
  drink = "Milch";
} else if (age >= 6 && age <= 12) {
  drink = "Saft";
} else if (age >= 13 && age <= 17) {
  drink = "Cola";
} else {
  drink = "Wein";
}

console.log(`${name} trinkt ${drink}.`);