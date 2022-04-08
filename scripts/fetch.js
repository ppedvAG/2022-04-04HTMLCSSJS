let tableBody = document.querySelector("tbody");
// let data = fetch("https://jsonplaceholder.typicode.com/todos")
//             .then(body => body.json())
//             .then(jsonArray => jsonArray.forEach(element => {
//                 jsonToTable(element);
//             }));

function jsonToTable(json) {
    if (json.completed === false) {
        const row = tableBody.insertRow();
        for (prop in json) {
            if (prop !== "completed"){
                row.insertCell().innerText = json[prop]
            }
        }
    }
    // for (prop in json) {
    //     row.insertCell().innerText = json[prop];
    // }
    // Verboser:
    // row.insertCell().innerText = json.userId;
    // row.insertCell().innerText = json.id;
    // row.insertCell().innerText = json.title;
    // row.insertCell().innerText = json.completed;

}

let myObject = {
    prop1: 1,
    prop2: 2,
    prop3: 3
}

for (let key  in myObject) {
    console.log(myObject[key]);
}


// Einzelner User:
const user = fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(body => body.json())
            .then(user => displayUser(user));

// Müssen aufpassen, wie uns unsere Daten übergeben werden
// Verschachtelte Objekte können über die .Schreibweise "durchstiegen" werden
function displayUser(user) {
    const output = document.querySelector("#user1");
    output.innerText = user.address.geo.lat;
}

// async & await
// "Syntactic Sugar"
// let user2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
// ungültig, da await bis jetzt nur in async Funktionen vorkommen darf

async function getUser(id) {
    let user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    user = await user.json();
    user = user.address;
    document.querySelector("#user1").innerText;
    return user;
}

// let data = fetch("https://jsonplaceholder.typicode.com/todos")
//             .then(body => body.json())
//             .then(jsonArray => jsonArray.forEach(element => {
//                 jsonToTable(element);
//             }));

let user2 = getUser(2);

async function generateTable() {
    let data = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
    data.forEach(
        element => jsonToTable(element)
    );
}

window.addEventListener("load", generateTable);

// POST mit fetch

const newPost = {
    "userId": 1,
    "title": "TestPost",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}

fetch("https://jsonplaceholder.typicode.com/posts",
{
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
.then(response => response.json())
.then(data => console.log(data));

const editedPost = {
    "userId": 1,
    "id": 1,
    "title": "TestPost verändert",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}

// PUT
// Passt bestehende Daten an
fetch("https://jsonplaceholder.typicode.com/posts/1",
{
    method: "PUT",
    body: JSON.stringify(editedPost),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
.then(response => response.json())
.then(data => console.log(data));

// DELETE
// Löscht bestehende Daten

fetch("https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "DELETE"
    }).then(body => body.json())
    .then(text => console.log(text));

