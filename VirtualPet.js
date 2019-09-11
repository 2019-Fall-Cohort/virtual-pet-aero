// const input = require("readline-sync");

class VirtualPet {

  

    constructor() {

        this.name = "NoName"
        this.species = "elephant"
        this.hunger = 100;
        this.happiness = 100;
        this.health = 100;
        this.thirst = 50;
        this.cleanliness = 50;
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

       return mealSize
        // return this.hunger
    
    }
    playWithPet(playType) {
        let happinessAmount = 0;
        let exertion = 0;
        
            switch(playType.toLowerCase()){
            case "ball": 
                happinessAmount = 2;
                exertion = 2;
            break;
            
            case "frisbee":  
                happinessAmount = 5;
                exertion = 5;
            break;

            case "stick":  
                happinessAmount = 10;
                exertion = 10;
            break;

            default: 
            break;
        }
       
       this.happiness = this.happiness + happinessAmount;
       this.hunger = this.hunger + exertion;
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

    this.thirst = this.thirst + 10;

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
        


        const criticalValueHunger = 50;

        console.log("Name = " + this.name);
        console.log("Species = " + this.species);

        let text = "Hunger = " + this.hunger;
        console.log( text + Array(20-text.length).join(' ') + Array(this.hunger/2).join('x')); 

        text = "Happiness = " + this.happiness;
        console.log(text + Array(20-text.length).join(' ') + Array(this.happiness/2).join('x')); 
        text = "Health = " + this.health;
        console.log(text + Array(20-text.length).join(' ') + Array(this.health/2).join('x')); 
        text = "Thirst = " + this.thirst;
        console.log(text + Array(20-text.length).join(' ') + Array(this.thirst/2).join('x')); 
        text = "Cleanliness = " + this.cleanliness;
        console.log(text + Array(20-text.length).join(' ') + Array(this.cleanliness/2).join('x'));

    }
}

module.exports = VirtualPet;


