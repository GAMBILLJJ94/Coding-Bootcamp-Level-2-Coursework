localStorage.setItem("Joey", 27)
localStorage.setItem("name", "steve")
localStorage.setItem("age", 10)
localStorage.setItem("isAlive", true)
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
localStorage.setItem("adress", JSON.stringify({street: "123 street", city: "SLC" }))

JSON.parse("adress")


// JSON = JS object notation 
// JSON.stringify - turns JS into JSON 
// JSON.parse - turns JSON into JS
// localStorage.removeItem("") to remove items
// Local storage is an object for all intents and purposes 

// localStorage. ("name of key") = "(What you want in)"

// JS to JSON is good for local storage but changing back from JSON to JS is necessary if you want to loop through something such as an array or object. [0],[1], etc

// Stick to using setItem and getItem when using these JSON methods, as outside methods of getting and setting items in local storage upon retrieval can cause unwanted effects or break your program..