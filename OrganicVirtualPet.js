const VirtualPet = require("./VirtualPet")

class OrganicVirtualPet extends VirtualPet{



    constructor(hunger = 90, thirst = 90, exertion = 90, cleanliness = 90, petID, name, species, happiness, health, type){
        super(petID, name = "NoName",species= "Rock",happiness = 0,health = 100, type= "organic");
        
        this.hunger = hunger;
        this.thirst = thirst;
        this.exertion = exertion;
        this.cleanliness = cleanliness;
        

    }
    feedPet(foodAmount) {
        let mealSize = 0
                switch(foodAmount.toLowerCase()){
            case "treat": mealSize = 2;
            break;
            
            case "snack": mealSize = 5;
            break;

            case "steak": mealSize = 10;
            break;

            default: 
            break;
        }
       
            this.hunger = this.hunger + mealSize;     
            this.cleanliness = this.cleanliness - mealSize;


            if(this.hunger > 100){ 
                this.hunger = 100;
       }

             if(this.cleanliness < 0){
                this.cleanliness = 0;
       }

       console.log(`You fed ${this.name} a ${foodAmount}!`);
       return mealSize;
        
    }
    waterPet(){

        const drink = 10;
    
        this.thirst = this.thirst + drink;
        this.cleanliness = this.cleanliness - drink;

        if(this.thirst > 100){
            this.thirst = 100;
        }
        console.log(`You watered ${this.name}!`);


    }        
    cleanCage(){

        const clean = 20;

        this.cleanliness = this.cleanliness + clean;

        if(this.cleanliness > 100){
            this.cleanliness = 100;

        console.log(`You cleaned ${this.name}'s filthy cage.`); 
        }
    }
}
    


module.exports = OrganicVirtualPet