import { majorScale, minorScale } from './MusicScale';

class Instrument {
  constructor(){
    this.percussion = ["hh", "hho", "kick", "snare"];
    this.note = 'C';
    this.scale = majorScale[this.note];
    this.scaleType = 'Major Scale';
	}

  musicScaleChange() {
    if (this.scaleType === 'Major Scale') {
      this.scale = majorScale[this.note];
    } else 
    if (this.scaleType === 'Minor Scale'){
      this.scale = minorScale[this.note];
    }
  }

  set musicNote(note) {
    this.note = note;
    this.musicScaleChange();
  }

  set musicScale(type) {
    this.scaleType = type;
    this.musicScaleChange();
  }

  getNotes(activations) {
    const data  = activations.map((value, id) => (value) ? this.scale[id] : null);
    return data.filter(val => val);
  }

  getPercussions(activations) {
    return activations.map((value, id) => (value) ? this.percussion[id] : null).filter(val => val);
  }
}

export default Instrument;