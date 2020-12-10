let totalFood = 0
class Traveler {
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
        hunt () {
           this.food+=2;
           totalFood+=2;
        }
        eat () {
        if (this.food > 0){
        this.food-=1
        }else
        this.isHealthy = false
        }

    }


class Wagon{
constructor (cap){
    this.capacity = cap,
    this.passengers = []}
    getAvailableSeatCount (){
     return this.capacity
    }

    shouldQuarantine (){
        
        for (let i; i < this.passengers.length; i++){
            console.log[i]
           if  ([`this.passengers[i]`].isHealthy = false) {
             return true
           }else
           console.log(false)
             }
             return
    
    }
    totalFood () {
         console.log(this.passengers.length)
        for (let i=0; i < this.passengers.length; i++){
           //if (totalFood > 0){
               console.log (this.passengers[i])
            totalFood += this.passengers[i].food
           console.log(totalFood)
            }
            return totalFood
        }


    

    join (a) {
        this.getAvailableSeatCount()
        if (this.capacity > 0){
        this.passengers.push(a.name)
        this.capacity -=1
        }else
        console.log ("no room")
    }
   


}




class Dog {
    constructor (name, breed) {
        this.name = name
        this.breed = breed
        this.isGoodBoy = true
    }
    sit () {
        // sitting code goes here
    }   
    fetch () {
        // fetching code goes here
    }   
}
// create an instance of the Dog class
// create an instance of the Dog class
const fluffy = new Dog("Fluffy", "Toy Poodle")