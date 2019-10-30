let keys = new Tone.Players({
    "A": "./audio/casio/A1.[mp3|ogg]",
    "A#": "./audio/casio/As1.[mp3|ogg]",
    "Bb": "./audio/casio/As1.[mp3|ogg]",
    "B": "./audio/casio/B1.[mp3|ogg]",
    "C": "./audio/casio/C2.[mp3|ogg]",
    "C#": "./audio/casio/Cs2.[mp3|ogg]",
    "Db": "./audio/casio/Cs2.[mp3|ogg]",
    "D": "./audio/casio/D2.[mp3|ogg]",
    "D#": "./audio/casio/Ds2.[mp3|ogg]",
    "Eb": "./audio/casio/Ds2.[mp3|ogg]",
    "E": "./audio/casio/E2.[mp3|ogg]",
    "F": "./audio/casio/F2.[mp3|ogg]",
    "F#": "./audio/casio/Fs2.[mp3|ogg]",
    "Gb": "./audio/casio/Fs2.[mp3|ogg]",
    "G": "./audio/casio/G2.[mp3|ogg]",
    "G#": "./audio/casio/Gs1.[mp3|ogg]",
    "Ab": "./audio/casio/Gs1.[mp3|ogg]",
}, {
    "volume": -10,
    "fadeOut": "64n",
}).toMaster();

let steps = new Tone.Players({
    "hh": "./audio/505/hh.[mp3|ogg]",
    "hho": "./audio/505/hho.[mp3|ogg]",
    "kick": "./audio/505/kick.[mp3|ogg]",
    "snare": "./audio/505/snare.[mp3|ogg]",
}, {
    "volume": -10,
    "fadeOut": "4n",
}).toMaster();

let notes = ["C", "D", "E", "F", "G", "A", "B"];
let pers = ["hh", "hho", "kick", "snare"];

let loop = new Tone.Sequence(function(time, col) {
    let column1 = sequencer.matrix.column(col);
    let column2 = percussion.matrix.column(col);
    sequencer.next();
    percussion.next();
    for (let i = 0; i < 7; i++) {
        if (column1[i] === 1) {
            let vel = Math.random() * 0.5 + 0.5;
            keys.get(notes[i]).start(time, 0, "4n", 0, vel);
        }
    }
    for (let i = 0; i < 4; i++) {
        if (column2[i] === 1) {
            let vel = Math.random() * 0.5 + 0.5;
            steps.get(pers[i]).start(time, 0, "16n", 0, vel);
        }
    }
}, beats, inter);

Tone.Transport.start();

select.on('change',function(v) {
  notes = majorScale[v.value];
})

slider.on('change', function(v) {
    Tone.Transport.bpm.value = v;
});

button.on('change', function(v) {
    if (v) {
        Tone.context.resume().then(() => {
            loop.start();
        });
    } else {
        Tone.context.resume().then(() => {
            sequencer.stepper.value = 15;
            sequencer.next();
            percussion.stepper.value = 15;
            percussion.next();
            loop.stop();
        });
    }
});