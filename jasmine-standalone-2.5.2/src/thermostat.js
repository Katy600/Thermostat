function Thermostat() {
    'use strict';
    this.temperature = 20;
    this.isPowerSavingOn = true;
    this.energyMode = "medium-usage"
    this.maxMode = 25

  };

Thermostat.prototype.up = function() {
  if (this.temperature < this.maxMode) {
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
    this.maxMode = 32;
  };

  Thermostat.prototype.switchOn = function() {
    this.isPowerSavingOn = true;
    this.maxMode = 25;
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20;
  };

  Thermostat.prototype.currentEnergy = function() {
    if(this.temperature < 18) {
      this.energyMode = "low-usage";
    }
      else if(this.temperature > 25) {
        this.energyMode = "high-usage";
      }
      else {
        return "medium-usage";
      }
  };

  // };
// };
// Thermostat.prototype =  {
//   up: function(){ return this.method2()},
//
//   method2: function(){}
// };
