import {majorScale} from './MusicScale';
import {beats, inter} from './settings';

const sequencer = new Nexus.Sequencer('#sequencer', {
		    'mode': 'toggle',
		    'rows': 7,
		    'columns': beats.length,
		});

sequencer.colorize("accent","#fdcc52");
sequencer.colorize("fill","#212529");

const percussion = new Nexus.Sequencer('#percussion', {
		    'mode': 'toggle',
		    'rows': 4,
		    'columns': beats.length,
		});
percussion.colorize("accent","#fdcc52");
percussion.colorize("fill","#212529");

const button = new Nexus.Button('#button', {
		    'mode': 'toggle',
		    'state': false
		});

button.colorize("accent","#7d5683");
button.colorize("fill","#fdcc52");
button.colorize("mediumLight","#7d5683");

const slider = new Nexus.Slider('#slider', {
		    'mode': 'relative', 
		    'min': 80,
		    'max': 200,
		    'step': 0,
		    'value': 120
		});
slider.colorize("accent","#7b4397");

const text = new Nexus.Number('#text', {
		    'value': 6,
		    'min': 0,
		    'max': 20000,
		    'step': 1
		});

const select = new Nexus.Select('#notelist',{
  'size': [80,30],
  'options': Object.keys(majorScale)
})

text.link(slider);

export {button, select, slider, percussion, sequencer, beats, inter};