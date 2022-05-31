const todoForm = document["todo-form"]

function getData(){
    axios.get('https://api.vschool.io/joey/todo')
        .then(response => listData(response.data))
        .catch(error => error)
}

getData()

//Actually appending the API information to the DOM and adding buttons that delete and linethrough
function listData(arr){
    clearList()

    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        // let h1Text = h1.textContent
        h1.textContent = arr[i].title
        document.getElementById("todoList").appendChild(h1)
        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete To-Do"
        h1.appendChild(delBtn)
        delBtn.addEventListener('click', ()=>{
            axios.delete("https://api.vschool.io/joey/todo/" + arr[i]._id)
                .then(getData)
        })
        const doneBtn = document.createElement("button")
        doneBtn.textContent = "Done"
        h1.appendChild(doneBtn)

        // updates for linethrough/done button
        const updates = {
            completed: true
        }
        const otherUpdates = {
            completed: false
        }

        doneBtn.addEventListener('click', () => {
                if (arr[i].completed === false){
                    axios.put("https://api.vschool.io/joey/todo/" + arr[i]._id, updates)
                        .then(getData)
                        .catch(err => console.log(err))
                        
                } else if (arr[i].completed === true){
                    axios.put("https://api.vschool.io/joey/todo/" + arr[i]._id, otherUpdates)
                        .then(getData)
                        .catch(err => console.log(err))
                }
        })
        if (arr[i].completed === true){
        h1.style.textDecoration = 'line-through';
        }

        // const h2 = document.createElement('h2')
        // h2.textContent = arr[i]._id
        // document.getElementById("todoList").appendChild(h2)

        const descriptionh2 = document.createElement('h2')
        descriptionh2.textContent = arr[i].description
        document.getElementById("todoList").appendChild(descriptionh2)

        const img = document.createElement('img')
        img.textContent = arr[i].imgUrl
        document.getElementById("todoList").appendChild(img)
        

        const priceh2 = document.createElement('h2')
        priceh2.textContent = arr[i].price
        document.getElementById("todoList").appendChild(priceh2)
    }
}

//Clearing function
function clearList (){
    const el = document.getElementById("todoList")
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

//Post submit to DOM
todoForm.addEventListener("submit", function(e){
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value=""
    todoForm.description.value=""
    todoForm.price.value=""
    todoForm.imgUrl.value=""

    axios.post("https://api.vschool.io/joey/todo", newTodo)
        .then(getData)
        .catch(error => console.log(error))
})


// const deleteTodo = function (){
//     axios.get('https://api.vschool.io/joey/todo')
//         .then(function(response) {
//             var theTodoList = response.data
//             console.log(theTodoList._id)
//         })
//         // .then(response => response.data)
//         .catch(error => error)


//     axios.delete("https://api.vschool.io/joey/todo/" + todoList._id)
//         .then(response => alert("You have deleted your To-Do"))
//         .then(response => getData())
//         .catch(err => alert("there was an issue"))

// }

//deleting function

// delBtn.addEventListener("click", deleteTodo)


        // doneBtn.addEventListener('click', () => {
        //     if(arr[i].completed === true){
        //         axios.put("https://api.vschool.io/joey/todo/" + arr[i]._id, updates)
        //         .then(response => (response.data))
        //         .catch(err => alert("There was an issue crossing off your To-Do"))
        //     } else if (arr[i].completed === false){
        //         completed = true
        //     axios.put("https://api.vschool.io/joey/todo/" + arr[i]._id, updates)
        //         .then(response => alert(arr[i].completed))
        //         .catch(err => alert("There was an issue crossing off your To-Do"))
        //     }
        // })
        // if (arr[i].completed === true){
        //     strike(arr[i].title)
        // }
        

        // const editBtn = document.createElement("button")
        // editBtn.textContent = "Edit To-Do"
        // h1.appendChild(editBtn)
        // const newInput = document.createElement("input")
        // editBtn.addEventListener('click', () => {

        // })
        // const updates = {
        //     title: `${arr[i].title}`
        // }
        // doneBtn.addEventListener('click', () => {
        //     axios.put("https://api.vschool.io/joey/todo/" + arr[i]._id, )
        //         .then(response => response.data)
        //         .catch(err => alert("There was an issue updating your To-Do"))

        // })



// 

// button.addEventListener("click", function(){
//     axios.delete("https://api.vschool.io/scrimbalessons/todo/<id>")
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })

// PUT request with axios

// const updates = {
//     title: "I CHANGED THE TITLE!!!"
// }

// axios.put("https://api.vschool.io/scrimbalessons/todo/5d8bd531ee91575e6d49e06f", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// const person = {
//     name: "steve",
//     age: 20
// }

// const updates = {
//     name: "dan"
// }

// const updates = {
        //     completed: true
        // }


// const result = Object.assign(person, updates)
// console.log(result)