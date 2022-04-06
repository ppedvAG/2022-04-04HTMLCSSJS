// DOM
// Document Object Model
// Ist eine von 80 JS APIS
// Ist die Schnittstelle von HTML, CSS und JS
// Die DOM API bietet uns Befehele an mit denen wir unsere Siete verändern oder interaktiver machen können


// Terminologie:
// document - Die gesamte dargestellte Datei
// root-Node - Entspricht dem html-Tag
// node - jeglicher Inhalt unserer Seite
// Jedes Html-Element ist eine Node, aber nicht jede Node ein Html-Element

// Node-Types:
// Node-Type wird als Attribut einer Node wiedergegeben
// document wäre eine node
// Wir können über die Dev-Tools im Browser direkt Elemente auswählen und diese dann per $0 in der Konsole
// ansprechen
// node.nodeType gibt uns einen Zahlenwert zurück, der angibt um was für eine Art von Node es sich handelt

// NodeTypes:
// 1 - Html-Element, z.B. <p>, <h1> usw.
// 3 - TextNode, Der Textinhalt eines Elements, also das was ziwschen dem öffnenden und schließendem Tag steht
// 8 - CommentNode, <!-- Kommentar -->
// 9 Document_node, document-object
// 10 DocumentTypeNode, <!Doctype>

// Traversing the Dom
// Durschreiten der DOM
// Aufteilbar in zwei Bereiche
// CSS-ähnliche Auswahlmethoden
// verbosere Methoden

// node.querySelector(Css-Selektor) - WIrd das erste übereinstimmende Element zurückgeliefert
// node.querySelectorAll(Css-Selektor) - Wird ein "Array" aus allen übereinstimmenden ELementen zurückgegeben
// BEispiel:
// Das p-Element mit der ID firstParagraph auswählen und in einer Variable wegspeichern

let pFirstParagraph = document.querySelector("#firstParagraph"); // Gibt das ELement mit ID firstParagraph zurück
let h3Chapter = document.querySelector("h3.chapter-heading");// Gibt das erste Elemente mit der Klasse zurück

let pList = document.querySelectorAll("p");
// Verbosere Methoden:
// node.getElementById("Id");

pFirstParagraph = document.getElementById("firstParagraph"); // Gibt das ELement mit ID firstParagraph zurück

// node.getElementsByClassName("class") 
// Gibt alle Elemente mit der entsprechenden Klasse zurück
h3Chapter = document.getElementsByClassName("chapter-heading"); // Gibt alle Elemente mit der Klasse zurück

// node.getElementyByTagName("tag")
// Gibt alle Elemente mit dem entsprechenden Tag zurück

pList = document.getElementsByTagName("p");


// Node.Props:

// node.innerText
// Textinhalt einer Noder

let p = pFirstParagraph;
p.innerText // => Der Text im Paragraphen, ohne die Kommentare

// node.innerHtml
// Textinhalt + Comments + ChildNodes als String

p.innerHTML // => Inklusve Kommentar

// node.nodeType Gibt den Typen der Node als Zahl zurück
// node.nodeName Gibt den Tag-Namen zurück

// Kentnisse einer Node:
// node.childNodes => alle Children einer Node an, also nicht nur HTML Elemente
// node.children => alle Child-Elemente, also nur HTML-Elemente
// node.firstElementChild => Gibt erstes enthaltenenes HTML-ELement zurück
// node.lastElementChild => Gibt letztes enthaltenes HTLM-Element zurück
// node.parentElement => Gibt das Vörgänger Element zurück
// node.nextElementSibling // Gibt das vorhergehende benachbarte HTML Element zurück
// node.previousElementSibling // Gibt das nachfolgende benachbarte HTML Element zurück
// node.getRootNode() // Gibt document zurück



// Eine Node weiß  bescheid über:
// -Kinder
// -Eltern-Element/Vorgänger
// -direkte Nachbar
// -root

// Besondere Props bei table:
// table.rows => Gibt alle tr-Elemente einer Tabelle zurück
// row.cells => Gibt alle Spalten (td/th) einer Row zurück

// Styling durch Dom verändern:
// node.style.(CssAttribut)
// Achtung, alles was bei CSS im snake-case ist ist in der DOM zu camelCase konvertiert


// Übung:
// Wählt auf der aboutme Seite ein beliebiges Element aus
// Speichert es in eine Variable
// Ändert den Style:
// beliebige Text-Farbe
// Schriftgröße: 32px
// Ändert auch den Textinhalt auf "Hello DOM!"

// AUswahl:
// document.getElementsByClassName("Klasse")
// document.getElementsByTagName("tag")
// document.getElementById("Id")

// document.querySelector("CSS-Selektor")
// document.querySelectorAll("CSS-Selektor")

// node.innerText => ändert Text


// Erstellen einer neuen Node
// node.createElement("tag-Name")
let newP = document.createElement("p"); // erstellt ein neues leeres p-Element
newP.innerText = "Ich bin das neu erstellte P-Element";
newP.style.fontSize = "40px";

// Muss noch eingefügt werden
// parentNode.appendChild(neuesElement) am Ende des Elements eingefügt
// parentNode.insertBefore(neueElement, nachfolgerElement)

// Bei insertBefore brauchen wir 3 Elemente:
// 1. das neu anzufügende Element
// 2. das Element vor dem das neue Element angefügt werden soll
// 3. das gemeinsame Elternelement der beiden
let body = document.body // document.body gibt immer body-Tag zurück
body.appendChild(newP) // fügt newP am Ende des Bodys an
// Bei appendChild brauchen wir 2 Elemente:
// 1. das neu erstellte Element
// 2. das Eltern Element


// parentNode.removeChild(zuLöschendesElement)
body.removeChild(newP) // löscht newP wieder

// node.classList 
// Gibt ein Array mit allen Klassen des Elements zurück
// node.classList.add("klasse") fügt eine neue Klasse im Class-Attribut hinzu
// node.classList.remove("klasse") löscht eine bestehende Klasse aus dem Class Attribut

// parentNode.contains(andereNode)
// Prüft ob die node in der parentNode enthalten ist 

