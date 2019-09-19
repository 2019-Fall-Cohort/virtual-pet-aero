const VirtualPet = require("./VirtualPet")

class OrganicVirtualPet extends VirtualPet{



    constructor(hunger, thirst, exertion, cleanliness, petID, name, species, happiness, health, type){
        super(petID, name, species,happiness, health, type= "organic");
        
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
    getStatus(){

        const input = require("readline-sync");
        const ColorConsolePrinter = require("./ColorConsolePrinter");
        const sendToColorConsolePrinter = new ColorConsolePrinter();


        const criticalValueHunger = 50;
        const criticalValueHappiness = 50;
        const criticalValueHealth = 50;
        const criticalValueThirst = 50;
        const criticalValueCleanliness = 50;
        const criticalValueExertion = 50;

        console.log("Name = " + this.name);
        console.log("Species = " + this.species);

        let text = "Hunger = " + this.hunger;
        let label = text + Array(20-text.length +1).join(' ');
        let bar = Array(Math.round(this.hunger/2) + 1).join('x')

        if (this.hunger > criticalValueHunger)
        {
            console.log(label + bar); 
        } else {
            sendToColorConsolePrinter.printRedToConsole(label + bar); 
        }

         text = "Happiness = " + this.happiness;
         label = text + Array(20-text.length +1).join(' ');
         bar = Array(Math.round(this.happiness/2) + 1).join('x')

        if (this.happiness > criticalValueHappiness)
        {
            console.log(label + bar); 
        } else {
            sendToColorConsolePrinter.printRedToConsole(label + bar); 
        }
        
        text = "Health = " + this.health;
        label = text + Array(20-text.length +1).join(' ');
        bar = Array(Math.round(this.health/2) + 1).join('x')

       if (this.health > criticalValueHealth)
       {
           console.log(label + bar); 
       } else {
           sendToColorConsolePrinter.printRedToConsole(label + bar); 
       }

       text = "Thirst = " + this.thirst;
        label = text + Array(20-text.length +1).join(' ');
        bar = Array(Math.round(this.thirst/2) + 1).join('x')

       if (this.thirst > criticalValueThirst)
       {
           console.log(label + bar); 
       } else {
           sendToColorConsolePrinter.printRedToConsole(label + bar); 
       }

       text = "Cleanliness = " + this.cleanliness;
        label = text + Array(20-text.length +1).join(' ');
        bar = Array(Math.round(this.cleanliness/2) + 1).join('x')

       if (this.cleanliness > criticalValueCleanliness)
       {
           console.log(label + bar); 
       } else {
           sendToColorConsolePrinter.printRedToConsole(label + bar); 
       }

       text = "Exertion = " + this.exertion;
       label = text + Array(20-text.length +1).join(' ');
       bar = Array(Math.round(this.exertion/2) + 1).join('x')

      if (this.exertion < criticalValueExertion)
      {
          console.log(label + bar); 
      } else {
          sendToColorConsolePrinter.printRedToConsole(label + bar); 
      }

    }
}
    


module.exports = OrganicVirtualPet