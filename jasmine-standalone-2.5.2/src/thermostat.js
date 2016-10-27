function Thermostat() {
    'use strict';
    this.temperature = 20;
    this.up = function(){
      return this.temperature += 1;
    };
    this.down = function() {
      if (this.temperature > 10) {
        return this.temperature -= 1;
      }
      return this.temperature
    };
}

// Thermostat.prototype.up = function() {
//   return this.temperature += 1;
// };

// Thermostat.prototype.down = function() {
//   return this.temperature -= 1;
// };
