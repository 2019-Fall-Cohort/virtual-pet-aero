const Shelter = require("./Shelter");
const VirtualPet = require("./VirtualPet");

describe("Shelter", () =>{
    describe("Adopt a pet", () => {
        test("", ()=> {

            // Arrange
            const TestVirtualPet = new VirtualPet();
            const TestVirtualPet2 = new VirtualPet();

            const TestShelter = new Shelter();
            // const testDumb = 7

            // Act
            TestShelter.pets.push(TestVirtualPet);
            TestShelter.pets.push(TestVirtualPet2);
            // TestShelter.organicPets.push(testDumb)
            // TestShelter.organicPets.push(2)
            // TestShelter.organicPets.push(5)
        
                        // Assert
            expect(TestShelter.pets).toEqual([TestVirtualPet, TestVirtualPet2]);

        }) 
    
    })

    describe("Get all pets", () => {
        test("", () => {
            // Arrange
            const TestVirtualPet = new VirtualPet();
            const TestVirtualPet2 = new VirtualPet();
            const TestVirtualPet3 = new VirtualPet();
            
            const TestShelter = new Shelter();

            // Act
            TestVirtualPet.name = "Hannah";
            TestVirtualPet2.name = "Phoney Balogna";
            TestVirtualPet3.name = "Santa Clause";

            TestShelter.pets.push(TestVirtualPet);
            TestShelter.robotPets.push(TestVirtualPet2);
            TestShelter.robotPets.push(TestVirtualPet3);

            let getAllPets = TestShelter.getAllPets();
            //Assert
            expect(getAllPets).toEqual([TestVirtualPet, TestVirtualPet2, TestVirtualPet3]);
        })
    })
    
    describe("List all pet names", () => {
        test("", () => {
            // Arrange
            const TestVirtualPet = new VirtualPet();
            const TestVirtualPet2 = new VirtualPet();
            const TestVirtualPet3 = new VirtualPet();
          
            const TestShelter = new Shelter();

            // Act
            TestVirtualPet.name = "Hannah";
            TestVirtualPet2.name = "Phoney Balogna";
            TestVirtualPet3.name = "Santa Clause";

            TestShelter.pets.push(TestVirtualPet);
            TestShelter.robotPets.push(TestVirtualPet2);
            TestShelter.robotPets.push(TestVirtualPet3);

            let getPetNames = TestShelter.getPetNames();
            //Assert

            expect(getPetNames).toEqual(["Hannah" , "Phoney Balogna", "Santa Clause"])
        })
    })
    describe("Display pet status", () => {
            // Arrange
            const TestVirtualPet = new VirtualPet();
            const TestVirtualPet2 = new VirtualPet();
            const TestVirtualPet3 = new VirtualPet();

            const TestShelter = new Shelter();

            // Act

            TestVirtualPet2.hunger = 10;

            let pet = TestVirtualPet2;
            let inputPetStatus = VirtualPet.hunger;



            // Assert
            expect(TestShelter.getPetStatus(pet, "aoweurtf")).toEqual("You died");

    })

    describe("Populate Shelter with Pets", () => {
        test(" ", () => {
            // Arrange
            
           const TestShelter =  new Shelter();

            // Act
            
            TestShelter.populateShelter()

            //Assert

            expect(TestShelter.pets[0].name).toEqual("Omar")


        })
    })
    describe("Generate pets with random attributes", () => {
        test("Two generated pets should not equal each other", () => {
               // Arrange
                
               const TestShelter =  new Shelter();
               const TestShelter2 = new Shelter();

               const TestVirtualPet2 = new VirtualPet;
    
                // Act
                
                const TestVirtualPet = TestShelter.generateOrganicPet();
                
    
                //Assert
    
                expect(TestVirtualPet === TestVirtualPet2).toBeFalsy();
        })
    })
})
