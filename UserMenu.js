const input = require("readline-sync");
const Shelter = require("./Shelter");
const OrganicVirtualPet = require("./OrganicVirtualPet");
const RoboticVirtualPet = require("./RoboticVirtualPet");

class UserMenu{
    constructor(){
        
        this.localShelter = new Shelter;
        this.localShelter.populateShelter(5);
    }

    getStarted(){
        console.log("Welcome to Virtual Pets!");
        console.log("You don't have any pets yet!" );
        console.log("Please visit the shelter to adopt a pet.");
        console.log(" ");
        console.log("Actions:");
        console.log("--------");
        console.log("1. Visit the shelter");
        console.log();
        console.log("Type '1' to visit the shelter");

        let userInput = " ";

        do {
         userInput = input.question("What would you like to do? ");

        if (userInput == "1"){
            console.log("Welcome to the shelter!");
            console.log(" ");
        } else{
            console.log("Not a valid input!");
            console.log("Type '1' to visit the shelter!");
        }

        } while (userInput != "1");

    }

    mainGame(){
        let userInput = " ";
        let whichPet; 

        do{
                       
            this.visitShelter() ;
            whichPet = this.identifyPets("Which pet would you like to interact with? ");

            if  (this.localShelter.virtualPets[whichPet] instanceof OrganicVirtualPet){
                this.printOrganicMenu();
                this.interactWithOrganicPet(whichPet)
            } else if ((this.localShelter.virtualPets[whichPet] instanceof RoboticVirtualPet)){
                this.printRoboticMenu();
                this.interactWithRoboticPet(whichPet);
            } else if ( whichPet !== "exit") {
                console.log("Not a valid Pet!")
            }   
            
            if (whichPet !== "exit") {
                let dummyInput = input.question("\nPress Enter to continue...\n");
            }
            
         } while (whichPet !== "exit"); 


    }

    visitShelter(showStat = false){

        for (let i=0;i<=this.localShelter.virtualPets.length-1;i++){
            console.log()
            console.log("Pet ID: " + this.localShelter.virtualPets[i].petID);
            console.log("Name: " + this.localShelter.virtualPets[i].name);
            console.log("species: " + this.localShelter.virtualPets[i].species);
            
            // if organic, prints organic stats; else prints robotic stats
            if (showStat){
                if (this.localShelter.virtualPets[i] instanceof OrganicVirtualPet){
                    console.log("Hunger: " + this.localShelter.virtualPets[i].hunger);
                    console.log("Happiness: " + this.localShelter.virtualPets[i].happiness);
                    console.log("Health " + this.localShelter.virtualPets[i].health);
                    console.log("Thirst: " + this.localShelter.virtualPets[i].thirst);
                    console.log("Cleanliness: " + this.localShelter.virtualPets[i].cleanliness);
                    console.log("Exertion: " + this.localShelter.virtualPets[i].exertion);
                }   
                else{
                    console.log("Happiness: " + this.localShelter.virtualPets[i].happiness);
                    console.log("Battery Power: " + this.localShelter.virtualPets[i].batteryPower);
                    console.log("Maintenance: " + this.localShelter.virtualPets[i].maintenance);

                }

            }
        
        }
   
    }

    identifyPets(SelectedQuestion){

        let userInput = input.question(SelectedQuestion);

if (userInput !== "exit"){
        let match = false;
        let matchIndex;

        for (let i=0;i<=this.localShelter.virtualPets.length-1;i++){   
           if (userInput.toLowerCase() == this.localShelter.virtualPets[i].petID){
            match = true;
            matchIndex = i;
            break;
           }
        }
        if (match) {
            return matchIndex;
        }else
        { console.log("Not a valid PetID");
        console.log();}
    }else
            return "exit";

    }

    // feedPet(){}


    adoptPet(whichPet){
            
        let match = false;
        let matchIndex;
        
        console.log();
        console.log(this.localShelter.virtualPets[whichPet].name + " just found a new home!");

        this.localShelter.virtualPets.splice(whichPet,1);

        console.log();

    }

    printOrganicMenu() {
        console.log();
        console.log("Interact with your organic pet!");
        console.log("-------------------------------");
        console.log(" ");
        console.log("Organic pet actions:");
        console.log("--------------------");
        console.log("1. Adopt new pet");
        console.log();
        console.log("2. Change pet's name");
        console.log();
        console.log("3. Feed your pet");
        console.log();
        console.log("4. Water your pet");
        console.log();
        console.log("5. Play with your pet");
        console.log();
        console.log("6. Clean your pet's cage");
        console.log();
        console.log("7. Take your pet to the vet");
        console.log();
        console.log("8. Clean or bathe your pet");
        console.log();
        console.log("9. List my pets");
        console.log();
        console.log("10. List my pets' stats");
        console.log();
        console.log("Type 'exit' to exit game");
        console.log();
    }

    printRoboticMenu(){
        console.log();
        console.log("Interact with your robotic pet!");
        console.log("-------------------------------");
        console.log(" ");
        console.log("Robotic pet actions:");
        console.log("--------------------");
        console.log("1. Adopt new pet");
        console.log();
        console.log("2. Change pet's name");
        console.log();
        console.log("3. Charge your pet");
        console.log();
        console.log("4. Repair your Pet");
        console.log();
        console.log("5. Play with your pet");
        console.log();
        console.log("6. List my pets");
        console.log();
        console.log("7. List my pets' stats");
        console.log();
        console.log("Type 'exit' to exit game");
        console.log();
      }

