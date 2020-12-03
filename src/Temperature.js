'use strict';

const defaultTemperature = 20;
const minimumTemp = 10;

class Temperature {

    constructor(){
        this.minTemp = minimumTemp;
        this.currentTemp = defaultTemperature;
        this.maxTemp = 25;
    }

    setMaxTemp(powerSaverState) {
        if (powerSaverState === true) {
            this.maxTemp = 25;
            this.currentTemp = this.maxTemp;
        }
        if (powerSaverState === false) { this.maxTemp = 32; }
    }

    raiseTemp() {
        if (this.currentTemp < this.maxTemp) { this.currentTemp++ };
    }

    dropTemp() {
        if (this.currentTemp > this.minTemp) { this.currentTemp--; }
    }

    resetTemp() {
        this.currentTemp = 20;
    }

    energyUsage() {
        if (this.currentTemp < 18) {
            return "low-usage";
        } else if (this.currentTemp <= 25) {
            return "medium-usage";
        } else {
            return "high-usage";
        }
    }
}