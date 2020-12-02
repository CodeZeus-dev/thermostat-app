'use strict';

class Thermostat {

    constructor() {
        this.temperature = new Temperature();
        this.powerSavingMode = new PowerSaver();
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
}