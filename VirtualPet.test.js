const VirtualPet = require("./VirtualPet");
const OrganicVirtualPet = require("./OrganicVirtualPet");
const RoboticVirtualPet = require("./RoboticVirtualPet");



describe("VirtualPet", () => {

        describe("playWithPet", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet("abc123","fido","dog",50,50,"organic");
    
               
                // Act

                const initialHunger = TestVirtualPet.hunger;
                const initialHappiness = TestVirtualPet.happiness;
                TestVirtualPet.playWithPet("frisbee");
    
                //Assert
             
                expect(TestVirtualPet.happiness - initialHappiness).toEqual(5);
              
            })
    
        })
        describe("changePetHealth", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet("abc123","fido","dog",50,50,"organic");
    
               
                // Act

                const initialHealth = TestVirtualPet.health;
                
                TestVirtualPet.changePetHealth("hygiene");
    
                //Assert
             
                expect(TestVirtualPet.health - initialHealth).toEqual(5);
                

            })
    
        })


        describe("setName", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet("abc123","fido","dog",50,50,"organic");
    
               
                // Act
          
                TestVirtualPet.setName("frog");
    
                //Assert
             
                expect(TestVirtualPet.name).toEqual("frog");
                
                
            })
    
        })

        describe("setSpecies", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet("abc123","fido","dog",50,50,"organic");
    
               
                // Act
          
                TestVirtualPet.setSpecies("frog");
    
                //Assert
             
                expect(TestVirtualPet.species).toEqual("frog");
                
                
            })
    
        })
        
    })