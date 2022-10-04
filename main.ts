input.onButtonPressed(Button.A, function () {
    Guess += 1
    basic.showNumber(Guess)
})
input.onButtonPressed(Button.AB, function () {
    if (Guess > Secret_) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    } else if (Secret_ > Guess) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        Tries += 1
        basic.showNumber(Tries)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Guess += -1
    basic.showNumber(Guess)
})
let Tries = 0
let Guess = 0
let Secret_ = 0
Secret_ = randint(0, 20)
basic.forever(function () {
	
})
