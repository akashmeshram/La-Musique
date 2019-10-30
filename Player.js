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