
class Traveler {
    constructor(name) {
        this.name = name
        console.log(this.name)
        this.food = 1
        // total += this.food
        console.log(this.food)
        this.isHealthy = true
    }
    hunt() {
        this.food += 2;
    }
    eat() {
        if (this.food > 0) {
            this.food -= 1
        } else
            this.isHealthy = false
    }

}


class Wagon {
    constructor(cap) {
        this.capacity = cap,
            this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity
    }

    shouldQuarantine() {

        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy !== false) {
                return true;
            }
        }
        return false;
    }
    totalFood() {
        let total = 0
        for (let i = 0; i < this.passengers.length; i++) {
            total += this.passengers[i].food
            console.log(total)
            console.log(this.passengers[i])
            console.log(this.passengers[i].food)
            console.log(wagon)
        }
        console.log(total)
        return total
    }



    join(traveller) {
        this.getAvailableSeatCount()
        if (this.capacity > 0) {

            this.passengers.push(traveller)
            console.log(a.food)
            console.log(this.passengers.food)
            this.capacity -= 1
            
        } else {
            console.log("no room")
        }



    }

}


class Dog {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
        this.isGoodBoy = true
    }
    sit() {
        // sitting code goes here
    }
    fetch() {
        // fetching code goes here
    }
}
// create an instance of the Dog class
// create an instance of the Dog class
const fluffy = new Dog("Fluffy", "Toy Poodle")