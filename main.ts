let DAU = 0
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    DAU = randint(1, 6)
    basic.showString("" + (DAU))
})
