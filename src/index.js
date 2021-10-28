import Player from './Players';
import { button, select, slider, selectScale } from './UI';
import { beats, inter} from './settings';
import Tape from './Tape';
import Instrument from './Instrument';
import Sequencer from './Sequencer';

const tapeMachine = new Tape(beats, inter);
const track = new Instrument();
const player = new Player();
const sequencer = new Sequencer();

tapeMachine.on('scroll', (time, col) => {
    sequencer.setPosition = col;
    sequencer.step();
    
    player.setTime = time;
    player.keyBoardNotes = track.getNotes(sequencer.kbActivations);
    player.percussionNotes = track.getPercussions(sequencer.pActivations);
    player.play();
});

tapeMachine.on('stop-scroll', () => {
    sequencer.reset();
})

tapeMachine.init();

select.on('change',function(v) {
    track.musicNote = v.value;
})

slider.on('change', function(v) {
    tapeMachine.bpm = v;
});

button.on('change', function(v) {
    if (v) tapeMachine.start();
    else tapeMachine.stop();
});

selectScale.on('change',function(v) {
    track.musicScale = v.value;
    console.log({v})
})