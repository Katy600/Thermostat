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

    function gettingJSON(){
        document.write("jquery loaded");
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=e94cf196f79c9a4953efca1ae95b2ff4",function(json){
            document.write(JSON.stringify(json));
        });
    };

    document.getElementById("weather").innerHTML = gettingJSON();

});
