// Vordefinierten Objekte in JS
// string
// String EIgenschaften:
// string.length; => Gibt die Länge des Strings als Zahl zurück

// Index:
// Der Index beim String beginnt bei 0 und geht folglich bis length - 1
// Hallo => H = string[0], o => string[4]

// Methoden des Strings:

let exampleString = "Test";

// string.charAt(zahl)
// Gibt das Zeichen an der Indexposition "zahl" an
// Austauschbar mit string[zahl]
exampleString.charAt(0) // => "H"

// string.charCodeAt(zahl)
// Gibt den Unicode-Wert des Zeichens an der Indexposition "zahl" an
exampleString.charCodeAt(0) // => 84

// string.concat(string1, string2, ...stringn);
// Gibt einen neuen String zurück, der sich aus den beteiligten Strings zusammensetzt
let returnString = exampleString.concat(" test2", " test 3", " test4") // exampleString verändert sich nicht

// string.indexOf("gesuchteZeichen", startposition) 
// Gibt den Index zurückt an dem das gesuchte Zeichen/-kette steht/beginnt
exampleString.indexOf("e"); // => 1
exampleString.indexOf("st") // => 2
// Falls nichts gefunden wird, wird -1 zurückgegeben

// string.lastIndexOf("gesuchteZeichen", startposition)
// Funktioniert wie indexOf, gibt den Index des letzten Treffers zurück

// string.slice(Start, Ende)
// Gibt einen neuen String zurück, der beim Startindex beginnt(inklusive) und Endet vor dem Endindex(exklusiv)
// der aufrufende String wird dabei nicht verändert
// Falls ohne start und ende aufgerufen wird, wird gesamte String kopiert
// Wenn wir nur mit start aufrufen, wird bei Start angefangen und der rest des Strings kopiert
returnString = exampleString.slice(0,2); // => "Te"

// string.substring(Start, Ende)
// Gibt einen neuen String zurück, der beim Startindex beginnt(inklusive) und Endet vor dem Endindex(exklusiv)
// der aufrufende String wird dabei nicht verändert
returnString = exampleString.substring(0,2); // => "Te"

// string.split("seperator")
// Falls seperator weggelassen wird, wird bei Leerzeichen getrennt
// Gibt ein Array zurück, das aus den getrennten Strings besteht
// Der Seperator wird dabei ausgelassen

let exampleSentence = "Hallo wie geht es dir";
let arr1 = exampleSentence.split(" ");

// string.toLowerCase() schreibt das Zeichen klein
// string.toUpperCase() schreibt das Zeichen groß

// Arrays:
// Ein Objekt, das mehrere Werte speichern kann
// Es verfügt über einen Index, der bei 0 beginnt
// Kann über die Klammernschreibweise abgerufen werden
// Array[2] => Gibt das dritte Element des Arrays zurück

// Erstellen eines Arrays:

// 1. literal:
let exampleArray1 = [1, 2, 3, 4];
let badExample = [true, "test", "false", 5];
// Wenn möglich nur die selben Datentypen innerhalb eines Arrays verwenden

// 2. constructor
let exampleArray2 = new Array(1, 4, 7, 10, 13);

// Multidimensionales Array:

let mdArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [
        [13, 14, 15],
        [16, 17, 18]
    ]
];

// Eigenschaften eines Arrays:
// length => Anzahl der Elemente im Array

// Methoden
// array.indexOf(Suchwert, Start) wie beim String
// array.lastIndexOf(Suchwert, Start) wie beim String
// array.slice(start, ende) wie beim String
// array.concat(arr1, arr2...arrn) wie beim String

// Weitere Methoden:
// array.join("Seperator")
// exampleArray1.join(",") => "1,2,3,4"
// Gibt einen String zurück, der die Elemente im Array mit dem Seperator getrennt darstellt
// Das aufrufende Array wird nicht verändert

console.log(exampleArray1.join(","));

// Anhängen neuer Elemente an ein Array
// array.push(Element1, .... ElementN)
// Hängt die übergebenene Elemente an das Array an und gibt die neue Länge des Arrays zurück
// Hierbei wird das bestehende Array geändert
exampleArray1.push(5,6,7) // => 7, da das die neue Länge des Arrays ist
// exampleArray1 = [1,2,3,4,5,6,7]

// array.pop() 
// Entfernt das letzte Element aus dem Array und gibt dieses zurück
// Das bestehende Array wird verändert

console.log(exampleArray1.pop());

// array.shift()
// Entfernt das erste Element aus dem Array und gibt dieses zurück
// Das bestehende Array wird verändert

console.log(exampleArray1.shift());

// array.unshift(Element1, Element2,....ElementN);
// Fügt die neuen Elemente an den Anfang des Arrays an und gibt die neue Länge zurück
// Das bestehende Array wird verändert

