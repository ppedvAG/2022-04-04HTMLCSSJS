// Funktionen und Kontrollstrukturen

// Funktionen:
// Es gibt vordefinierte Funktionen:
console.log("ich gebe etwas in der Konsole aus");
let fullName = "Max Mustermann";
console.log("Hallo " + fullName + "! Wie geht es dir?");
console.log('Caesar sagt: "Ich kam sah und siegte"'); // Strings können Anführungszeichen enthalten,
// falls nicht dieselbe Art wie beim Start des Strings benutzt wurde
let age = 32;
console.log(`Hallo ${fullName}. Er ist ${age} Jahre alt.`);

// Mit backticks können wir direkt Variablen in unseren Strings einbauen

// Definieren einer Funktion:

function greetPerson(name) {
    console.log(`Hallo ${name}`);
}

greetPerson(fullName);
greetPerson("Karl");
greetPerson("Bastian");
greetPerson("Thomas");
greetPerson("Hermann");

let summe = summiere(12, 5);
// Falls eine Funktion keinen Wert zurückgibt wird undefined ausgegeben

function greetPersonWithReturn(name) {
    return `Hallo ${name}`;
}

let greetingMax = greetPersonWithReturn("Max");
greetPersonWithReturn("Test"); // Hat keinen Effekt, da der return Wert keiner Variablen zugewiesen wird

// Immediatly invoked function

console.log(function (val1, val2) { return val1 * val2 }(10, 25));
// Macht wenig Sinn, da wir sie nicht wiederverwenden können

let multiply = function (val1, val2) { return val1 * val2 };
let produkt = multiply(5, 5);

let greeter = greetPerson;

// hoisting, hochheben
// Wird in Zeile 27 bereits aufgerufen und erfolgreich ausgeführt, da die Funktionsdeklaration "erhoben" wird
function summiere(zahl1, zahl2) {
    return zahl1 + zahl2;
}

// Kontrollstrukturen
// if, else if , else
// switch-case
// for ()
// while
// do..while()

function isEven(number) {
    if (number % 2 == 0) {
        console.log("Die Zahl ist 0");
    }
    if (number == 0) { // Es werden beide if-Blöcke ausgeführt, da wir kein else davor haben
        console.log("Die Zahl ist gerade");
    }
    else { // Bezieht sich nur auf den vorherigen if-Block, d.h. in unserem Fall nur auf Zeile 63
        console.log("Die Zahl ist ungerade.");
    }
}

function add(number1, number2) {
    if (typeof (number1) == "number" && typeof (number2) == "number") {
        return number1 + number2;
    }
    else {
        console.error("Die Parameter müssen vom Typen 'number' sein");
    }
}

// Unterschied == und ===
// == prüft nur auf selben Wert, d.h. es casted erst in gleiche Typen
// === prüft auf selben Typen und Wert => Bevorzugte Variante

// inline-if

// Syntax:
// (Bedingung) ? Block falls Wahr : BLock falls Falsch

function shortIsEven(number) {
    (number % 2 === 0) ? console.log("Gerade") : console.log("Ungerade");
}

// Schreibe eine Funktion
// DIe zweil Zahlen miteinader vergleicht und die größere der beiden Zahlen zurückgibt, 
// falls sie gerade ist


function ternaryGreaterAndEven(num1, num2) {
    return (num1 < num2) ? ((num2 % 2 === 0) ? num2 : "Zahl2 Größer aber ungerade") :
        ((num1 % 2 === 0) ? num1 : "Zahl1 größer aber ungerade oder beide Zahlen sind gleich")
}

// Switch-Case

// Vergleicht den Wert einer Variable oder eines Statements mit mehreren möglichen Optionen:

// Syntax:
// switch (Varaible, die geprüft wrid) {
// case 1:
// case 2:
// ...
// default:
//}

let fruit = "banana";

switch (fruit) {
    case "pear":
        console.log("0.8€");
        break;
    case "banana":
        console.log("1€");
        break; // ist nötig, da sonst auch das nachfolgende Statement ausgeführt wird
    default:
        console.log("Not available");
}

