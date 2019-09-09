
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
describe("UserQuery", () => {
    describe("AskQuestion", () => {
        
        test(" ", () => {
            // Arrange
            
           const TestUserQuery =  new UserQuery();

            // Act
            const message = "fAskQuestion";
            
            testMessage = TestUserQuery.AskQuestion(message);

            //Assert

           expect(testMessage).toEqual(expect.stringContaining(""));
        })

    })
})