console.log(exampleArray1.unshift(0));

// array.reverse() 
// Dreht die Reihenfolge des Arrays um
// Verändert das bestehende Array
exampleArray1.reverse();

// array.sort(funktion(optional))
// Sortiert die Elemente des Arrays alphabetisch, falls keine Funktion angeben wurde
// Verändert das bestehende Array
exampleArray1.sort();

// array.splice(start, AnzahlLöschung, Element1, Element2,...ElementN)
// array.splice() entfernt AnzahlLöschung Elemente beginnend bei Start und fügt - falls übergeben-
// die neuen Elemente an der Stelle ein
// Verändert das bestehende Array

// Beispiel:
// Mehrere Elemente Löschen:

// Funktioniert wie SPlice(ohne das Anfügen neuer Elemente), ändert aber nicht das bestehende Array
// function deleteMultipleElements(array, delteCount, startposition=0) {
//     if (startposition === 0) {
//         return array.slice(delteCount);
//     }
//     else {
//         let tempArray;
//         tempArray = array.slice(0, startposition);
//         tempArray = tempArray.concat(array.slice(startposition + delteCount));
//         return tempArray;
//     }
// }
function deleteMultipleElements(array, delteCount, startposition=0) {
    tempArray = array.slice();
    tempArray.splice(startposition, delteCount);
    return tempArray;
}
// [1,2,3,4,5]
// slice(0,2 )
// [1,2]
// slice(2)
deleteMultipleElements(exampleArray1, 3, 3)

// .forEach(callback/lambda)
// .map(callback/lambda)
// .filter(callback/lambda)

// Beide Methoden wenden die jeweilige FUnktion, die ihnen übergeben wurde, auf jedes Element im Array an
// Im Falle von forEach wird das Array nicht verändert und undefined zurückgegeben
// Im Falle von map und filter wird ein neues Array zurückgegeben

const wordList = ["test", "max", "beta", "true", "du"];
let newArr = wordList.filter(word => word.length >= 4);
console.log(newArr);

// Übung1:
// Wende die filter Methode auf ein Beliebeiges Zahlenarray an
// in dem zurückgegebenen Array dürfen nur Zahlen sein, die glatt durch 5 teilbar sind

// Übung2:
// Wende die map Methode auf ein Beliebiges Zahlenarray an
// in dem neuen array sollte jede Zahl mit 12 multipliziert worden sein

let numArray = [10, 10000, 999, 5783, 124, 5000, -50]
console.log(numArray.sort()); // sortiert falsch
console.log(numArray.sort((a,b) => a - b)); // sortiert aufsteigend

// Date
// Gibt den heutigen Tag + Uhrzeit zurück
let today = new Date();

// Bestimmtes Datum erstellen:
let yesterday = new Date(2022, 03, 04, 22, 25, 55, 20);
let april = new Date(2022, 3);
let weird = new Date(2022); // 1.01.1970 2022 Milisekunden nach 00:00:00:000
let dateString = new Date("04-05-2022"); // Muss im Format MM-dd-yyyy sein für Chrome/Edge
// Bei Firefox yyyy-MM-dd

// date.getFullYear() => gibt das Jahr zurück
// date.getMonth() => Gibt Monat als Zahl zwischen 0 und 11 zurück
// date.getDate() => Tag als Zahl zwischen 1 und 31
// date.getHours() => Stunde zwischen 0 und 23
// date.getMinutes() => Minuten zwischen 0 und 59
// date.getSekunden() => Sekunden zwischen 0 und 59
// date.getDay() => Gibt den Wochentag als Zahl zwischen 0 und 6 zurück
// date.getTime() => Milisekunden seit dem 01.01.1970
// date.now() => Gibt das derzeitige datum als MS seit dem 01.01.1970 zurück

// Math
// Math.round(zahl) => Rundet auf die nächste Ganzzahl
Math.round(5.5) // => 6
Math.round(5.4) // => 5

// Math.sqrt(zahl) => Quadratwurzel

// Math.pow(num1, num2) => num1^num2
// Math.abs(zahl) => Giubt den Betrag zurück

// Math.ceil(num) => Rundet auf die nächst höhere oder gleichgroße Zahl
Math.ceil(5.1) // => 6

// Math.floor(num) => rundet auf die nächste kleinere oder gleichgroße Zahl
Math.floor(4.9) // => 4

// Math.random() => Gibt zufällige Zahl zwischen 0(inklusiv) und 1(exklusiv) wieder

// Baue einen Zahlengenerator der uns zufällige Ganzzahlen zwischen 0 und 50 wiedergibt

function generateRandomNumber(limit, minimum=0) {
    let number = Math.ceil(Math.random() * limit);
    if (number < minimum) {
        number += minimum;
    }
    return number;
}

