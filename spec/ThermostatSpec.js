'use strict';

describe('Thermostat', function() {

    let thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    })

    describe('establish connection between thermostat and temperature', function() {
        it('expects default temp to be 20 degrees', function() {
            expect(thermostat.temperature.currentTemp).toEqual(20);
        })
    })

    describe('Change the temperature up', function () {
        it('can increase the temperature from default', function () {
            thermostat.increaseTemp();
            expect(thermostat.temperature.currentTemp).toEqual(21);
        })
    })

    describe('Change the temperature down', function () {
        it('can decrease the temperature from default', function () {
            thermostat.decreaseTemp();
            expect(thermostat.temperature.currentTemp).toEqual(19);
        })
    })

    describe('That it can set a edge temperature values', function () {
        it('it can set the minimum temperature to 10', function () {
            for (let i = 0; i < 11; i++) {
                thermostat.decreaseTemp();
            }
            expect(thermostat.temperature.currentTemp).toEqual(10)
        })

        it('it can set the maximum temperature to 25 in power saving mode', function () {
            thermostat.powerSavingOn();
            for (let i = 0; i < 7; i++) {
                thermostat.increaseTemp();
            }
            expect(thermostat.temperature.currentTemp).toEqual(25)
        })

        it('it can set the maximum temperature to 32 while not in power saving mode', function () {
            thermostat.powerSavingOff();
            for (let i = 0; i < 14; i++) {
                thermostat.increaseTemp();
            }
            expect(thermostat.temperature.currentTemp).toEqual(32)
        })
    })

    describe("the power saving functionality of the thermostat", function() {
        it('turns the power saving mode on', function() {
            thermostat.powerSavingOn();
            expect(thermostat.powerSavingMode.state).toBe(true);
            expect(thermostat.temperature.maxTemp).toEqual(25);
        })

        it('turns the power saving mode off', function() {
            thermostat.powerSavingOff();
            expect(thermostat.powerSavingMode.state).toBe(false);
            expect(thermostat.temperature.maxTemp).toEqual(32);
        })
    })

    describe('reset functionality of the thermostat', function() {
        it('resets the temperature back to 20 degrees', function() {
            thermostat.reset();
            expect(thermostat.temperature.currentTemp).toEqual(20);
        })
    })
})