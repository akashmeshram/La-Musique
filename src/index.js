import { pianoPlayers, percussionPlayers } from './Players';
import { button, select, slider, percussion, sequencer, selectScale } from './UI';
import { beats, inter} from './settings';
import Sound from './Sound';
import Instrument from './Instrument';

const soundPlayer = new Sound(beats, inter);
const track = new Instrument();

soundPlayer.on('scroll', (time, col) => {
    const column1 = sequencer.matrix.column(col);
    const column2 = percussion.matrix.column(col);
    sequencer.next();
    percussion.next();

    column1.map((note, id) => {
        if (note === 1) {
            const vel = Math.random() * 0.5 + 0.5;
            pianoPlayers.get(track.scale[id]).start(time, 0, "4n", 0, vel);
        }
    });

    column2.map((note, id) => {
        if (note === 1) {
            const vel = Math.random() * 0.5 + 0.5;
            percussionPlayers.get(track.percussion[id]).start(time, 0, "16n", 0, vel);
        }
    });
});
soundPlayer.on('stop-scroll', () => {
    sequencer.stepper.value = -1;
    percussion.stepper.value = -1;
    sequencer.next();
    percussion.next();
})

soundPlayer.init();

select.on('change',function(v) {
    track.musicScale = v.value;
})

slider.on('change', function(v) {
    soundPlayer.bpm = v;
});

button.on('change', function(v) {
    if (v) soundPlayer.start();
    else soundPlayer.stop();
});

selectScale.on('change',function(v) {
    track.musicScaleType = v.value;
})