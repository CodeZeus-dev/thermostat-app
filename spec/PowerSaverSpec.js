'use strict';

describe('PowerSaver', function() {

    let powersaver;
    let thermostat;

    beforeEach(function() {
        powersaver = new PowerSaver();
        thermostat = new Thermostat();
    })

    describe('set maximum temperature based on the power saving mode', function() {
        it('changes the powerSaver state to true when activated', function() {
            powersaver.activate();
            expect(powersaver.state).toEqual(true);
        })

        it('sets maximum temperature to 25 if power saving mode is on', function() {
            thermostat.powerSavingOn();
            expect(thermostat.temperature.maxTemp).toEqual(25);
        })

        it('changes the powerSaver state to true when activated', function() {
            powersaver.deactivate();
            expect(powersaver.state).toEqual(false);
        })

        it('sets maximum temperature to 32 if power saving mode is off', function() {
            thermostat.powerSavingOff();
            expect(thermostat.temperature.maxTemp).toEqual(32);
        })
    })
})