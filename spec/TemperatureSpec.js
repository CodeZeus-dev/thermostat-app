'use strict';

describe("Temperature", function() {

    let temperature;

    beforeEach(function() {
        temperature = new Temperature();
    })

    describe("Set default temperature", function() {
        it("sets default temperature to 20 degrees", function() {
            expect(temperature.currentTemp).toEqual(20);
        })
    })

    describe('change the current temperature', function() {
        it('increases the current temperature by 1 degree', function() {
            temperature.raiseTemp();
            expect(temperature.currentTemp).toEqual(21)
        })

        it('decreases the current temperature by 1 degree', function() {
            temperature.dropTemp();
            expect(temperature.currentTemp).toEqual(19)
        })

        it('stops increasing the temperature at 25 degrees while in power saving mode', function () {
            temperature.setMaxTemp(true);
            for (let i = 0; i < 7; i++) {
                temperature.raiseTemp();
            }
            expect(temperature.currentTemp).toEqual(25)
        })

        it('stops increasing the temperature at 32 degrees when not in power saving mode', function () {
            temperature.setMaxTemp(false);
            for (let i = 0; i < 14; i++) {
                temperature.raiseTemp();
            }
            expect(temperature.currentTemp).toEqual(32)
        })
    })

    describe('maximum temperature based on the power saving mode', function() {
        it('sets the default maximum temperature to 25 degrees', function() {
            expect(temperature.maxTemp).toEqual(25);
        })

        it('sets the maximum temperature to 32 degrees when power saving is off', function() {
            temperature.setMaxTemp(false);
            expect(temperature.maxTemp).toEqual(32);
        })

        it('sets the maximum temperature to 25 degrees when power saving is on', function() {
            temperature.setMaxTemp(true);
            expect(temperature.maxTemp).toEqual(25);
        })
    })

    describe('reset the temperature', function() {
        it('sets it to 20 degrees', function() {
            temperature.currentTemp = 32;
            temperature.resetTemp();
            expect(temperature.currentTemp).toEqual(20);
        })
    })

    describe('Current energy usage', function() {
        it('returns low-energy for temperatures < 18 degrees', function() {
            temperature.currentTemp = 16;
            expect(temperature.energyUsage()).toEqual('low-usage');
        })

        it('returns medium-energy for temperatures <= 25 degrees', function() {
            expect(temperature.energyUsage()).toEqual('medium-usage');
        })

        it('returns high-energy for temperatures > 25 degrees', function() {
            temperature.currentTemp = 30;
            expect(temperature.energyUsage()).toEqual('high-usage');
        })
    })
})