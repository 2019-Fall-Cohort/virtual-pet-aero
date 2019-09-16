const VirtualPet = require("./VirtualPet"); 

class Shelter {

    constructor(petsToGenerate=5) {

        this.VirtualPets =[];    

        this.populateShelter(petsToGenerate);
        
    }

    getAllPets() {
        let allPets = [];

        this.VirtualPets.forEach((pets) => {
            allPets.push(pets);       
        })
        return allPets;
    }

    getPetNames() {
        let petNames = [];
            pets.forEach((petName) => {
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

    populateShelter(petsToGenerate){
        let petCount = 0;
        do {
            this.generatePet();

            petCount += 1;
        } while(petsToGenerate <= petCount);
    }
    generatePet(){
        let nameChoices = ["Speedy", "Purty", "Josh", "Spotty", "Wishwash", "Cup", "Chocolate", "Starry Night", "Shithead", "Clock"];
        let name = nameChoices[getRandomElement(nameChoices.length)];
        let speciesChoices = ["Cat", "Dog", "Hamster", "Bird", "Lion", "Turtle", "Horse"];
        let species = speciesChoices[getRandomElement(nameChoices.length)]; 
        let hunger = randomStat();
        let happiness = randomStat();
        let health = randomStat();
        let thirst = randomStat();
        let cleanliness = randomStat();

        const newVirtualPet = new VirtualPet(name, species, hunger, happiness, health, thirst, cleanliness);
        this.pushNewPet(newVirtualPet);

    }
    pushNewPet(newVirtualPet){
        this.VirtualPets.push(newVirtualPet);
    }
}


const getRandomElement = (max) => {
    randomElement = Math.floor(max * Math.random());
    return randomElement;
    }
const randomStat = () => { Math.floor(90 * Math.random()) + 10} ; 




module.exports = Shelter;



/// TEST
    