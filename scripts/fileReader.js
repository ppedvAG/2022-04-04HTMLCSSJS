let upload = document.querySelector("#fileupload");

upload.addEventListener("change", function() {
    const reader = new FileReader();
    if(reader) {
        console.log(this.files);
        let file = this.files[0];
        console.log(file);

        // Wird ausgelöst wenn das Einlesen startet
        reader.addEventListener("loadstart", loadStart);

        // Wird ausgelöst wenn der Einleseprozess erfolgreich abgeschlossen wurde
        reader.addEventListener("load", onLoad);

        // Wird ausgelöst, wenn der Einleseprozess beendet wurde, egal ob durch
        // Fehler oder Erfolg
        reader.addEventListener("loadend", onEnd);

        // Wird ausgelöst, wenn der Prozess abgebrochen wird
        reader.addEventListener("abort", onAbort);
        
        // Wird ausgelöst, falls ein Fehler auftritt
        reader.addEventListener("error", onError);

        // Wird ausgelöst, wenn ein byte eingelesen wurde, aber max. alle 50ms
        reader.addEventListener("progress", onProgress);

        // Übergibt dem reader die Datei und liest sie ein
        // reader.readAsText(file);
        // readAsText gibt result als String zurück
        reader.readAsDataURL(file);

    }
    else {
        console.error("FileReader wird nicht unterstützt");
    }
});

function loadStart() {
    console.log("Einleseprozess wurde begonnen.");
}

function onLoad() {
    console.log("Prozess wurde abgeschlossen.");
    // document.querySelector("#output").innerText = this.result;
    let img = document.createElement("img");
    img.src = this.result;
    document.querySelector("#output").appendChild(img);
}

function onEnd() {
    console.log("Einlesen wurde beendet.");
}

function onAbort() {
    console.log("Einlesen abgebrochen");
}

function onError(ev) {
    console.log(`Es trat ein fehler auf: ${ev.error}`);
}

function onProgress(ev) {
    console.log("Wird eingelsen...");
    console.log(`Anzahl Bytes: ${ev.total}`);
}

