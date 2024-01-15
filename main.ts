input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(_4)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showNumber(_3)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(_2)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showNumber(_1)
})
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
_1 = 0
_2 = 0
_3 = 0
_4 = 0
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        basic.pause(3000)
    }
    _1 += 1
    if (_1 == 1000) {
        _2 += 1
        _1 = 0
    }
    if (_2 == 60) {
        _3 += 1
        _2 = 0
    }
    if (_3 == 60) {
        _4 += 1
        _3 = 0
    }
})
