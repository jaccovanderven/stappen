let keuze = 0
input.onGesture(Gesture.Shake, function () {
    keuze = randint(1, 3)
    if (keuze == 1) {
        basic.showIcon(IconNames.Square)
    } else if (keuze == 2) {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})
