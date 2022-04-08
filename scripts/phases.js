let outer = document.querySelector("#outerDiv");
let inner = document.querySelector("#innerDiv");
let wrapper = document.querySelector("#button-wrapper");

function clicked(e) {
    console.log(`Button ${e.target.value} wurde geklickt.`);
}

// outer.addEventListener("click", e => clicked(e));

// outer.addEventListener("click", e => console.log("outer löst aus"), true);
// inner.addEventListener("click", e => console.log("inner löst aus"), true);
// wrapper.addEventListener("click", e => console.log("wrapper löst aus"), true);

// inner.addEventListener("click", e => console.log("inner löst aus"));
// wrapper.addEventListener("click", e => console.log("wrapper löst aus"));
// document.querySelector("#b").addEventListener("click", e => console.log("Button wurde geklickt"));

wrapper.addEventListener(
    "click", xyz => clicked(xyz)
)


// . im Pfadname heißt such im selben Ordner
// ./test/datei.js
// .. geh einen Ornder höher
// ~ root Ordner also Hauptordner

// C#, pyhton oder manche js. Frameworks
