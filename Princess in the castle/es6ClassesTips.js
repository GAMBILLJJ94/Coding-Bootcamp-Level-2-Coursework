// ES6 Classes
class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }
    
    honk(){
        console.log("hooonk")
    }
    
    drive(){
        console.log("Vrooom")
    }
}

// Don't repeat yourself . DRY

class Motorcyle extends Vehicle {
    constructor(make, model, hasSideCar){
        super(make, model)
        this.hasSideCar = hasSideCar
    }
}
// ES6 Classes
class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }
    
    honk(){
        console.log("hooonk")
    }
    
    drive(){
        console.log("Vrooom")
    }
}

// Don't repeat yourself . DRY

class Motorcyle extends Vehicle {
    constructor(make, model, hasSideCar){
        super(make, model)
        this.hasSideCar = hasSideCar
    }
}
