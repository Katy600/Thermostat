describe('Thermostat', function () {
   describe('Temperature', function () {
      it('starts at 20 degrees', function () {
        var thermostat = new Thermostat();
        expect(thermostat.temperature).toBe(20);
      });

      it('can be increased by 1', function () {
        var thermostat = new Thermostat();
        thermostat.up();
        expect(thermostat.temperature).toBe(21);
      });

      it('can be decrease by 1', function () {
        var thermostat = new Thermostat();
        thermostat.down();
        expect(thermostat.temperature).toBe(19);
      });
      it('has minimum temperature of 10', function () {
        var thermostat = new Thermostat();
        for (i = 0; i < 11; i++) {
          thermostat.down();
        }
        expect(thermostat.temperature).toBe(10);
      });
   });
   describe('Power saving mode', function(){
     it('has on saving mode by default', function(){
       var thermostat = new Thermostat();
       expect(thermostat.isPowerSavingOn).toBe(true);
     });

     it('can be switched on and off', function(){
        var thermostat = new Thermostat();
        thermostat.switchOff();
       expect(thermostat.isPowerSavingOn).toBe(false)
     });
     //If power saving mode is off, the maximum temperature is 32 degrees
     it('when saving_mode is off, the maximum temperature is 32', function(){
        var thermostat = new Thermostat();
        thermostat.switchOff();
        for (i = 0; i < 15; i++) {
          thermostat.up();
        }
       expect(thermostat.temperature).toBe(32)
     });
     it('can switch onto power saving mode', function(){
       var thermostat = new Thermostat();
       thermostat.switchOff();
       thermostat.switchOn();
       expect(thermostat.isPowerSavingOn).toBe(true)
     });
     //You can reset the temperature to 20 with a reset function
     it('can reset the temperature to 20 with a reset function', function(){
       var thermostat = new Thermostat();
       thermostat.down();
       thermostat.reset();
       expect(thermostat.temperature).toBe(20);
     });
     //You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
     it("can ask about thermostat's current energy usage - low-usage", function(){
       var thermostat = new Thermostat();
       thermostat.temperature = 17;
       thermostat.currentEnergy()
       expect(thermostat.energyMode).toBe("low-usage");
     });
     it("can ask about thermostat's current energy usage - high-usage", function(){
       var thermostat = new Thermostat();
       thermostat.temperature = 26;
       thermostat.currentEnergy()
       expect(thermostat.energyMode).toBe("high-usage");
     });
   });
});
