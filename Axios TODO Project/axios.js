function assignResponseToVariable(response){
    console.log(response.data);
}

axios.get('https://swapi.dev/api/people/1').then(assignResponseToVariable)

axios.get('https://swapi.dev/api/people/1').then(response => {
    console.log(response.data);
})