'use strict';

function PowerSaver( default_state = true ) {
    this.state = default_state;
}

PowerSaver.prototype = {
    activate: function() {
        this.state = true;
    },

    deactivate: function() {
        this.state = false;
    }
}