// Meistens austauschbar mit if, usw.


// Schleifen:
// for
// while
// do while

// Kopfgesteuerten Schleifen, d.h. Endbedingung wird im Kopf der Loop abgefragt
// Die Loop wird nicht unbedingt ausgeführt, da die Endbedingung vor dem ersten durchlauf erreicht sein könnte
// for
// while

// Fußgesteurte Schleife, prüft die Bedingung am Ende
// d.h. sie wird immer mindestens einmal durchgeführt
// do...while()

// Syntax For Schleife:
// for (zählervariable, Bedingung,inkrement/dekrement){
// Code-Block
//}

for (let i = 0; i < 11; i += 2) {
    console.log(i);
}
// Zählt in Zweierschritten bis 10

for (let i = 10; i > -1; i--) {
    console.log(i);
}
// Zählt von 10 bis 0 runter
// fullName = "Max Mustermann"
//            [0][1]....[13]
for (let i = 0; i < fullName.length; i++) {
    console.log(fullName[i]);
}
// Buchstabiert Max Mustermann
// Die eckige Klammer steht für den Index im String

for (let i = 0; i < 11; i += 1) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
// Können mit if-Blöcken kombiniert werden
// Gibt jetzt nur Zahlen aus, die durch 3 teilbar sind

// While-Schleife:
// Syntax:
// while (Bedingung) {
// Code-Block
// zähler muss innerhalb des Code-Blocks inkrementiert oder dekrementiert werden    
//}

let counter = 0;

while (counter < 15) {
    console.log(counter);
    counter++;
    // Falls Zähler nicht de-/inkrementiert wird läuft der Block endlos
}


// Iteration über den String fullName:

counter = 0;

while (counter < fullName.length) {
    console.log(fullName[counter]);
    counter++;
}

// Kleine Übung zur for/while Schleife
// Erstelle eine Funktion, die einen String als Parameter erhält
// Die Funktion soll über diesen String iterieren und zählen wie viele Klein- bzw. Großbuchstaben im
// String enthalten sind
// Konsolenausgabe: Klein: 12 Groß: 55
// fullName[i].toUpperCase() => Wandelt Buchstaben an Position i in einen Großbuchstaben um
// fullName[i].toLowerCase() => Wandelt Buchstaben an Index i in einen Kleinbuchstaben um

function countCapitalAndSmall(sentence) {
    let counterCaptial = 0;
    let counterSmall = 0;
    let counterNumeric = 0;
    if (typeof (sentence) !== "string") {
        console.error("Es muss ein String übergeben werden");
        console.log("Wurde in String umgewandelt");
        sentence = sentence.toString();
    }
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() === sentence[i].toUpperCase()) {
            counterNumeric++;
        }
        else if (sentence[i].toLowerCase() === sentence[i]) {
            counterSmall++;
        }
        else {
            counterCaptial++;
        }
    }
    return `Großbuchstaben: ${counterCaptial} | Kleinbuchstaben: ${counterSmall} | Zahlen/Sonderzeichen: ${counterNumeric}`;
}

// Parse
// zu Zahlen:
// parseInt(wert) konvertiert in einen Integer, falls er nicht konvertieren kann gibt er NaN zurück
// parseFloat(wert) konvertiert in einen Float, falls nicht möglich => NaN
// "number"

// zu String:
// variable.toString() => Konvertiert boolean, number, usw. zu einem String


// Fußgesteuerte Schleife:

// do...while()

// Syntax:
// do {
// code-block
// zähler muss im Block inkrementiert werden  
//}
// while(Bedingung)
// Bedingung wird erst am Schluss geprüft

counter = 50;

do {
    console.log(counter);
    counter++;
}
while (counter < 10);
// Schleife wird immer mindestens einmal ausgeführt
// Auch wenn die Bedingung von Anfang an Falsch wäre
// Kann in einer endlos Schleife enden, falls wir die Bedingung falsch setzten
// Nicht sonderlich häufig


