
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
// test();


// Funtionsrumpf | callee
// Funktionsdeklaration
function test()
{
console.log("Hallo, Marius!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen()

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in Vegas ...
    let firstName = "Hubert"
    console.log("Hallo, " + firstName + "!");

}
// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Arian"); // Argument --> Daten für Parameter
ausgabeNamen2("Maxim");
ausgabeNamen2("Saba");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");
}

