import { keyboardAudio, percussionAudio } from './settings';

class Player {
  constructor(){
    this.time = 0;
    this.KBNotes = [];
    this.PNotes = [];
    this.keyboard = new Tone.Players(keyboardAudio, { "volume": -10, "fadeOut": "64n",}).toMaster();
    this.percussion = new Tone.Players(percussionAudio, { "volume": -10, "fadeOut": "4n",}).toMaster();
	}

  play() {
    this.KBNotes.map(note => this.keyboard.get(note).start(this.time, 0, "4n"));
    this.PNotes.map(note => this.percussion.get(note).start(this.time, 0, "16n"));
  }

  set keyBoardNotes(value) {
    this.KBNotes = value;
  }

  set percussionNotes(value) {
    this.PNotes = value;
  }

  set setTime(value) {
    this.time = value;
  }
}

export default Player;