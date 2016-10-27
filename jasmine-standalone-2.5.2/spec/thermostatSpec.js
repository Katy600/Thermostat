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
   });
});
