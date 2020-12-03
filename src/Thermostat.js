'use strict';

class Thermostat {

    constructor(temperature = new Temperature(), pSM = new PowerSaver()) {
        this.temperature = temperature;
        this.powerSavingMode = pSM;
    }

    increaseTemp() {
        this.temperature.raiseTemp();
    }

    decreaseTemp() {
        this.temperature.dropTemp();
    }

    powerSavingOn() {
        this.powerSavingMode.activate();
        this.temperature.setMaxTemp(this.powerSavingMode.state);
    }

    powerSavingOff() {
        this.powerSavingMode.deactivate();
        this.temperature.setMaxTemp(this.powerSavingMode.state);
    }

    reset() {
        this.temperature.resetTemp();
    }

    currentEnergyUsage() {
        return this.temperature.energyUsage();
    }
}