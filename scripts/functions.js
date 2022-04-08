// Funktionen sind eine Möglichkeit Code Mehrfach zu verwenden

// Anonyme Funktionen, normale Funktionen

function greetWorld() {
    // Funktionskörper
    console.log(`Hallo welt`);
}

greetWorld();

let returnValue = greetWorld(); // ist undefined
// Damit eine Funktion etwas anderes als undefined zurückgibt
// müssen wir das return Keyword benutzen

function greetPerson(name = "Welt") {
    return `Hallo ${name}!`;
}

let greeting = greetPerson("Ludmila");

// Default Werte
// Wir können Funktionen "Fallback"-Werte übergeben

console.log(function () {
    return "Hallo";
}());

let square = function (num) { return num * num };

// Lambda Funktion
// (parameter) => return wert
let squareLambda = n => n * n;

let multiply = (n1, n2) => n1 * n2;

// Callbacks
// Ein Callback ist eine Referenz auf eine Funktion

greetPerson();

function doTwice(funktionsName) {
    console.log("doTwice wird ausgeführt");
    funktionsName();
    funktionsName();
    console.log("doTwice ist fertig");
}

doTwice(greetWorld);

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let unevenNums = numArray.filter(num => num % 2 !== 0);
// filter wendet die Funktion in der Klammer auf jedes Element im Array an
// und gibt ein neues Array zurück,das nur aus Elementen besteht, bei denen
// die Funktion true ergeben hat
let evenNums = numArray.filter(num => num % 2 === 0);

evenNums = evenNums.map(num => num*50);
// map gibt auch ein neues Array zurück, das aus allen Elementen besteht
// allerdings wurde auf jedes Element zuvor die FUnktion in den Klammern angewandt
unevenNums = unevenNums.map(num => num * num);

unevenNums.forEach(num => console.log("Zahl: " + num));
evenNums.forEach(num => console.log("Zahl: " + num));

// forEach wendet die Funktion in dne Klammern auf jedes Element im Array an
// keine Rückgabe

// Rekursive Funktionen

// Funktionen, die sich in ihrem Körper selbst aufrufen

function faculty(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * faculty(num - 1);
    }
}

// faculty(4)
// ist 4 kleiner gleich 1?
// nö!
// also geht er zu zeile 79:
// return 4 * faculty(4 - 1)
// faculty(3)
// ist 3 kleiner gleich 1?
// nö!
// also geht er zu zeile 79:
// return 3 * faculty(3 - 1)
// faculty(2)
// ist 2 kleiner gleich 1?
// nö!
// also geht er zu zeile 79:
// return 2 * faculty(2 - 1)
// faculty(1)
// ist 1 kleiner gleich 1?
// ja!
// return 1
// return 4 * faculty(4-1) * faculty(3-1) * faculty(2-1)
// return 4 * 3 * 2 *1
// 24


// Rekursive Funktion sind meistens relativ langsam
// Deshalb sollte man sie vermeiden
