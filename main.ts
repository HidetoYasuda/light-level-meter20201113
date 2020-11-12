let reading = 0
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    reading = input.lightLevel()
    while (input.buttonIsPressed(Button.B)) {
        led.plotBarGraph(
        reading,
        255
        )
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 50) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
    }
})
