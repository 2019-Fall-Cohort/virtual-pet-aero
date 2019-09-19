class VirtualPet {

  

    constructor(petID, name, species , happiness, health, type) {

        this.petID = petID;
        this.name = name;
        this.species = species;
        this.happiness = happiness;
        this.health = health;
        this.type = type;
        this.exertion = 1;
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


    setName(name){

        this.name = name;
        
    }

    setSpecies(species){

        this.species = species;
    }

    tick(tickLength){

        this.happiness = this.happiness - tickLength;
        this.health = this.health - tickLength;
        this.thirst = this.thirst - tickLength;
        this.cleanliness = this.cleanliness - tickLength;
    }
}

module.exports = VirtualPet;


