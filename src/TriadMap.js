//creating a map of triads to their respective notes 
const triadMap = {
    //Cb Triads
    "Cb Major": ["Cb", "Eb", "Gb"],
    "Cb Minor": ["Cb", "Ebb", "Gb"],
    "Cb Diminished": ["Cb", "Ebb", "Gbb"],
    "Cb Augmented": ["Cb", "Eb", "G"],

    // C Triads
    "C Major": ["C", "E", "G"],
    "C Minor": ["C", "Eb", "G"],
    "C Diminished": ["C", "Eb", "Gb"],
    "C Augmented": ["C","E","G#"],

    // C# Triads
    "C# Major":["C#", "E#", "G#"],
    "C# Minor":["C#","E","G#"],
    "C# Diminished":["C#", "E","G"],
    "C# Augmented":["C#","E#","G##"],

    //Db Triads
    "Db Major":["Db","F","Ab"],
    "Db Minor":["Db","Fb","Ab"],
    "Db Diminished":["Db","Fb","Abb"],
    "Db Augmented":["Db","F","A"],

    // D Triads
    "D Major":["D", "F#", "A"],
    "D Minor":["D","F","A"],
    "D Diminished":["D","F","Ab"],
    "D Augmented":["D","F#","A#"],

    // D# Triads
    "D# Major":["D#","F","A#"],
    "D# Minor":["D#","Fb","A#"],
    "D# Diminished":["D#","Fb","A"],
    "D# Augmented":["D#","F","A##"],

    //Eb Triads
    "Eb Major":["Eb","G","Bb"],
    "Eb Minor":["Eb","Gb","Bb"],
    "Eb Diminished":["Eb","Gb","Bbb"],
    "Eb Augmented":["Eb","G","B"], 

    // E Triads
    "E Major":["E","G#","B"],
    "E Minor":["E","G","B"],
    "E Diminished":["E","G","Bb"],
    "E Augmented":["E","G#","B#"],

    // F Triads
    "F Major":["F","A","C"],
    "F Minor":["F","Ab","C"],
    "F Diminished":["F","Ab","Cb"],
    "F Augmented":["F","A","C#"],

    // F# Triads
    "F# Major":["F#","A#","C#"],
    "F# Minor":["F#","A","C#"],
    "F# Diminished":["F#","A","C"],
    "F# Augmented":["F#","A#","C##"],

    // Gb Triads
    "Gb Major":["Gb","Bb","Db"],
    "Gb Minor":["Gb","Bbb","Db"],
    "Gb Diminished":["Gb","Bbb","Dbb"],
    "Gb Augmented":["Gb","Bb","D"],

    // G Triads
    "G Major":["G","B","D"],
    "G Minor":["G","Bb","D"],
    "G Diminished":["G","Bb","Db"],
    "G Augmented":["G","B","D#"],

    // G# Triads
    "G# Major":["G#","B#","D#"],
    "G# Minor":["G#","B","D#"],
    "G# Diminished":["G#","B","D"],
    "G# Augmented":["G#","B#","D##"],

    // Ab Triads
    "Ab Major":["Ab","C","Eb"],
    "Ab Minor":["Ab","Cb","Eb"],
    "Ab Diminished":["Ab","Cb","Ebb"],
    "Ab Augmented":["Ab","C","E"],

    // A Triads
    "A Major":["A","C#","E"],
    "A Minor":["A","C","E"],
    "A Diminished":["A","C","Eb"],
    "A Augmented":["A","C#","E#"],

    // A# Triads
    "A# Major":["A#","C##","E#"],
    "A# Minor":["A#","C#","E#"],
    "A# Diminished":["A#","C#","E"],
    "A# Augmented":["A#","C##","E##"],

    // Bb Triads
    "Bb Major":["Bb","D","F"],
    "Bb Minor":["Bb","Db","F"],
    "Bb Diminished":["Bb","Db","Fb"],
    "Bb Augmented":["Bb","D","F#"],

    // B Triads
    "B Major":["B","D#","F#"],
    "B Minor":["B","D","F#"],
    "B Diminished":["B","D","F"],
    "B Augmented":["B","D#","F##"],

    // B# Triads
    "B# Major":["B#","D","F"],
    "B# Minor":["B#","D#","F#"],
    "B# Diminished":["B#","D#","F#"],
    "B# Augmented":["B#","D","F#"],


};

export default triadMap;

