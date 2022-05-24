var name = "John"
var age = 101

function runForLoop(pets) {
    var petObjects = []
    for (var i = 0; i < pets.length; i++) {
        var pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

// runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}

// console.log(filterForFriendly(people))

let doMathSum = (a, b) => a + b

var produceProduct = (a, b) => a * b

// console.log(produceProduct(2,3))

let printString = (firstName = "Jane", lastName="Doe", age=100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

// console.log(printString())

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

let filterForDogs = animals.filter(animal => animal.type === "dog")

// console.log(filterForDogs)

function tempLit(location,name){
     return `Hi ${name}! 
     \nWelcome to ${location}. 
     \nI hope you enjoy your stay. Please ask the president of 
     ${location} if you need anything.`
}

console.log(tempLit("Hawaii","Janice"))

