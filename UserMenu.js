const input = require("readline-sync");
const Shelter = require("./Shelter");

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

        let userInput = " ";

        do {
         userInput = input.question("What would you like to do? ");

        if (userInput == "1"){
            console.log("Welcome to the shelter!");
            console.log(" ");
            this.visitShelter();
        } else{
            console.log("Not a valid input!");
            console.log("Type '1' to visit the shelter!");
        }

        } while (userInput != "1");

    }

    mainGame(){
        let userInput = " ";

        do{

            console.log();
            console.log("Interact with your pet!");
            console.log("-----------------------");
            console.log(" ");
            console.log("Actions:");
            console.log("--------");
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

            
            userInput = input.question("What would you like to do? ");
            let whichPet;

            if (userInput >= 1 && userInput <= 10){
                //Perform Action
            } else if (userInput.toLowerCase() != "exit") {
                console.log("Not a valid input!");
                console.log();
            }
    
            switch (userInput) {
            case "1": this.adoptPet();
                break;

            case "2": this.visitShelter();
                    whichPet = this.identifyPets("Which pet's name would you like to change? ");
                    userInput = input.question("What is the pet's new name? ");
                    this.localShelter.virtualPets[whichPet].name = userInput;
                break;

            case "3": this.visitShelter();
                    whichPet = this.identifyPets("Which pet would you like to feed? ");
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

            case "4": this.visitShelter();
                whichPet = this.identifyPets("Which pet would you like to water? ");
                this.localShelter.virtualPets[whichPet].waterPet();
                break;
        
            case "5": this.visitShelter();
                whichPet = this.identifyPets("Which pet would you like to play with? ");
                userInput = input.question("What toy would you like to use ('ball' OR 'frisbee' OR 'stick') ");
                if (userInput.toLowerCase() === "ball" || "frisbee" || "stick"){ 
                    this.localShelter.virtualPets[whichPet].playWithPet(userInput);
                } else {
                    console.log("Not a valid toy!");
                    console.log();
                }
                break;

            case "6": this.visitShelter();
                whichPet = this.identifyPets("Which pet's cage would you like to clean? ");
                this.localShelter.virtualPets[whichPet].cleanCage();
                break;
            
            case "7": this.visitShelter();
            whichPet = this.identifyPets("Which pet would you like to take to the vet? ");
            this.localShelter.virtualPets[whichPet].changePetHealth("vet");
            console.log(whichPet + "feels better now!");
            console.log();
            break;

            case "8": this.visitShelter();
            whichPet = this.identifyPets("Which pet would you like to clean or bathe? ");
            this.localShelter.virtualPets[whichPet].changePetHealth("hygiene");
            console.log(whichPet + "feels better now!");
            console.log();
                
            case "9": this.visitShelter();
                break;

            case "10": this.visitShelter(true);
                break;

        }

         } while (userInput.toLowerCase() != "exit"); 


    }

    visitShelter(showStat = false){

        for (let i=0;i<=this.localShelter.virtualPets.length-1;i++){
            console.log()
            console.log("Pet ID: " + this.localShelter.virtualPets[i].petID);
            console.log("Name: " + this.localShelter.virtualPets[i].name);
            console.log("species: " + this.localShelter.virtualPets[i].species);
        
            if (showStat){
            console.log("Hunger: " + this.localShelter.virtualPets[i].hunger);
            console.log("Happiness: " + this.localShelter.virtualPets[i].happiness);
            console.log("Health " + this.localShelter.virtualPets[i].health);
            console.log("Thirst: " + this.localShelter.virtualPets[i].thirst);
            console.log("Cleanliness: " + this.localShelter.virtualPets[i].cleanliness);
            console.log("Exertion: " + this.localShelter.virtualPets[i].exertion);

            }
        
        }
   
    }

    identifyPets(SelectedQuestion){

        let userInput = input.question(SelectedQuestion);
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
        
    }

    feedPet(){}



    sendMessage(message){

        console.log(message);
        
        return message;
    }

    adoptPet(){

        this.visitShelter() ;

        let userInput = input.question("Which pet would you like to adopt? ");
            
        let match = false;
        let matchIndex;

        for (let i=0;i<=this.localShelter.virtualPets.length-1;i++){   
           if (userInput.toLowerCase() == this.localShelter.virtualPets[i].petID){
            match = true;
            matchIndex = i;
            break;
           }
        }
        // console.log("Match Index " + matchIndex)
         if (match) {
            this.localShelter.virtualPets.splice(matchIndex,1);
        }else
        { console.log("Not a valid PetID");
        console.log();}
           


    }



} //end class

module.exports = UserMenu;