import {EventEmitter} from 'events';

class Sound extends EventEmitter {
  constructor(beats, interval){
		super();
    this.music = null;
    this.beats = beats;
    this.interval = interval;
	}

  init() {
    this.music = new Tone.Sequence(this.loop, this.beats, this.interval);
    Tone.Transport.start();
  }

  setting(beats, interval){
    this.beats = beats;
    this.interval = interval;
	}

  start() {
    Tone.context.resume().then(() =>  this.music.start());
  }

  stop() {
    Tone.context.resume().then(() => {
      this.emit('stop-scroll');
      this.music.stop();
    });
  }

  loop = (time, beat) => {
    this.emit('scroll', time, beat);
  }

  set bpm(v) {
    Tone.Transport.bpm.value = v;
  }
}

export default Sound;