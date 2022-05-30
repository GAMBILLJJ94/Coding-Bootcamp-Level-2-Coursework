axios.get("https://api.vschool.io/joeyg/todo/")
    .then(function(response) {
    var todoList = response.data;
    listData(todoList)
});

// Let's assume I've also added a delete button next to each todo item in my view 
// I can add an click handler and this will pass the entire todo object to the function we called.

var deleteTodo = function(singleTodoObject) {
// This "singleTodoObject" I passed in has an attribute "_id" I can use to delete it
// I just need to add that "_id" to the end of my URL to which I'm sending this DELETE request
console.log(singleTodoObject._id)
    axios.delete("https://api.vschool.io/joeyg/todo/" + singleTodoObject._id).then(function(response) {
        // This made a DELETE request to "https://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
        // Assuming I used the object from the example above.
        alert("Your todo was successfully deleted!")
    }, function(response) {
        alert("There was a problem deleting your todo :(");
    });
};



function clearList (){
    const el = document.getElementById("todoList")
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

const delBtn = document.createElement("button")
    delBtn.textContent = "Delete To-Do"


function addBtn (listItem){
    // listItem.append(editBtn)
    listItem.append(delBtn)
}
delBtn.addEventListener("click", deleteTodo)

function listData(todoList){
    clearList()

    

    for(let i = 0; i < todoList.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = todoList[i].title
        document.getElementById("todoList").appendChild(h1)
        addBtn(h1)

        const h2 = document.createElement('h2')
        h2.textContent = todoList[i]._id
        document.getElementById("todoList").appendChild(h2)

        const descriptionh2 = document.createElement('h2')
        descriptionh2.textContent = todoList[i].description
        document.getElementById("todoList").appendChild(descriptionh2)

        const imgh2 = document.createElement('h2')
        imgh2.textContent = todoList[i].imgUrl
        document.getElementById("todoList").appendChild(imgh2)

        const priceh2 = document.createElement('h2')
        priceh2.textContent = todoList[i].price
        document.getElementById("todoList").appendChild(priceh2)
 
}
}
