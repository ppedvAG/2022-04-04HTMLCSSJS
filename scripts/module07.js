// Objekte in JavaScript:
// Grundsätzlich Sammlung von Schlüssel Wert Paaren
// Den Schlüssel nenn wir Prop(erty)
// Den Wert nenne wir Value
// Definieren eines Objetks:

// 1. literal:

const todoNew = {
    title: "Create Object",
    creationDate: new Date(),
    comment: "",
    done: false,
}



// JSON = javascript object notation

// Shorthand  seit ES6

let preName = "Max";
let lastName = "Mustermann";
age = 67;

const person1 = {preName, lastName, age};
// BEi diesem Shorthand werden die Identifier der Variablen als Property-Namen benutzt und deren Werte als Value


// 3. constructor

const person2 = new Object();


// Abrufen von Properties:

// 1. dot-Notation:
console.log(todoNew);
console.log(todoNew.title);
console.log(person1.preName);

// 2. Bracket-Notation
console.log(todoNew["creationDate"]); // Hier sind Anführungszeichen Pflicht
console.log(person1["age"]);

// Hinzufügen/Ändern von bestehenden Props:

person2.preName = "Erika";
person2.lastName = "Musterfrau";
person2["age"] = 45;

// Bei der Verwendung von Objekten macht es Sinn const zu benutzen um eine versehentliche Neuzuweisung zu verhindern

// Übung:
// Erstellt ein Objekt, das als Props vornamen, nachnamen und alter


// Löschen von Props
// Löscht das Property nur in der jeweiligen Instanz
delete person2.age;

// Erstellen von Constructor:

// Alt:

function Person(firstName, lastName, age=0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.introduce = introduce;
}

// Scope:
// 1. global Scope
// 2. Function Scope
// 3. block-scope

// function defNewPerson(){
//     // function Person() {
//     //     return {name: "Test"};
//     // }
//     return new Person();
// }

// var sollte nicht benutzt werden, da es sich nicht zwingend an seinen Scope hält

function testFunc(x) {
    if (x == 2){
        let cool = "hallo"; // Eigentlich block-scope
        // mit var wäre es aber ein function scope
    }
    console.log(cool);
}

const person4 = new Person("test", "mest", 12);
// this wird zu person4 
// person4 ist eine Instanz vom Objekt Person

// Methoden hinzufügen:

function introduce() {
    return `Mein Name ist: ${this.firstName} ${this.lastName}`;
}

// neue Methode:
// class-Declaration

class PersonNew {
    constructor (firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce() {
        return `Mein Name ist ${this.firstName} ${this.lastName}`;
    }

    // tellAge() {
    //     return `Ich bin ${this.age} Jahre alt.`;
    // }
}

let person5 = new PersonNew("Test2", "test2", 44);
let person6 = new PersonNew("Test3", "test3", 44);


function tellAge() {
    return `Ich bin ${this.age} Jahre alt.`;
}

PersonNew.prototype.tellAge = tellAge;
// Fügt der Klasse PersonNew eine neue Methode hinzu

// person5.tellAge = tellAge;

// Erstelle eine Klasse Fahrzeug:
// Das Fahrzeug soll folgende Properties haben:
// Reifen
// Motorstatus (boolean)
// MaximalGeschw
// derzeitigeGeschw
// Und folgende Methoden:
// describe: Gibt einen String zurück, der alle Properties des Fahrzeugs auflistet
// accellerate: Erhöhe die derzeitige Geschwindigkeit, aber überschreite die maximale nicht
console.log(`asdasdasdasd ` +
"asdasdasda " +
"asda asd");

// Beispiel warum var schlecht ist:

function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var line = matrix[i];
        console.log(i);
        for (var i = 0; i < line.length; i++) {
            console.log(i);
            var element = line[i];
            console.log(element);
        }
    }
}
// var kennt nur den function-Scope
// Also ist i in der ersten und der zweiten for-SChleife die selbe Zahl
// Mit let würde die Matrix normal ausgegeben werden also 1-9
// Mit var funktioniert nur die erste Zeile: 1-3

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printMatrix(matrix);

// Getter und Setter

