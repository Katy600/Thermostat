function Thermostat() {
    'use strict';
    this.temperature = 20;
    this.isPowerSavingOn = true;
  };

Thermostat.prototype.up = function() {
  if (this.temperature < 32) {
  return this.temperature += 1;
  }
};

  Thermostat.prototype.down = function() {
    if (this.temperature > 10) {
    return this.temperature -= 1;
    }
  };

  Thermostat.prototype.switchOff = function() {
    this.isPowerSavingOn = false;
  };

  Thermostat.prototype.switchOn = function() {
    this.isPowerSavingOn = true;
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20;
  };
// };
// Thermostat.prototype =  {
//   up: function(){ return this.method2()},
//
//   method2: function(){}
// };
