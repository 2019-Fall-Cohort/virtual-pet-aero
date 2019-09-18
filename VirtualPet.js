// const input = require("readline-sync");

class VirtualPet {

  

    constructor(petID, name = "NoName",species= "Rock",hunger= 100,happiness = 0,health = 100,thirst = 0,cleanliness = 100) {

        this.petID = petID;
        this.name = name;
        this.species = species;
        this.hunger = hunger;
        this.happiness = happiness;
        this.health = health;
        this.thirst = thirst;
        this.cleanliness = cleanliness;
        this.exertion = 1;
    }

    getExertion(){


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
       
       this.hunger = this.hunger - mealSize
       this.cleanliness = this.cleanliness - mealSize


       return mealSize
        
    }
    playWithPet(playType) {
        let happinessAmount = 0;
        let energyExpended = 0;
        
            switch(playType.toLowerCase()){
            case "ball": 
                happinessAmount = 2;
                energyExpended = 2;
            break;
            
            case "frisbee":  
                happinessAmount = 5;
                energyExpended = 5;
            break;

            case "stick":  
                happinessAmount = 10;
                energyExpended = 10;
            break;

            default: 
            break;
        }
       
       this.happiness = this.happiness + happinessAmount;
       this.hunger = this.hunger + energyExpended;
       this.exertion = this.exertion + energyExpended;
    }

    changePetHealth(changeHealthType) {
        
        let healthAmount = 0

        switch(changeHealthType.toLowerCase()){
           
            case "vet": 
            healthAmount = 20;
                
            break;
            
            case "carhit":  
             healthAmount = 0;
             this.health = 0;
            break;

            case "hygiene":  
             healthAmount = 5;
                
            break;

            default: 
            break;
        }

        this.health = healthAmount + this.health;
    }

    waterPet(){

    const drink = 10;

    this.thirst = this.thirst - drink;
    this.cleanliness = this.cleanliness - drink;


    }
    
    cleanCage(){

        this.cleanliness = 100;
    
    }

    setName(name){

        this.name = name;
        
    }

    setSpecies(species){

        this.species = species;
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

    tick(tickLength){


        this.happiness = this.happiness - tickLength;
        this.health = this.health - tickLength;
        this.thirst = this.thirst - tickLength;
        this.cleanliness = this.cleanliness - tickLength;
    }
}

module.exports = VirtualPet;


