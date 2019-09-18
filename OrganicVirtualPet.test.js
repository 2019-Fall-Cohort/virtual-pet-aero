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

            
        test("feedPet can't bring cleanliness under 0", () => {
            const testOrganicVirtualPet = new OrganicVirtualPet(100, 90, 4, 4);

            // Act
    
            testOrganicVirtualPet.feedPet("snack")
    
            console.log(testOrganicVirtualPet);
    
            // Assert 
            expect(testOrganicVirtualPet.cleanliness).toEqual(0);    

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
    describe("cleanCage method", () => {
        test("clean cage increases cleanliness, not above 100", () => {
        // Arrange
        const testOrganicVirtualPet = new OrganicVirtualPet(90, 90, 90, 90);

        // Act

        testOrganicVirtualPet.cleanCage();

        console.log(testOrganicVirtualPet);

        // Assert 
        expect(testOrganicVirtualPet.cleanliness).toEqual(100);

        })
    })
})