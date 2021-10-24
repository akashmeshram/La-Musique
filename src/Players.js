const keyboardAudio = {
  "A" : "./audio/keyboard/A1.[mp3|ogg]" ,
  "A#": "./audio/keyboard/As1.[mp3|ogg]",
  "Bb": "./audio/keyboard/As1.[mp3|ogg]",
  "B" : "./audio/keyboard/B1.[mp3|ogg]" ,
  "Cb": "./audio/keyboard/B1.[mp3|ogg]" ,
  "C" : "./audio/keyboard/C2.[mp3|ogg]" ,
  "C#": "./audio/keyboard/Cs2.[mp3|ogg]",
  "Db": "./audio/keyboard/Cs2.[mp3|ogg]",
  "D" : "./audio/keyboard/D2.[mp3|ogg]" ,
  "D#": "./audio/keyboard/Ds2.[mp3|ogg]",
  "Eb": "./audio/keyboard/Ds2.[mp3|ogg]",
  "E" : "./audio/keyboard/E2.[mp3|ogg]" ,
  "Fb": "./audio/keyboard/E2.[mp3|ogg]" ,
  "F" : "./audio/keyboard/F2.[mp3|ogg]" ,
  "F#": "./audio/keyboard/Fs2.[mp3|ogg]",
  "Gb": "./audio/keyboard/Fs2.[mp3|ogg]",
  "G" : "./audio/keyboard/G2.[mp3|ogg]" ,
  "G#": "./audio/keyboard/Gs1.[mp3|ogg]",
  "Ab": "./audio/keyboard/Gs1.[mp3|ogg]",
};

const percussionAudio = {
  "hh"   : "./audio/percussion/hh.[mp3|ogg]"   ,
  "hho"  : "./audio/percussion/hho.[mp3|ogg]"  ,
  "kick" : "./audio/percussion/kick.[mp3|ogg]" ,
  "snare": "./audio/percussion/snare.[mp3|ogg]",
}


const pianoPlayers = new Tone.Players(keyboardAudio, { "volume": -10, "fadeOut": "64n",}).toMaster();
const percussionPlayers = new Tone.Players(percussionAudio, { "volume": -10, "fadeOut": "4n",}).toMaster();

export {pianoPlayers, percussionPlayers};