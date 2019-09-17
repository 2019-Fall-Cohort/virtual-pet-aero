const OrganicVirtualPet = require("./OrganicVirtualPet");


describe("OrganicVirtualPet",() => {
    describe("feedPet method", () => {
        test("feedPet increases hunger and lowers cleanliness", () => {

            // Arrange
            const testOrganicVirtualPet = new OrganicVirtualPet(90, 90, 90, 90);

            // Act

            testOrganicVirtualPet.feedPet("treat")

            console.log(testOrganicVirtualPet);

            // Assert 
            expect(testOrganicVirtualPet.hunger).toEqual(92);
        })

        test("feedPet can't bring hunger over the max 100 value", () => {
            // Arrange
            const testOrganicVirtualPet = new OrganicVirtualPet(100, 90, 90, 90);

            // Act
    
            testOrganicVirtualPet.feedPet("treat")
    
            console.log(testOrganicVirtualPet);
    
            // Assert 
            expect(testOrganicVirtualPet.hunger).toEqual(100);

        })

    })
    describe("waterPet method", () => {
        test("waterPet increases thirst stat and lowers cleanliness", () => {

            // Arrange
            const testOrganicVirtualPet = new OrganicVirtualPet(90, 90, 90, 90);

            // Act

            testOrganicVirtualPet.feedPet("treat")

            console.log(testOrganicVirtualPet);

            // Assert 
            expect(testOrganicVirtualPet.hunger).toEqual(92);
        })
    })
})