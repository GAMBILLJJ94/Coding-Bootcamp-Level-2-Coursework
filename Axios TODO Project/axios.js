function assignResponseToVariable(response){
    showData(response.data);
}

axios.get('https://api.vschool.io/joeyg/todo').then(assignResponseToVariable)

// axios.get('https://swapi.dev/api/people/1').then(response => {
//     console.log(response.data);
// })

function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].title
        document.body.append(h1)
        const h2 = document.createElement('h2')
        h2.textContent = arr[i]._id
        document.body.append(h2)
} 
}
