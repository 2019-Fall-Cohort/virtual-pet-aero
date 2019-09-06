class VirtualPet {


    constructor() {
        this.hunger = 100;
        this.happiness = 100;

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
}

module.exports = VirtualPet;