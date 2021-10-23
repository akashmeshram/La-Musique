const pianoPlayers = new Tone.Players({
  "A": "./audio/casio/A1.[mp3|ogg]",
  "A#": "./audio/casio/As1.[mp3|ogg]",
  "Bb": "./audio/casio/As1.[mp3|ogg]",
  "B": "./audio/casio/B1.[mp3|ogg]",
  "Cb": "./audio/casio/B1.[mp3|ogg]",
  "C": "./audio/casio/C2.[mp3|ogg]",
  "C#": "./audio/casio/Cs2.[mp3|ogg]",
  "Db": "./audio/casio/Cs2.[mp3|ogg]",
  "D": "./audio/casio/D2.[mp3|ogg]",
  "D#": "./audio/casio/Ds2.[mp3|ogg]",
  "Eb": "./audio/casio/Ds2.[mp3|ogg]",
  "E": "./audio/casio/E2.[mp3|ogg]",
  "Fb": "./audio/casio/E2.[mp3|ogg]",
  "F": "./audio/casio/F2.[mp3|ogg]",
  "F#": "./audio/casio/Fs2.[mp3|ogg]",
  "Gb": "./audio/casio/Fs2.[mp3|ogg]",
  "G": "./audio/casio/G2.[mp3|ogg]",
  "G#": "./audio/casio/Gs1.[mp3|ogg]",
  "Ab": "./audio/casio/Gs1.[mp3|ogg]",
}, {
  "volume": -10,
  "fadeOut": "64n",
}).toMaster();

const percussionPlayers = new Tone.Players({
  "hh": "./audio/percussion/hh.[mp3|ogg]",
  "hho": "./audio/percussion/hho.[mp3|ogg]",
  "kick": "./audio/percussion/kick.[mp3|ogg]",
  "snare": "./audio/percussion/snare.[mp3|ogg]",
}, {
  "volume": -10,
  "fadeOut": "4n",
}).toMaster();

export {pianoPlayers, percussionPlayers};