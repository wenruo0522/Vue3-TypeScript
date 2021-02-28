//  have same method in different class
//  use interface to implements
interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

//  interface inheritance
interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void; 
}

class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}

class Cellphone implements Radio, Battery {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {

    }
}

class ElectricCar implements RadioWithBattery {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {

    }
}