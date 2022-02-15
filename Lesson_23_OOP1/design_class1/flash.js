class Battery {

    constructor() {
        this.energy = 0;
    }

    setEnergy(energy) {
        this.energy = energy;
    };

    getEnergy() {
        return this.energy; // 10
    };

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }

};



class FlashLamp {

    constructor() {}

    setBattery(battery_1) {
        this.battery_1 = battery_1;
    };

    getBatteryInfo() {
        return this.battery_1.getEnergy(); //10
    };

    light() {
        if(this.status){
            document.write("Lighting" + "<br>");
        } else {
            document.write("Not lighting" + "<br>");
        }
    };

    turnOn() {
        this.status = true;
        this.battery_1.decreaseEnergy();
    };
    
    turnOff() {
        this.status = false;
    }

};

let battery_1 = new Battery();
battery_1.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery_1); // Lắp pin con thỏ và trong đèn vừa sản xuất


document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();


document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");






// class Battery {
//     energy;

//     constructor() {
//         this.energy = 0;
//     }

//     setEnergy(energy) {
//         this.energy = energy;
//     }

//     getEnergy() {
//         return this.energy;
//     }

//     decreaseEnergy() {
//         if (this.energy > 0) {
//             this.energy--;
//         }
//     }
// }

// class Lamp {
//     constructor() {}

//     setBattery(battery_1) {
//         this.battery_1 = battery_1;
//     }

//     getBatteryInfo() {
//         return this.battery_1.getEnergy();
//     }

//     light() {
//         if (this.status) {
//             alert("lighting")
//         } else {
//             alert("Not lighting")
//         }
//     }

//     turnOn() {
//         this.status = true;
//         this.battery_1.decreaseEnergy();
//     }

//     turnOff() {
//         this.status = false;
//     }
// }


// let battery_1 = new Battery();
// battery_1.setEnergy(10);

// let lamp = new Lamp();
// lamp.setBattery(battery_1);

// alert("Đèn có số pin là:" + lamp.getBatteryInfo());
// lamp.light();

// alert("Turn On");
// lamp.turnOn();
// lamp.light;
// alert("Đèn có số pin là:" + lamp.getBatteryInfo())

// alert("Turn Off");
// lamp.turnOff();
// lamp.light;
// alert("Đèn có số pin là:" + lamp.getBatteryInfo())



