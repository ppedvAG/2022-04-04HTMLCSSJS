const todoForm = document.querySelector("#todoForm");
const todoTitle = document.querySelector("#todoTitle");
const todoList = document.querySelector("#todoList");

todoForm.addEventListener("submit",e => addItemToList(e));

function addItemToList(e){
    e.preventDefault();
    const newItem = document.createElement("li");
    newItem.innerText = todoTitle.value;
    todoTitle.value = "";
    newItem.addEventListener("click", e => deleteItem(e));
    newItem.addEventListener("mouseover", e => e.target.classList.add("active"));
    newItem.addEventListener("mouseleave", e => e.target.classList.remove("active"));
    newItem.classList.add("list-group-item");
    todoList.appendChild(newItem);
}

function deleteItem(e) {
    let item = e.target;
    if (item.style.textDecoration === "line-through"){
        todoList.removeChild(item);
    }
    else {
        item.style.textDecoration = "line-through";
    }
}

