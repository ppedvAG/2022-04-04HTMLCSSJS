import { calcSquare, greet, divideByTwo, test, test2 } from "./helper.js";
// Nur innerhalb von Modulen benutzbar

let testNum = calcSquare(5);
greet("Alle");
console.log(testNum);
greet("Max");
console.log(divideByTwo(10));
let test1 = new test("hallo");
let testTwo = new test2("tschau");
console.log(test1.name);
console.log(testTwo.name);

// Importe sind nur im Modul gültig
// Module sind nicht global gültig => die oben importierten Funktionen
// stehen uns nur in der modul.js zur Verfügung und nicht in der Konsole auf der
// website

//// geolocation
// fileReader
// minify, uglify
//// generators