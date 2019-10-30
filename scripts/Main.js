let beats;
let inter;

if (window.matchMedia("(min-width: 768px)").matches) {
	beats = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	inter = "16n";
} else {
	beats = [0, 1, 2, 3, 4, 5, 6, 7];
	inter = "8n";
}

let selectNotes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];

let sequencer = new Nexus.Sequencer('#sequencer', {
		    'mode': 'toggle',
		    'rows': 7,
		    'columns': beats.length,
		});

sequencer.colorize("accent","#fdcc52");
sequencer.colorize("fill","#212529");

let percussion = new Nexus.Sequencer('#percussion', {
		    'mode': 'toggle',
		    'rows': 4,
		    'columns': beats.length,
		});
percussion.colorize("accent","#fdcc52");
percussion.colorize("fill","#212529");

let button = new Nexus.Button('#button', {
		    'mode': 'toggle',
		    'state': false
		});

button.colorize("accent","#7d5683");
button.colorize("fill","#fdcc52");
button.colorize("mediumLight","#7d5683");

let slider = new Nexus.Slider('#slider', {
		    'mode': 'relative', 
		    'min': 80,
		    'max': 200,
		    'step': 0,
		    'value': 120
		});
slider.colorize("accent","#7b4397");

let text = new Nexus.Number('#text', {
		    'value': 6,
		    'min': 0,
		    'max': 20000,
		    'step': 1
		});

var select = new Nexus.Select('#notelist',{
  'size': [80,30],
  'options': selectNotes
})

text.link(slider);
