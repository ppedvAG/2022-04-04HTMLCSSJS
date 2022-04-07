// Events in JavaScript

// Hinzufügen von Events:
// Um ein EventListener hinzuzufügen brauche ich:
// 1. Die Node die "aufpassen" soll
// 2. Die Art von Event auf die geachtet werden soll
let usernameInput = document.querySelector("#username");
let p = document.querySelector("#preview");
// node.addEventListener()
function changePreview(e) {
    p.innerHTML = e.target.value;
}
usernameInput.addEventListener("keyup", e => changePreview(e));

// Eigene Validierung:

let dropdown = document.querySelector("#dropdownMenu");
function onlyBatman(target){
    let index = target.selectedIndex;
    let choice = target[index].value;
    // console.log(choice);
    console.log("Event ausgelöst");
    if (choice != "Batman"){
        dropdown.setCustomValidity("Nur Batman ist die richtige Antwort!");
    }
    else {
        dropdown.setCustomValidity("");
    }
}
// Mit Custom Vaildity können wir eine eigene Validierung schreiben
// solange setCustomValidity() kein leerer String übergeben wird, gilt das input Feld als ungültig
// wenn wir einen leeren String übergeben, kann die Form abgesendet werden
dropdown.addEventListener("change", e => onlyBatman(e.target));

// form.checkValidity() erlaubt es uns zu prüfen ob eine Form gültig ist oder nicht
// falls die Funktion true zurückgibt, können wir die Form absenden
// falls false zurückgegeben wird, können wir sie nicht senden

// Arten von EventListener

// "click" => sobald das Element angeklickt wird
// "dblClick" => sobald ein Element doppelt angeklickt wird
// "keyDown" => sobald eine Taste betätigt wird
// "keyUp" => sobald die Taste losgelassen wird
// "change" => Beim verändern von Angaben
// "submit" => Beim Absenden eines Formulars

let form3 = document.querySelector("#submitForm3");
form3.addEventListener("submit", e => {
    e.preventDefault()
    console.log("Formular wurde gesendet.")
})

// Cookies
// max Größe: 4096 Bytes
// Session-Storage
// Local Storage
// 5 MB, IE 10 MB

// Auslesen von cookies:
document.cookie
// Gibt allerdings alle cookies als einen einzigen String zurück
// Zum Spalten der Cookies:
let cookies = document.cookie.split(";");
// Cookies sind Schlüssel=Wert Paare

// Eigenen Cookie anlegen:

function addCookie(e) {
    e.preventDefault(); // Verhindert das ausführen der Standardaktion, im Falle von Submit
    // also das Neuladen/Weiterleiten
    let tempDate = new Date();
    let date = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 2);
    document.cookie = `username=${usernameInput.value}; expires=${date};`;
}

let form1 = document.querySelector("#form1");
form1.addEventListener("submit", e => addCookie(e));

function deleteCookies() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let currentCookie = cookies[i].split("=")[0];
        document.cookie = `${currentCookie}=""; expires=${new Date(0)}`;
    }
}

let deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", e => deleteCookies(e));

// Session Storage ist nur für die Dauer der Sitzung gültig
// Wird also gelöscht sobald der Browser geschlossen wird
// localStorage ist "dauerhaft"
// ALso bis Cache gelöschjt wird, der User selbstständig die local Storage leert oder
// wir in JS Keys löschen
// Um auf den local/sessionStorage zuzugreifen:

sessionStorage // => Gibt alles im SessionStorage wieder
localStorage // => Gibt alles im localStorage wieder

// ANlegen von EInträgen:

sessionStorage.setItem("test", "true");
localStorage.setItem("test2", "123");

// BRacket-Notation erlaubt es uns gezielt einzelne Elemente abzurufen
sessionStorage["test"]; 
sessionStorage.getItem("test");

sessionStorage.key(0) // => FirstTime...GIbt den Namen des Keys am entsprechenden Index zurück
sessionStorage.removeItem("test"); // Löscht das Item mit entsprechendem Schlüssel
localStorage.clear(); // Löscht alle SChlüsselWert Paare aus dem local oder session Storage

// Beide verfügen über ein Property
sessionStorage.length; // GIbt uns zurück wie viele Items im session/localStorage enthalten sind

function addSessionStorageItem(e) {
    e.preventDefault(); // Verhindert das ausführen der Standardaktion, im Falle von Submit
    // also das Neuladen/Weiterleiten
    sessionStorage.setItem("username", usernameInput.value);
}

function addLocalStorageItem(e) {
    e.preventDefault(); // Verhindert das ausführen der Standardaktion, im Falle von Submit
    // also das Neuladen/Weiterleiten
    localStorage.setItem("username", usernameInput.value);
}

form1.addEventListener("submit", e => addSessionStorageItem(e));
form1.addEventListener("submit", e => addLocalStorageItem(e));
