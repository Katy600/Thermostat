$( document ).ready(function() {

  thermostat = new Thermostat();
document.getElementById("energyMode").innerHTML = thermostat.energyMode;
document.getElementById("temperature").innerHTML = thermostat.temperature;

  $( "#reset" ).click(function( event ) {
    thermostat.reset();
    thermostat.currentEnergy();
    document.getElementById("temperature").innerHTML = thermostat.temperature;
    document.getElementById("energyMode").innerHTML = thermostat.energyMode;
 });


   $( "#up" ).click(function( event ) {
     thermostat.up();
     thermostat.currentEnergy();
     console.log(thermostat.temperature)
     document.getElementById("temperature").innerHTML = thermostat.temperature;
     document.getElementById("energyMode").innerHTML = thermostat.energyMode;
   });

  $( "#down" ).click(function( event ) {
    thermostat.down();
    thermostat.currentEnergy();
     console.log(thermostat.temperature)
     document.getElementById("temperature").innerHTML = thermostat.temperature;
    document.getElementById("energyMode").innerHTML = thermostat.energyMode;
  });

    $( "#powerSaving" ).click(function( event ) {
      thermostat.switch();
    });


});
