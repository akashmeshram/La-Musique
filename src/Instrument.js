import { majorScale, minorScale } from './MusicScale';

class Instrument {
  constructor(){
    this.percussion = ["hh", "hho", "kick", "snare"];
    this.scale = majorScale['C'];
    this.scaleType = 'Major Scale';
	}

  set musicScaleType(type) {
    this.scaleType = type;
    this.musicScale = this.scale;
  }

  set musicScale(scale) {
    if (this.scaleType === 'Major Scale') {
      this.scale = majorScale[scale];
    } else 
    if (this.scaleType === 'Minor Scale'){
      this.scale = minorScale[scale];
    }
  }

  get musicScaleType() {
    return this.musicScaleType;
  }

  get musicScale() {
    return this.scale;
  }
}

export default Instrument;