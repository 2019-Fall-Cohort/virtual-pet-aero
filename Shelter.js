const VirtualPet = require("./VirtualPet");
const OrganicVirtualPet = require("./OrganicVirtualPet");
const RoboticVirtualPet = require("./RoboticVirtualPet");
 

class Shelter {

    constructor(petsToGenerate=0) {

        this.virtualPets =[];    

        this.populateShelter(petsToGenerate);
        
    }

    getAllPets() {
         return this.virtualPets;      
        }
        


    getPetNames() {
        let petNames = [];
            this.virtualPets.forEach((petName) => {
            petNames.push(petName.name)
          })
        return petNames;
    }

    getPetStatus(pet, status) {
    //  return pet.hunger; 
     switch(status.toLowerCase()) {
            case "hunger": return pet.hunger;
            break;

            case "name": return pet.name;
            break;

            case "species": return pet.species;
            break;

            case "happiness": return pet.happiness;
            break;

            case "health":return pet.health;
            break;

            case "thirst": return pet.thirst ;
            break;

            case "cleanliness": return pet.cleanliness;
            break;

            case "all": return pet.name + " \n" +
            pet.species + " \n" +
            pet.hunger  + " \n" +
            pet.happiness  + " \n" +
            pet.health  + " \n" +
            pet.thirst  + " \n" +
            pet.cleanliness;

            default: return "You died";
         break;

     }
           
    }

    populateShelter(petsToGenerate){
        
        for(let petCount = 0;petCount < petsToGenerate; petCount++)  {

        let flip = flipCoin()
        if(flip == "tails"){
        this.generateOrganicVirtualPet();
        } else {
            this.generateRoboticVirtualPet();
            }
            
        } 
    }
    generateOrganicVirtualPet(){
        
        let petID = generatePetId(5); 
        let nameChoices = ["Speedy", "Purty", "Josh", "Spotty", "Wishwash", "Cup", "Chocolate", "Starry Night", "Shithead", "Clock"];
        let name = nameChoices[getRandomElement(nameChoices.length)];
        let speciesChoices = ["Cat", "Dog", "Hamster", "Bird", "Lion", "Turtle", "Horse"];
        let species = speciesChoices[getRandomElement(speciesChoices.length)]; 
        let hunger = getRandomStat();
        let happiness = getRandomStat();
        let health = getRandomStat();
        let thirst = getRandomStat();
        let cleanliness = getRandomStat();
        let exertion = getRandomStat();

        const newOrganicVirtualPet = new OrganicVirtualPet(hunger, thirst, exertion, cleanliness, petID, name, species, happiness, health,);
        this.pushNewPet(newOrganicVirtualPet);

    }
    generateRoboticVirtualPet(){
        
        let petID = generatePetId(5); 
        let nameChoices = ["C3PO", "version 12.23", "Mr. Shiny", "Yeeeaaahhh", "Tokyo", "Dell"];
        let name = nameChoices[getRandomElement(nameChoices.length)];
        let speciesChoices = ["Toaster", "Low-Powered Refridgerator", "Robot Mouse", "Fire Alarm"];
        let species = speciesChoices[getRandomElement(speciesChoices.length)]; 
        let happiness = getRandomStat();
        let health = getRandomStat();
        let batteryPower = getRandomStat();
        let maintainance = getRandomStat();

        const newRoboticVirtualPet = new RoboticVirtualPet(batteryPower, maintainance, petID, name, species, happiness, health,);
        this.pushNewPet(newRoboticVirtualPet);

    }
    pushNewPet(newVirtualPet){
        this.virtualPets.push(newVirtualPet);
    }
}


const getRandomElement = (max) => {
    randomElement = Math.floor(max * Math.random());
    return randomElement;
    }
const getRandomStat = () => { 
    randomStat = Math.floor(90 * Math.random()) + 10;
    return randomStat;
} 
const generatePetId = (idLength) => {
    let petId = new String("");
    while(idLength > 0) {
    const idArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
    petId = petId + idArray[getRandomElement(idArray.length)];
    idLength --;
        }   
    return petId;
}
const flipCoin = () => {
    let result 
    let flip = Math.floor(Math.random() * 2)

    if (flip == 0) {
        result = "heads";
        return result
    }
    else {
        result = "tails";
        return result
    }
}

module.exports = Shelter;



/// TEST
    