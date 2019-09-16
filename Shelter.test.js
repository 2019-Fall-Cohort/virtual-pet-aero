const Shelter = require("./Shelter");
const VirtualPet = require("./VirtualPet");

describe("Shelter", () =>{
    describe("Pets in shelter", () => {
        test("3 Pets in shelter", ()=> {

            // Arrange
            const TestShelter = new Shelter();

            // Act
            
            TestShelter.populateShelter(3);
        
                        // Assert
            expect(TestShelter.VirtualPets.length).toEqual(3);

        }) 
    
        
    })

    describe("Get all pets", () => {
        test("Print all pets in shelter", () => {
            // Arrange
            
        
            const TestShelter = new Shelter(3);

            // Act
            

        
            //Assert
            expect(getAllPets).toEqual([TestShelter.pets]);
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

            TestShelter.VirtualPets.push(TestVirtualPet);
            TestShelter.VirtualPets.push(TestVirtualPet2);
            TestShelter.VirtualPets.push(TestVirtualPet3);

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
            expect(TestShelter.getPetStatus(pet, "hunger")).toEqual(10);

    })

    describe("Populate Shelter with Pets", () => {
        test(" ", () => {
            // Arrange
            
           const TestShelter =  new Shelter();

            // Act
            
            TestShelter.populateShelter()

            //Assert

            expect(TestShelter.VirtualPets[0].name).toEqual("Omar")


        })
    })
    describe("Generate pets with random attributes", () => {
        test("Two generated pets should not equal each other", () => {
               // Arrange
                
               const TestShelter =  new Shelter();
               
               const TestVirtualPet2 = new VirtualPet;
    
                // Act
                
                const TestVirtualPet = TestShelter.generatePet();
                
                //Assert
    
                expect(TestVirtualPet === TestVirtualPet2).toBeFalsy();
        })
    })
})