function divide(a = 1, b = 1) {
    console.log(typeof (a));
    console.log(typeof (b));
    return a / b;
}
// Funktion funktioniert nur wie erwartet wenn genau 2 Parameter übergeben werden
// Mit den default Werten können wir zu wenig Parameter abfangen 
// Falls obige FUnktion mit keinem Parameter aufgerufen a = 1 und b = 1
// Falls sie mit einem Parameter aufgerufen wird a=Parameter und b = 1
// Default Wert

// Rekursive Funktionen:

function faculty(number) {
    if (number == 0 || number == 1) {
        return 1;
    }
    else {
        return number * faculty(number - 1);
    }
}

faculty(2);

// FizzBuzz
// Wir erstellenm eien Funktion, die zwei Parameter übergeben bekommt
// EInen Start und einen Endpunkt(soll inklusiv sein)
// Wenn die Zahl ohne Rest durch 3 teilbar ist, soll in der Konsole Fizz ausgegeben werden 
// Wenn die Zahl ohne Rest durch 5 teilbar ist, soll in der Konsole Buzz ausgegeben werden
// Wenn die Zahl sowohl durch 5 als auch durch 3 teilbar ist soll in der Konsole FizzBuzz stehen
// Falles es weder durch 3 noch durch 5 teilbar ist soll die Zahl selbst ausgegeben werden

// fizzbuzz(10)
// 0
//1
//2
// Fizz
//...
// Buzz
// Fizz
// ...

function fizzBuzz(start, end) {
    let str;
    for (let i = start; i <= end; i++) {
        str = "";
        if (i === 0) {
            console.log(i);
            continue;
        }
        if (i % 3 === 0)
            str += "Fizz";
        if (i % 5 === 0)
            str += "Buzz";
        if (str === "")
            str = `${i}`;
        console.log(str)
    }
}

function facultyNonRecursive(number) {
    let result = 1;
    for (number; number > 0; number--) {
        result *= number;
    }
    return result;
}

// console.time("Name") Erstellt einen Timer
// console.timeEnd("Name") Beendet den Timer

console.time("Rekursiv");
faculty(250);
console.timeEnd("Rekursiv");

console.time("For-Schleife");
facultyNonRecursive(250);
console.timeEnd("For-Schleife")

// For-Schleife ist meistens schneller
// => Geschwindigkeit ist wichtig, da User sont denken könntne die Seite reagiere nicht

// Lambda-/Pfeilfunktion

// Kompakte alternative zur anonymen Funktion
// Brauchen weder das function Keyword, noch die geschweiften Klammern und auch das return Keyword nicht
// Falls Lambdas mehrzeilig sind brauchen sie das return Keyword und die geschweiften Klammern wieder
// Hauptsächlich für kruze Funktionen
// Eignen sich v.a. für die Fälle wo wir eine Funktion als Parameter einer anderne FUnktion übergeben

let quadrieren = number => number * number;

function quadrierenClassic(number) {
    return number * number;
}

// Die beiden Funktionen oben sind gleich

// Lambda als Parameter

let result = quadrierenClassic(quadrieren(2));
let result2 = quadrierenClassic(quadrierenClassic(2));

// Selbes Ergebnis

// Bei der Arbeit mit Callbacks eignen sich Lambdas sehr
// Callbacks sind Referenzen auf Funktionen
// Callbacks werden oft als Parameter höherer Funktionen benutzt

function callbackExample(functionParameter, number){
    return functionParameter(number);
}

callbackExample(quadrierenClassic, 5);
// quadrierenClassic wird nun im Körper von callbackExample mit dem Parameter 5 aufgerufen

// function callbackExample(quadrierenClassic, 5){
//     return quadrierenClassic(5);
// }

// Lambda direkt im Parameter
callbackExample(a => a + a, 12);
// Gibt 24 zurück, da im Körper von callbackExample unsere Lambdafunktion aufgerufen wird

// merheziliges Lambda:

let sumSquare = (num1, num2) => {
    num1 *= num1;
    num2 *= num2;
    return num1 + num2;
}

// Bei mehrzeiligen Lambdas spare ich mir nichts mehr => normale Funktion genau so gut benutzbar
