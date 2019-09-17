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
            expect(TestShelter.virtualPets.length).toEqual(3);

        }) 
    

    })

    describe("Get all pets", () => {
        test("Print all pets in shelter", () => {
            // Arrange
            
        
            const TestShelter = new Shelter(3);
            
            // Act
            const TestVirtualPet = new VirtualPet;

            let testTestShelter = [];

            testTestShelter.push(TestShelter.getAllPets()[0]);


            //Assert
            expect(TestShelter.virtualPets[0]).toEqual(testTestShelter[0]);
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

            TestShelter.virtualPets.push(TestVirtualPet);
            TestShelter.virtualPets.push(TestVirtualPet2);
            TestShelter.virtualPets.push(TestVirtualPet3);

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
        test("Shelter contains no pets with name value of null", () => {
            // Arrange
            
           const TestShelter =  new Shelter(3);

            // Act
            
            //TestShelter.populateShelter(3)

            //Assert
            console.log(TestShelter.virtualPets)
            expect(TestShelter.virtualPets[0].name).toEqual(expect.not.arrayContaining([null]))
            

        })
    })
    describe("Generate pets with random attributes", () => {
        test("Two generated pets should not equal each other", () => {
               // Arrange
                
               const TestShelter =  new Shelter();
               
               const TestVirtualPet2 = new VirtualPet;
    
                // Act
                
                const TestVirtualPet = TestShelter.populateShelter(1);
                
                //Assert
    
                expect(TestVirtualPet === TestVirtualPet2).toBeFalsy();
        })
    })
})
