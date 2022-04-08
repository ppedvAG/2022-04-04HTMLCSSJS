let locationData = navigator.geolocation.getCurrentPosition(
    e => console.log(e)
);

const loc = document.querySelector("#location");

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            locData => {
                loc.innerHTML = "Lat: " + locData.coords.latitude + "<br>"
                    + "Long: " + locData.coords.longitude;
            },
            error => console.log(error)
            // error objekt setzt sich zusammen aus folgenden Props:
            // message : Text des Fehlers
            // code: Fehlercode
            // 0: unbekannter Fehler
            // 1: Erlaubnis verweigert
            // 2: Position konnte nicht bestimmt werden
            // 3: Timeout
        )
    }
    else {
        loc.innerText = "Ihr Browser unterstützt geolocation nicht";
    }
}

getCurrentLocation();
// Gibt uns die Standortkoordinaten des Users zurück, falls dieser es erlaubt
// Könnten diese dann in googlemaps anzeigen lassen

// Generators:
// Syntax:
// function* name {code !kein return sonder yield}

function* generatorExample() {
    for (let i = 0; i < 11; i++) {
        yield i;
    }
}

let genReturn = generatorExample();
// erstellt ein generator Objekt
// mittels genReturn.next() kann ich auf den nächsten Wert gehen
// Rückgabe von .next() =>Objekt : {value: (rückgabewert), done: (true/false)}

function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;

    // let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    // "+latlon+" & zoom=14 & size=400x300 & sensor=false & key=YOUR_KEY";

    document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
}