const todoForm = document.querySelector("#todoForm");
const todoTitle = document.querySelector("#todoTitle");
const todoList = document.querySelector("#todoList");

todoForm.addEventListener("submit",e => addItemToList(e));

// function test() {
//     console.log("klappt");
//     addItemToList();
//     return false;
// }

function addItemToStorage(){
    const value = todoTitle.value;
    localStorage.setItem(value, value)
}

function addItemToList(){
    // e.preventDefault();
    const title = todoTitle.value;
    addItemToStorage();
    createListItem(title, todoList);
    todoTitle.value = "";
    
}

function createListItem(title, parent) {
    const newItem = document.createElement("li");
    newItem.innerText = title;
    newItem.addEventListener("click", e => deleteItem(e));
    newItem.addEventListener("mouseover", e => e.target.classList.add("active"));
    newItem.addEventListener("mouseleave", e => e.target.classList.remove("active"));
    newItem.classList.add("list-group-item");
    parent.appendChild(newItem);
}

function deleteItem(e) {
    let item = e.target;
    // if (item.style.textDecoration === "line-through"){
    //     todoList.removeChild(item);
    // }
    // else {
    //     item.style.textDecoration = "line-through";
    // }
    if(item.classList.contains("list-group-item-danger")){
        todoList.removeChild(item);
        if(localStorage[item.innerText]){
            localStorage.removeItem(item.innerText);
        }
    }
    else{
        item.classList.add("list-group-item-danger");
    }
}

// Passe die Funktion deleteItem() so an
// Dass der Text nicht mehr durchgestrichen wird, sondern
// die Klasse list-group-item-danger beim ersten klick hinzugefügt wird
// und falls list-group-item-danger schon vorhanden ist
// soll das item gelöscht werden
// classList.contains("")

// Items sollen jetzt auch in localStorage eingefügt werden

// localStorage, speichert Daten "unbegrenzt" lange
// Wird nur gelsöcht, falls der User ihn selbstständig per cache leeren oder 
// über die Dev-Tools löscht
// oder wenn wir ihn per JavaScript löschen

// sessionStorage, speichert Daten nur für die Dauer der Sitzung
// d.h. sobald der Browser komplett geschlossen wird sind die Daten weg
// 5-10 MB Größe


// Iterieren wir über den localStorage und fügen die Elemente an die Liste
// unserer Seite an
function generateList() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const title = localStorage[key];
        createListItem(title, todoList);
    }
}

// Das "load" Event wird ausgelöst, sobald die Seite fertig geladen hat
window.addEventListener("load", generateList);