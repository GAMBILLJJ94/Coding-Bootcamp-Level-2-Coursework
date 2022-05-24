// localStorage.setItem("Joey", 27)
// localStorage.setItem("name", "steve")
// localStorage.setItem("age", 10)
// localStorage.setItem("isAlive", true)
// localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
// localStorage.setItem("adress", JSON.stringify({street: "123 street", city: "SLC" }))

// JSON.parse("adress")


// JSON.stringify - turns JS into JSON 
// JSON = JS object notation 
// JSON.parse - turns JSON into JS


const myForm = document.getElementById("flight")

myForm.addEventListener("submit", event => {
    event.preventDefault()

    const firstName = myForm.firstName.value
    const lastName = myForm.lastName.value
    const age = myForm.age.value
    const gender = myForm.gender.value
    const location = myForm.location.value

    var diets = []
    var dietBoxes = myForm.querySelectorAll("input[name=diet]:checked")
    for (var i = 0; i < dietBoxes.length; i++){
        diets.push(dietBoxes[i].value)
    }

    alert("Name: " + firstName + " " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + location + "\nDiet Restrictions: " + diets)

    myForm.firstName.value= ""
    myForm.lastName.value= ""
    myForm.age.value= ""
    myForm.gender.value= ""
    myForm.location.value= ""
})