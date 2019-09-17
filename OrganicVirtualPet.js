class OrganicVirtualPet{



    constructor(hunger, thirst, exertion, cleanliness){

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
       
       this.hunger = this.hunger + mealSize     
       this.cleanliness = this.cleanliness - mealSize

       if(this.hunger > 100){ 
          this.hunger = 100;
       }

       return mealSize
        
    }
    waterPet(){

        const drink = 10;
    
        this.thirst = this.thirst + drink;
        this.cleanliness = this.cleanliness - drink;

        if(this.thirst > 100){
            this.thirst = 100;
        }
    }        

}

module.exports = OrganicVirtualPet