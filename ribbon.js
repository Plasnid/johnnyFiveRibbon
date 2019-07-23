/**
 * wiring sketch at:
 * https://cdn.sparkfun.com/assets/learn_tutorials/5/1/4/example_circuit_bb-pulldown.png
 * 
 * The challenge:  have the light on pin 13 turn on when a value of 9 is pressed
 */
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor("A0");
  
  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.on("change", function() {
    console.log(this.scaleTo(0, 10));
  });
});