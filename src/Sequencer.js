import { beats } from './settings';

class Sequencer {
  constructor() {
    this.postition = 0;

    this.keyboard = new Nexus.Sequencer('#sequencer', {
      'mode': 'toggle',
      'rows': 7,
      'columns': beats.length,
    });
    this.keyboard.colorize("accent", "#fdcc52");
    this.keyboard.colorize("fill", "#212529");

    this.percussion = new Nexus.Sequencer('#percussion', {
          'mode': 'toggle',
          'rows': 4,
          'columns': beats.length,
      });
    this.percussion.colorize("accent", "#fdcc52");
    this.percussion.colorize("fill", "#212529");
  }

  step() {
    this.keyboard.next();
    this.percussion.next();
  }

  reset() {
    this.keyboard.stepper.value = -1;
    this.percussion.stepper.value = -1;
    this.step();
  }

  set setPosition(value) {
    this.postition = value;
  }

  get kbActivations() {
    return this.keyboard.matrix.column(this.postition);
  }

  get pActivations() {
    return this.percussion.matrix.column(this.postition);
  }
}

export default Sequencer;