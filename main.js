const VirtualPet = require("./VirtualPet");
const ColorConsolePrinter = require("./ColorConsolePrinter");

const TestVirtualPet =  new VirtualPet();
const TestColorConsolePrinter = new ColorConsolePrinter();

TestVirtualPet.getStatus();

TestVirtualPet.setSpecies("lion");

TestVirtualPet.playWithPet("ball");

TestVirtualPet.feedPet("steak");

TestVirtualPet.getStatus();

TestColorConsolePrinter.printRedToConsole("text in red");
