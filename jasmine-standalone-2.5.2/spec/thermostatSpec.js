describe('Thermostat', function () {
  describe('Temperature', function () {
      it('starts at 20 degrees', function () {
      var thermostat = new Thermostat();
      expect(thermostat.temperature).toBe(20);
    });
  });
});