    interactWithOrganicPet(whichPet) {
        let userInput = input.question("What would you like to do? ");

        if (userInput >= 1 && userInput <= 10){
            //Perform Action
        } else if (userInput.toLowerCase() != "exit") {
            console.log("Not a valid input!");
            console.log();
        }

        switch (userInput) {
        case "1": 
                this.adoptPet(whichPet);
                break;

        case "2": 
                userInput = input.question("What is the pet's new name? ");
                this.localShelter.virtualPets[whichPet].name = userInput;
            break;

        case "3": 
                userInput = input.question("What would you like to feed it ('treat' OR 'snack' OR 'steak') ");
                if (userInput.toLowerCase() === ("treat" || "snack" || "steak")){ 
                this.localShelter.virtualPets[whichPet].feedPet(userInput);
                } 
                else {
                    console.log();
                    console.log("Not a valid meal!");
                    console.log();
                }
            break;

        case "4": 
                console.log();
                console.log("Old Thirst Level: " + this.localShelter.virtualPets[whichPet].thirst);
                this.localShelter.virtualPets[whichPet].waterPet();
                console.log();
                console.log("New Thirst Level: " + this.localShelter.virtualPets[whichPet].thirst);
                break;
    
        case "5": 

                userInput = input.question("What toy would you like to use ('ball' OR 'frisbee' OR 'stick') ");
                console.log();
                console.log("Old Happiness Level: " + this.localShelter.virtualPets[whichPet].happiness);
                console.log();
                if (userInput.toLowerCase() === "ball" || "frisbee" || "stick"){ 
                    this.localShelter.virtualPets[whichPet].playWithPet(userInput);
                    console.log();
                console.log("New Happiness Level: " + this.localShelter.virtualPets[whichPet].happiness);
                console.log();
                } else {
                    console.log("Not a valid toy!");
                    console.log();
                }
                break;

        case "6": 
                console.log();
                console.log("Old Cleanliness Level: " + this.localShelter.virtualPets[whichPet].cleanliness);
                
                this.localShelter.virtualPets[whichPet].cleanCage();
                
                console.log();
                console.log("New Cleanliness Level: " + this.localShelter.virtualPets[whichPet].cleanliness);
                
                break;
        
        case "7": 
                console.log();
                console.log("Old Health Level: " + this.localShelter.virtualPets[whichPet].health);
                this.localShelter.virtualPets[whichPet].changePetHealth("vet");
                console.log();
                console.log("New Health Level: " + this.localShelter.virtualPets[whichPet].health);
                console.log(this.localShelter.virtualPets[whichPet].name + " feels better now!");
                console.log();
                break;

        case "8": 
                console.log();
                console.log("Old Health Level: " + this.localShelter.virtualPets[whichPet].health);
                this.localShelter.virtualPets[whichPet].changePetHealth("hygiene");
                console.log();
                console.log("New Health Level: " + this.localShelter.virtualPets[whichPet].health);
                console.log(this.localShelter.virtualPets[whichPet].name + " feels better now!");
                console.log();
                break;

        case "9": this.visitShelter();
                 
                break;

        case "10": this.visitShelter(true);
                break;
            
        return;

        }
    }

    interactWithRoboticPet(whichPet){
        let userInput = input.question("What would you like to do? ");

        if (userInput >= 1 && userInput <= 10){
            //Perform Action
        } else if (userInput.toLowerCase() != "exit") {
            console.log("Not a valid input!");
            console.log();
        }

        switch (userInput) {
        case "1": 
                this.adoptPet();
                break;

        case "2": 
               // whichPet = this.identifyPets("Which pet's name would you like to change? ");
                userInput = input.question("What is the pet's new name? ");
                this.localShelter.virtualPets[whichPet].name = userInput;
            break;

        case "3": 
                console.log();
                console.log("Old Battery Level: " + this.localShelter.virtualPets[whichPet].batteryPower);
                this.localShelter.virtualPets[whichPet].chargeBattery();
                console.log();
                console.log("New Battery Level: " + this.localShelter.virtualPets[whichPet].batteryPower);
            break;

        case "4": 
                console.log();
                console.log("Old Maintenance Level: " + this.localShelter.virtualPets[whichPet].maintenance);
                this.localShelter.virtualPets[whichPet].repairRobot();
                console.log();
                console.log("New Maintenance Level: " + this.localShelter.virtualPets[whichPet].maintenance);
                break;
    
        case "5": 
              //  whichPet = this.identifyPets("Which pet would you like to play with? ");
                userInput = input.question("What toy would you like to use ('ball' OR 'frisbee' OR 'stick') ");
                if (userInput.toLowerCase() === "ball" || "frisbee" || "stick"){ 
                    this.localShelter.virtualPets[whichPet].playWithPet(userInput);
                } else {
                    console.log("Not a valid toy!");
                    console.log();
                }
                break;


        case "6": this.visitShelter();
                 
                break;

        case "7": this.visitShelter(true);
                break;

    }

}




} //end class

module.exports = UserMenu;