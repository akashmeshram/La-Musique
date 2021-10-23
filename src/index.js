import { pianoPlayers, percussionPlayers } from './Players';
import { majorScale } from './MusicScale';
import {button, select, slider, percussion, sequencer} from './UI';
import {beats, inter} from './settings';

let scale = ["C", "D", "E", "F", "G", "A", "B"];
let pers = ["hh", "hho", "kick", "snare"];

const callbackLoop = (time, col) => {
    let column1 = sequencer.matrix.column(col);
    let column2 = percussion.matrix.column(col);
    sequencer.next();
    percussion.next();
    for (let i = 0; i < 7; i++) {
        if (column1[i] === 1) {
            const vel = Math.random() * 0.5 + 0.5;
            pianoPlayers.get(scale[i]).start(time, 0, "4n", 0, vel);
        }
    }
    for (let i = 0; i < 4; i++) {
        if (column2[i] === 1) {
            const vel = Math.random() * 0.5 + 0.5;
            percussionPlayers.get(pers[i]).start(time, 0, "16n", 0, vel);
        }
    }
}

const music = new Tone.Sequence(callbackLoop, beats, inter);

Tone.Transport.start();

select.on('change',function(v) {
    scale = majorScale[v.value];
})

slider.on('change', function(v) {
    Tone.Transport.bpm.value = v;
});

button.on('change', function(v) {
    if (v) {
        Tone.context.resume().then(() => {
            music.start();
        });
    } else {
        Tone.context.resume().then(() => {
            sequencer.stepper.value = 15;
            sequencer.next();
            percussion.stepper.value = 15;
            percussion.next();
            music.stop();
        });
    }
});