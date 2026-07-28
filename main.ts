radio.setGroup(1)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -30) {
        radio.sendString("FWD")
    } else if (input.rotation(Rotation.Pitch) < 30) {
        radio.sendString("REV")
    } else if (input.rotation(Rotation.Roll) < 30) {
        radio.sendString("RIGHT")
    } else if (input.rotation(Rotation.Roll) < -30) {
        radio.sendString("LEFT")
    } else {
        radio.sendString("STOP")
    }
})