class Fahrzeug {
    constructor(geschwindigkeit, maxGeschwindigkeit, anzRaeder){
        this.geschwindigkeit = geschwindigkeit;
        this.maxGeschwindigkeit = maxGeschwindigkeit;
        this.anzRaeder = anzRaeder;
    }

    get geschwindigkeit() {
        return `Die aktuelle Geschwidnigkeit des Fahrzeugs liegt bei: ${this._geschwindigkeit}`;
    }

    set geschwindigkeit(newSpeed){
        if(typeof(newSpeed) !== "number"){
            console.error("Geschwindigkeit muss eine Zahl sein.\nWert wurde auf 0 gesetzt.");
            this._geschwindigkeit = 0;
        }
        if (newSpeed <= this._maxGeschwindigkeit) {
            this._geschwindigkeit = newSpeed;
        }
        else {
            console.error("Neue Geschwindigkeit übersteigt maximal Geschwindigkeit.");
        }
    }

    set maxGeschwindigkeit(newMaxSpeed) {
        if(typeof(newMaxSpeed) !== "number"){
            console.error("Nur Zahlen sind gültig");
            this._maxGeschwindigkeit = null;
        }
        else {
            this._maxGeschwindigkeit = newMaxSpeed;
        }
    }

    get maxGeschwindigkeit(){
        return this._maxGeschwindigkeit;
    }

    describe() {
        return `${this._geschwindigkeit} | ${this._maxGeschwindigkeit} | ${this.anzRaeder}`;
    }

}

let fahrzeug1 = new Fahrzeug("Test", true);
console.log(fahrzeug1.geschwindigkeit);

// Vererbung in JavaScript 

class Motorrad extends Fahrzeug {
    constructor (geschwindigkeit, maxGeschwindigkeit,marke, modell) {
        // super - Funktion
        // ruft den Constructor der Klasse auf die extended wird
        // in unserem Fall also Fahrzeug
        super(geschwindigkeit, maxGeschwindigkeit, 2);
        this.marke = marke;
        this.modell = modell;
    }

    describe() {
        return super.describe() + ` | ${this.marke} | ${this.modell}`;
    }

}

class BmwMotorrad extends Motorrad {
    constructor (geschwindigkeit, maxGeschwindigkeit, modell) {
        super(geschwindigkeit, maxGeschwindigkeit, "BMW", modell);
    }
}

// Bei der Vererbung werden alle Attribute und Methoden des Vorgängers übernommen
// Mit super() rufen wir den Constructor des Vorgägngers auf
// mit super.Methode() rufen wir diese Methode des Vorgägngers auf
// siehe Zeile 238 super.describe() => ruft describe() von Fahrzeug auf


// Objekt instanceof Klasse
// Prüft ob das Objekt eine Instanz der Klasse ist
// Jedes Objekt sollte eine Instanz von Object sein, da alle Klassen davon erben
// Falls eine Klasse eine andere erweitert, ist jede Instanz der Klasse auch eine Instanz der erweiterten Klasse

fahrzeug1 instanceof Fahrzeug // => true, weil es mit dem Konstruktor von Fahrzeug erstellt wurde
fahrzeug1 instanceof Object // => true, da Fahrzeug von Object erbt

// Instanz.__proto__
// Gibt den Protoypen und den Konstruktor der Instanz wieder

// Übung 2:
// Erstelle eien abgeleite Klasse namens Auto
// Die Klasse soll Fahrezug erweitern
// neue Attribute sollen "Marke", "Modell" und PS sein
// Die neuen Attribute sollen auch bei der describe() Methode aufgelistet werden
// class Motorrad extends Fahrzeug {
    // constructor (geschwindigkeit, maxGeschwindigkeit,marke, modell) {
    //    super - Funktion
    //     ruft den Constructor der Klasse auf die extended wird
    //     in unserem Fall also Fahrzeug
    //     super(geschwindigkeit, maxGeschwindigkeit, 2);
    //     this.marke = marke;
    //     this.modell = modell;
    // }

    // describe() {
    //     return super.describe() + ` | ${this.marke} | ${this.modell}`;
    // }

