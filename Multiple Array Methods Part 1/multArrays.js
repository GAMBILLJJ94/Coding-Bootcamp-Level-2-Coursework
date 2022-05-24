var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


let olderThan = peopleArray.filter(a => a.age >= 18)
// console.log(olderThan)


let alphabetical = peopleArray.sort((a,b) => {
    if (a.lastName > b.lastName){
        return 1
    } if (a.lastName < b.lastName){
        return -1
    }
})
// console.log(alphabetical)


let inHtml = peopleArray.map(people => `${people.firstName}  ${people.lastName} is ${people.age}`)
// console.log(inHtml)


let multMethods = peopleArray
.filter(a => a.age >= 18)
.sort((a,b) => {
    if (a.lastName > b.lastName){
        return 1
    } if (a.lastName < b.lastName){
        return -1
}})
.map(people => `<li> ${people.firstName}  ${people.lastName} is ${people.age} </li>`)


function multMethods (array){

    return array.filter(a => a.age >= 18)
    .sort((a,b) => {
        if (a.lastName > b.lastName){
            return 1
        } if (a.lastName < b.lastName){
            return -1}})
            
    .map(people => `<li> ${people.firstName}  ${people.lastName} is ${people.age} </li>`)
}

console.log(multMethods(peopleArray))


// array.sort((a,b) => a.lastName - b.lastName)


// console.log(multMethods(peopleArray))