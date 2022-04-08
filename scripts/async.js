// Synchrones Programmieren

// const name = "Test";
// console.log(name);

// Längere Synchrone Aktion:

function createPrimes(amount) {

    function isPrime(num) {
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % 2 === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < amount) {
        const possiblePrime = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(possiblePrime)) {
            primes.push(possiblePrime);
        }
    }
    return primes;
}

document.querySelector("#start").addEventListener("click", () => {
    const amount = document.querySelector("#prime").value;
    const primes = createPrimes(amount);
    document.querySelector("#output").innerText = `Es wurden erfolgreich ${amount} Primzahlen erstellt.`;
})

// Ausführung des Codes dauert lange
// Da der Code synchron ist, reagiert die Seite erst wieder, wenn er erfolgreich 
// ausgeführt wurde

function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
}

function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
}

function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
}

function doOperation() {
    doStep1(0, result1 => {
        doStep2(result1, result2 => {
            doStep3(result2, result3 => {
                console.log(`result: ${result3}`);
            });
        });
    });

}

doOperation();

// Promises
// Versprechen, dass hier etwas ausgeführt wird
// und irgendwann etwas zurückkommt
// EIn Promise hat drei mögliche zustände
// "pending" => Es wartet auf ein Ergebnis
// "fulfilled" => Es wurde erfolgreich ausgeführt
// "rejected" => Es schlug fehl

// Promise erstellen:

// let myPromise = new Promise(function (resolve, reject) {

//     resolve(); // Wird ausgeführt, falls alles klappt
//     reject() // wird ausgeführt, falls es nicht klappt
// })

// .then() Erlaubt es uns die Ergebnisse eines promises zu benutzen

// myPromise.then(
//     function(success) {Falls erfolgreich},
//     function(error)  {Falls fehler}
// )

//  then bedeutet: Warte bis etwas vom Promise zurückkommt und dann mache
// Bei Erfolg => erste Funktion
// Bei Fehler => Zweite Funktion

function displayPromise(data) {
    document.querySelector("#promise").innerText = data;
}

// Promise Properties:

const examplePromise = new Promise(
    function(resolve, reject) {
        let testVar = 0;
        if (testVar === 0) {
            setTimeout(function () {resolve({
                message: "X hatte den erwarteten Wert",
                testVarValue: testVar
            })}, 5000);
        }
        else {
            reject("testVar hatte nicht den erwarteten Wert");
        }
    }
)

// let promise2;
// let promise3;


examplePromise.then(
    promiseResult => promiseResult.testVarValue,
    errorMessage => displayPromise(errorMessage)
)
.then(e => displayPromise(e+500),
errorMessage => displayPromise(errorMessage))
.catch(errorMessage => displayPromise(errorMessage));

// promise2.then().catch();
// Alternative zur zweiten Funktion bei then: .catch(), handelt Fehler egal wo
// sie in der Kette auftreten

// Promise Props:
// promiseState => "pending", "fulfilled", "rejected"
// promiseResult => "inhalt" des promises, z.B. EIn String/Objekt was auch immer

// fetch() API
// Gibt immer ein Promise zurück

const response = fetch("index.html").then(
    httpResponse => {
        if (httpResponse.status === 200) {
            console.log("Status 200");
            return httpResponse.text();
        }
        else {
            console.log(httpResponse.statusText);
        }
    }
).then(
    html => document.querySelector("#index").innerHTML = html
)
.catch(errorMessage => document.querySelector("#index").innerText = errorMessage);


// .text() ist eine Methode, die uns die fetch API zur Verfügung stellt
// Die Methode wandelt den Body der Antwort in einen String um

// Mögliche Mehtoden für responseBody
// .text() => wandelt es in einen string um
// .json() => wandelt es in ein js-Objekt um
// .blob() => wandelt es inen einen Blob um
// .formData() => Key/Value Sammlung
// .clone() => kopiert den Body

// Debugger:
// Per DevTools können über den "Quellen"-Reiter Breakpoints gesetzt werden
// Diese halten die Ausführung des Codes an und erlauben uns reinzuschauen welchen Wert
// welche Variable derzeit hat
