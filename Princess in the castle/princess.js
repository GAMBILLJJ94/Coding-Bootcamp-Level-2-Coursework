const readline = require("readline-sync");
// var playerName = readline.question("Hello player, what would you like your players name to be?")
// console.log(playerName)



class player {
    constructor (name, totalCoins, status, hasStar, setName, gotHit, gotPowerup, addCoin,print) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
    
    }
    setName(namePicked){
        if (namePicked === "Luigi"){
            this.name = "Luigi"
        } else if (namePicked === "Mario"){
            this.name = "Mario"
        }
    }
    gotHit(){
        if (this.status === "Powered Up"){
            this.status = "Big"
        }
        else if (this.status === "Big"){
            this.status === "Small"
        } else if (this.status === "Small"){
            this.status === "Dead"
        }
    }
    gotPowerup(){
        if (this.status === "Powered Up"){
            this.hasStar === true
            console.log("OH BOY LOOK WHAT YOU FOUND!?! Congratulations, you got a star! ")
        } else if (this.status === "Big"){
            this.status === "Powered Up"
        } else if (this.status === "Small"){
            this.status === "Big"
        }
    }
    addCoin(){
        this.totalCoins++ 
    }
    print(){
        if (this.status === "Powered Up"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        }   
        else if (this.status === "Big"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        } 
        else if(this.status === "Small"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        } 
        else if (this.status === "Dead"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
            clearInterval(printout)
            process.kill(process.pid, 'SIGINT')
    }
    }
}

// if (this.status === "dead")
        // clearInterval(printout)
let userOne = new player ("userOne", 0, "Small", false)
let userTwo = new player ("userTwo", 0, "Small", false)

userOne.setName("Mario")
userTwo.setName("Luigi")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let printout = setInterval(() => userOne.print(),1000)



// let death = setInterval(() => userOne.status = "Dead", 5000);