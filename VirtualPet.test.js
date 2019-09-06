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
    })