def on_button_a():
    basic.show_number(_4)
    basic.show_leds("""
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        """)
    basic.show_number(_3)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    basic.show_number(_2)
    basic.show_leds("""
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        """)
    basic.show_number(_1)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

_4 = 0
_3 = 0
_2 = 0
_1 = 0
_1 = 0
_2 = 0
_3 = 0
_4 = 0

def on_forever():
    global _1, _2, _3, _4
    basic.pause(3000)
    _1 += 1
    if _1 == 1000:
        _2 += 1
        _1 = 0
    if _2 == 60:
        _3 += 1
        _2 = 0
    if _3 == 60:
        _4 += 1
        _3 = 0
basic.forever(on_forever)
