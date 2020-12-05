'use strict';

const _DEFAULT_TEMPERATURE = 20;
const _MINIMUM_TEMP = 10;

class Temperature {

    constructor(){
        this.minTemp = _MINIMUM_TEMP;
        this.currentTemp = _DEFAULT_TEMPERATURE;
        this.maxTemp = 25;
    }

    setMaxTemp(powerSaverState) {
        if (powerSaverState === true && this.currentTemp > 25) {
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
}