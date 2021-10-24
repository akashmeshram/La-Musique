import {majorScale} from './MusicScale';

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

const selectScale = new Nexus.Select('#scalelist',{
  'size': [80,30],
  'options': ['Major Scale', "Minor Scale"]
})

text.link(slider);

export {button, select, slider, selectScale};