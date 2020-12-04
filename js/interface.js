$(document).ready(function() {
    let thermostat = new Thermostat();
    displayTemperature();

    $('#increase-temp').click(function() {
        thermostat.increaseTemp();
        displayTemperature();
    })

    $('#decrease-temp').click(function() {
        thermostat.decreaseTemp();
        displayTemperature();
    })

    $('#reset-temp').click(function() {
        thermostat.reset();
        displayTemperature();
    })

    $('#ps-on').click(function() {
        thermostat.powerSavingOn();
        displayTemperature();
    })

    $('#ps-off').click(function() {
        thermostat.powerSavingOff();
        displayTemperature();
    })

    function displayTemperature() {
        $('#current-temp').text(thermostat.temperature.currentTemp);
        $('#current-temp').attr("class", thermostat.energyUsage());
    }
})