'use strict';

class PowerSaver {

    constructor(default_state = true) {
        this.state = default_state;
    }

    activate(){
        this.state = true;
    }

    deactivate(){
        this.state = false;
    }

}