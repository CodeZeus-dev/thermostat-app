'use strict';

describe('Thermostat', function() {

    let thermostat;
    let temperature;

    beforeEach(function() {
        thermostat = new Thermostat();
        // temperature = jasmine.createSpyObj('temperature', ['increase', 'decrease']);
    })

    describe('establish connection between thermostat and temperature', function() {
        it('expects default temp to be 20 degrees', function() {
            expect(thermostat.temperature).toEqual(20);
            console.log(typeof thermostat.temperature);
        })
    })

    describe('Change the temperature up', function () {
        it('can increase the temperature from default', function () {
            thermostat.increaseTemp();
            expect(thermostat.temperature).toEqual(21);
        })
    })

    describe('Change the temperature down', function () {
        it('can decrease the temperature from default', function () {
            thermostat.decreaseTemp();
            expect(thermostat.temperature).toEqual(19);
        })
    })

    describe('That it can set a minimum temperature', function () {
        it('it can set the minimum temperature to 10', function () {
            for (let i = 0; i < 11; i++) {
                thermostat.decreaseTemp();
            }
            expect(thermostat.temperature).toEqual(10)
        })
    })

})