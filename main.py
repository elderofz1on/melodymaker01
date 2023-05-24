def createMelody():
    index = 0
    while index <= len(melody) - 1:
        melody[index] = scale._pick_random()
        index += 1
    index2 = 0
    while index2 <= len(melody) - 1:
        music.play_tone(melody[index2], music.beat(BeatFraction.WHOLE))
        index2 += 1
step = 0
melody: List[number] = []
scale: List[number] = []
scale = [262, 311, 392, 523, 622, 784, 932]
melody = [0, 0, 0, 0, 0, 0, 0, 0]

def on_forever():
    global step
    step += 1
    step = step % 8
    createMelody()
    basic.pause(5)
basic.forever(on_forever)
