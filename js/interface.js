$(document).ready(function() {

    let getTemperature = (cityName) => {
        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=72e11d5fe6e5b767dd8571d40abf06d6&units=metric`, (response) => {
        $("#render-temperature").text(
            cityName + ' is ' + Math.floor(response.main.temp)
        );
    })
    };

    let thermostat = new Thermostat();
    displayTemperature();
    getTemperature('London');

    $('#city-choice').change(function() {
        getTemperature($(this).val());
    })

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