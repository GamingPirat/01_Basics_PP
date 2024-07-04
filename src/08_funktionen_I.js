
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
ausgabeNamen()

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in Vegas ...
    let firstName = "Hubert"
    console.log("Hallo, " + firstName + "!");

}

// console.log(firstName); // Fehler : scope!