function sum(a,b){
    return a + b 
}


try {
    sum(1,2)
        throw "err"
}


catch(err){
    console.log("one of these numbers is not a number.. maybe a string?")
}


let user = { username: "Joey", password: "Abc123"}

function logIn (user,pass){
    if (user !== "Joey"){
      throw "error"
    } if (pass !== "Abc123"){
       throw "error"
    } 
}

try{
    logIn("Joey","Abc123")
    console.log("Password Correct")
}
catch {
    console.log("Password Incorrect")
}
