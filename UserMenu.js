const input = require("readline-sync");

class UserMenu{
    constructor(){
        
     
    
    }

    getStarted(){
        console.log("Welcome to Virtual Pets!");
        console.log("You don't have any pets yet!" );
        console.log("Please visit the shelter to adopt a pet.");
    }

    mainGame(){
        let userInput = " ";

        do{

            userInput = input.question("What would you like to do? ");



         } while (userInput.toLowerCase() != "exit"); 


    }





    sendMessage(message){

        console.log(message);
        
        return message;
    }





} //end class

module.exports = UserMenu;