export function greet(name){
    console.log(`Hi ${name}`);
} // export function Name stellt die Funktion für den Export zru Verfügung

function calcSquare(num){
    return num * num;
}

function divideByTwo(num) {
    return num / 2;
}

export class test {
    constructor (name) {
        this.name = name;
    }
}

class test2 {
    constructor (name) {
        this.name = name;
    }
}
// Klassen können auch exportiert werden

export {calcSquare, divideByTwo, test2}; // Stellt die Funktion ebenfalls zur verfügung