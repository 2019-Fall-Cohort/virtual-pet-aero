const VirtualPet = require("./VirtualPet"); 

class Shelter {

    constructor() {

        this.pets =[];

        

    }

    getAllPets() {
        let allPets = [];


        this.organicPets.forEach((organicPet) => {
            allPets.push(organicPet);
            
        })
        this.robotPets.forEach((robotPet) => {
            allPets.push(robotPet);
            
        })


        return allPets;

    }

    getPetNames() {
        let petNames = [];
        const allPets = this.getAllPets()
       
            allPets.forEach((petName) => {
            petNames.push(petName.name)
        })
        
        return petNames
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

    populateShelter(numberOfPets = 1){
        // let counter = 0
        // let vPet = []
        // do{
        // } while(counter < numberOfPets);
        //     vPet[counter] = generateOrganicPet();
        //     counter = counter + 1
        //     if (counter > numberOfPets) {
        //         break
        //     } 
        

    }
    generateOrganicPet(){
        
        let nameChoices = ["Speedy", "Purty", "Josh", "Spotty", "Wishwash", "Cup", "Chocolate", "Starry Night", "Shithead",];
        let name = nameChoices[getRandomElement(nameChoices.length)] //[getRandomElement(7)];
        let speciesChoices = ["Cat", "Dog", "Hamster", "Bird", "Lion", "Turtle"];
        let species = speciesChoices[getRandomElement(nameChoices.length)]; //[getRandomElement(4)];
        let hunger = Math.floor(90 * Math.random()) + 10;
        let happiness = Math.floor(90 * Math.random()) + 10;
        let health = Math.floor(90 * Math.random()) + 10;
        let thirst = Math.floor(90 * Math.random()) + 10;
        let cleanliness = Math.floor(90 * Math.random()) + 10;

        const VirtualPet = new VirtualPet(name, species, hunger, happiness, health, thirst, cleanliness);
        return VirtualPet;

        }
}

function getRandomElement(max){
    randomElement = Math.floor(max * Math.random());
 
    return randomElement;
}

module.exports = Shelter;



/// TEST
    