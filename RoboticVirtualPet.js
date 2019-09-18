const VirtualPet = require("./VirtualPet")

class RoboticVirtualPet extends VirtualPet{



    constructor(batteryPower = 90, maintenance = 90, petID, name, species, happiness, health, type){
        super(petID, name = "NoName",species= "Toaster",happiness = 0,health = 100, type = "robotic");
        
        this.batteryPower = batteryPower;
        this.maintenance = maintenance;

    }
    chargeBattery() {
        let chargeAmount = 30
        
        this.batteryPower = this.batteryPower + chargeAmount;

        if(this.batteryPower > 100){
            this.batteryPower = 100; 
        }
    
    }
    repairRobot() {
        let repairAmount = 20

        this.maintenance = this.maintenance + repairAmount;

        if(this.maintenance > 100){
            this.maintenance = 100;
        }
    }
}

module.exports = RoboticVirtualPet;