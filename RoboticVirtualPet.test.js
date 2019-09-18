const RoboticVirtualPet = require("./RoboticVirtualPet");


describe("RoboticVirtualPet",() => {
    describe("chargeBattery method", () => {
        test("chargeBattery method charges the battery and doesn't go over 100", () => {

            
            // Arrange
            const testRoboticVirtualPet = new RoboticVirtualPet(90, 90, 90, 90);

            // Act

            testRoboticVirtualPet.chargeBattery()

            console.log(testRoboticVirtualPet);

            // Assert 
            expect(testRoboticVirtualPet.batteryPower).toEqual(100);
        })
    })
    describe("repairRobot method", () => {
        test("repairRobot method adds maintenance without going over 100", () => {

            
            // Arrange
            const testRoboticVirtualPet = new RoboticVirtualPet(90, 90, 90, 90);

            // Act

            testRoboticVirtualPet.repairRobot()

            console.log(testRoboticVirtualPet);

            // Assert 
            expect(testRoboticVirtualPet.maintenance).toEqual(100);
        })
    })
})        
