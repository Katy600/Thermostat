function Thermostat() {
    'use strict';
    this.temperature = 20;
    this.up = function(){
      return this.temperature += 1;
    };
    this.down = function() {
      return this.temperature -= 1;
    };
}

// Thermostat.prototype.up = function() {
//   return this.temperature += 1;
// };

// Thermostat.prototype.down = function() {
//   return this.temperature -= 1;
// };
