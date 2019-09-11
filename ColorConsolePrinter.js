

class ColorConsolePrinter {  

        printRedToConsole(message){

        const chalk = require('chalk');
        console.log(chalk.red(message));
    }


}  
module.exports = ColorConsolePrinter;