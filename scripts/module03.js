// Einzeiliger Kommentar
/* 
    Mehrzeiliger
    Kommentar
*/

// Variablen deklarieren:

let variable1; // Moderne, bestPractice Version
var variable2; // Wollen wir wenn möglich vermeiden,da es Probleme mit dem Gültigkeitsbereich geben kann
const VARIABLE3 = 30;

// Bennenung von Variablen:
// Sollte anhand des Namens klar ersichtlich sein, wofür sie benötigt wird und was sie enthält
// Nicht typisiert, d.h. wir müssen nicht festlegen was für ein Datentyp die Varaible ist
// Typ der Variable kann sich ändern


// Primitives
// Daten, die keine Objekte sind und somit keine Methoden hätten

// string - Textinhalte
let fullName = "Marius Sommer";

// number - Zahlen, egal ob ganzzahlig oder Gleitkomma
let integer = 5;
let float = 5.5;

// boolean - true oder false
let visible = true;
let lie = false;

// null - Bewusst nicht gesetzter Wert
let ceo = null;

// undefined - nicht initalisierter Wert
// Variablen, die keinen Wert zugewiesen bekommen sind undefined

// Typ einer Variable herausfinden:
typeof(ceo);

// Etwas in der Konsole ausgeben:
console.log("Ich werde in der Konsole ausgegeben!");
console.log(typeof(variable1));

// Können in einer Zeile mehrere Variablen deklarieren:

let x = 4, y = 5, z = 6;

// Arithmetische Operatoren:
// +, -, /, *
// %
// ++
// --
x++; // Erhöht den Wert von x um eins

y *= 2;

// Erstelle eine Konstante mit euren Namen
// Zwei Integer
// Addiere die beiden Integer miteinander und weise das Ergebnis einer neuen Variable zu
// Anschließend die Summe in der Konsole ausgeben lassen
