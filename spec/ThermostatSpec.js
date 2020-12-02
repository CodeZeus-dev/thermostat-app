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

})