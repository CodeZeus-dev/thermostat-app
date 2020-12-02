'use strict';

describe("Temperature", function() {

    let temperature;

    beforeEach(function() {
        temperature = new Temperature();
    })

    describe("Set default temperature", function() {
        it("sets default temperature to 20 degrees", function() {
            expect(temperature.defaultTemp).toEqual(20);
        })
    })
})