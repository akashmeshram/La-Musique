const majorScale = {
  "C"     :  ["C" , "D" , "E" , "F" , "G" , "A" , "B" , "C" ],
  "C#/Db" :  ["Db", "Eb", "F" , "Gb", "Ab", "Bb", "C" , "Db"],
  "D"     :  ["D" , "E" , "F#", "G" , "A" , "B" , "C#", "D" ],
  "D#/Eb" :  ["Eb", "F" , "G" , "Ab", "Bb", "C" , "D" , "Eb"],
  "E"     :  ["E" , "F#", "G#", "A" , "B" , "C#", "D#", "E" ],
  "F"     :  ["F" , "G" , "A" , "Bb", "C" , "D" , "E" , "F" ],
  "F#/Gb" :  ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F" , "Gb"],
  "G"     :  ["G" , "A" , "B" , "C" , "D" , "E" , "F#", "G" ],
  "G#/Ab" :  ["Ab", "Bb", "C" , "Db", "Eb", "F" , "G" , "Ab"],
  "A"     :  ["A" , "B" , "C#", "D" , "E" , "F#", "G#", "A" ],
  "A#/Bb" :  ["Bb", "C" , "D" , "Eb", "F" , "G" , "A" , "Bb"],
  "B"     :  ["B" , "C#", "D#", "E" , "F#", "G#", "A#", "B" ]
};

const minorScale = {
  "A"     :  ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "A" ],
  "A#/Bb" :  ["Bb", "C" , "Db", "Eb", "F" , "Gb", "Ab", "Bb"],
  "B"     :  ["B" , "C#", "D" , "E" , "F#", "G" , "A" , "B" ],
  "C"     :  ["C" , "D" , "Eb", "F" , "G" , "Ab", "Bb", "C" ],
  "C#/Db" :  ["Db", "Eb", "Fb", "Gb", "Ab", "A" , "B" , "Db"],
  "D"     :  ["D" , "E" , "F" , "G" , "A" , "Bb", "C" , "D" ],
  "D#/Eb" :  ["Eb", "F" , "Gb", "Ab", "Bb", "Cb", "Db", "Eb"],
  "E"     :  ["E" , "F#", "G" , "A" , "B" , "C" , "D" , "E" ],
  "F"     :  ["F" , "G" , "Ab", "Bb", "C" , "Db", "Eb", "F" ],
  "F#/Gb" :  ["F#", "G#", "A" , "B" , "C#", "D" , "E" , "F#"],
  "G"     :  ["G" , "A" , "Bb", "C" , "D" , "Eb", "F" , "G" ],
  "G#/Ab" :  ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb", "Ab"]
};

export {majorScale, minorScale};