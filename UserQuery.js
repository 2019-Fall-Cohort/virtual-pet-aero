const input = require("readline-sync");
class UserQuery{

    AskQuestion(QuestionForUser){

 //       let answerToQuestion = input.question(QuestionForUser);
        return QuestionForUser;
    }


sendMessage(message){

console.log(message);

return message;
}



}


module.exports = UserQuery;