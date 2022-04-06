input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    pins.servoWritePin(AnalogPin.P1, 360)
    basic.showString("Stand clear")
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    pins.analogWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.West)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.showString("Stand clear")
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
