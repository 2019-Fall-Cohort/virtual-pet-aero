const input = require("readline-sync");

class UserMenu{
    constructor(){
        
     
    
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
            //visitShelter();
        } else{
            console.log("Not a valid input!");
            console.log("Type '1' to visit the shelter!");
        }

        } while (userInput != "1");

    }

    mainGame(){
        let userInput = " ";

        do{

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
            console.log("9. List my pets' names");
            console.log();
            console.log("10. List my pet's stats");
            console.log();
            console.log("Type 'exit' to exit game");

            
            userInput = input.question("What would you like to do? ");
            
            if (userInput >= 1 && userInput <= 10){
                //Perform Action
            } else if (userInput.toLowerCase() != "exit") {
                console.log("Not a valid input!");
                console.log();
            }
    


         } while (userInput.toLowerCase() != "exit"); 


    }

    visitShelter(){

        
    }





    sendMessage(message){

        console.log(message);
        
        return message;
    }





} //end class

module.exports = UserMenu;