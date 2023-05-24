function createMelody () {
    for (let index = 0; index <= melody.length - 1; index++) {
        octave = randint(1, 3)
        if (octave == 1) {
            melody[index] = scale._pickRandom() * octave
        } else if (octave == 2) {
            melody[index] = scale._pickRandom() * octave
        } else if (octave == 3) {
            melody[index] = scale._pickRandom() * octave
        }
    }
    music.setTempo(bpm._pickRandom())
    executeMelody()
}
function executeMelody () {
    for (let index = 0; index <= melody.length - 1; index++) {
        music.playTone(melody[index], beat._pickRandom())
    }
}
let step = 0
let octave = 0
let scale: number[] = []
let bpm: number[] = []
let melody: number[] = []
let beat: number[] = []
beat = [256, 512]
melody = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
// penta Cm
bpm = [
500,
100,
150,
200,
250
]
// penta Cm
scale = [
131,
156,
165,
175,
185,
196,
233,
247
]
basic.forever(function () {
    step += 1
    step = step % 8
    createMelody()
})
