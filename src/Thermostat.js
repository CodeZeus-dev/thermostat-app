'use strict';

class Thermostat {
    constructor() {
        this.temperature = new Temperature().defaultTemp;
    }

    increaseTemp() {
        this.temperature++;
    }

    decreaseTemp() {
        if (this.temperature > new Temperature().minTemp) {
            this.temperature--;
        }
    }
}