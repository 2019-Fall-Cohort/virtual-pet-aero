// const TestRunner = require("jest-runner");
const VirtualPet = require("./VirtualPet");

describe("VirtualPet", () => {
    describe("feedPet", () => {
        test(" ", () => {
            // Arrange
            
           const TestVirtualPet =  new VirtualPet();

            // Act
            
            const initialHunger = TestVirtualPet.hunger;
            TestVirtualPet.feedPet("steak");

            //Assert
         //   expect(TestVirtualPet.hunger).toEqual(98);
            expect(initialHunger - TestVirtualPet.hunger).toEqual(10)
        })

    })


        describe("playWithPet", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet();
    
               
                // Act

                const initialHunger = TestVirtualPet.hunger;
                const initialHappiness = TestVirtualPet.happiness;
                TestVirtualPet.playWithPet("frisbee");
    
                //Assert
             
                expect(TestVirtualPet.happiness - initialHappiness).toEqual(5);
                expect(TestVirtualPet.hunger - initialHunger).toEqual(5);
            })
    
        })
        describe("changePetHealth", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet();
    
               
                // Act

                const initialHealth = TestVirtualPet.health;
                
                TestVirtualPet.changePetHealth("hygiene");
    
                //Assert
             
                expect(TestVirtualPet.health - initialHealth).toEqual(5);
                
                //tests "carhit" case which automatically sets this.health to zero
                //expect(TestVirtualPet.health).toEqual(0);
            })
    
        })

        describe("waterPet", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet();
    
               
                // Act

                const initialThirst = TestVirtualPet.thirst;
                
                TestVirtualPet.waterPet();
    
                //Assert
             
                expect(TestVirtualPet.thirst - initialThirst).toEqual(10);
                
                //tests "carhit" case which automatically sets this.health to zero
                //expect(TestVirtualPet.health).toEqual(0);
            })
    
        })

        describe("cleanCage", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet();
    
               
                // Act
          
                TestVirtualPet.cleanCage();
    
                //Assert
             
                expect(TestVirtualPet.cleanliness).toEqual(100);
                
                
            })
    
        })

        describe("setName", () => {
            test(" ", () => {
                // Arrange
                
               const TestVirtualPet =  new VirtualPet();
    
               
                // Act
          
                TestVirtualPet.setName("frog");
    
                //Assert
             
                expect(TestVirtualPet.name).toEqual("frog");
                
                
            })
    
        })

    })