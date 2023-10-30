const five = require("johnny-five");
const wait = require("wait-for-stuff");
const board = new five.Board({port:"COM5"});


board.on("ready", function() {
    let myButton = new five.Button(2);
    let myLED1 = new five.Led(6);
    let myLED2 = new five.Led(11);
    let myLED3 = new five.Led(8);
    let myLED4 = new five.Led(9);
    let myLED5 = new five.Led(10);

    myButton.on("down", function() {
        myLED1.on();
        myLED2.on();
        myLED3.on();
        myLED4.on();
        myLED5.on();
        wait.for.time(3);
        myLED1.off();
        myLED2.off();
        myLED3.off();
        myLED4.off();
        myLED5.off();
        console.log("Button pressed");
    });
});
