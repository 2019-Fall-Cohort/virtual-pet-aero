
const UserQuery = require("./UserQuery");


describe("UserQuery", () => {
    describe("sendMessage", () => {
        test(" ", () => {
            // Arrange
            
           const TestUserQuery =  new UserQuery();

            // Act
            const message = "hello";
            
            testMessage = TestUserQuery.sendMessage(message);

            //Assert

           expect(testMessage).toEqual(message)
        })

    })
})
