import React, { useState } from "react";
import triadMap from "./TriadMap";
import "./triadQuiz.css";

/**
 * Function that creates a triad quiz
 */
const TriadQuiz = () => {
    //intializing state
    const [currTriad, setCurrTriad] = useState(null);
    const[userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [triadTypes, setTriadTypes] = useState({
        Major: true,
        Minor: true,
        Diminished: true,
        Augmented: true,
    });
    //State for selected root note
    const [selectedNote, setSelectedNote] = useState("All Notes");

    /**
     * Function to toggle triad types
     * 
     * @param {string} triadType
     */
    const toggleTriadType = (triadType) =>{
        setTriadTypes((prev) => ({
            ...prev,
            [triadType]: !prev[triadType],
        }));
    };

    /**
     * Function that starts the quiz
     * 
     * @returns {void}
     */
    const startQuiz = () => {
        //creaing an array of triads
        const triads = Object.keys(triadMap).filter((triad) =>{
            const [rootNote, triadType] = triad.split(" ");
            const typeMatches = triadTypes[triadType];
            const noteMatches = selectedNote === "All Notes" || rootNote === selectedNote;
            return typeMatches && noteMatches;
        })

        //checking if there are no triads
        if(triads.length === 0){
            //sending an alert to the user
            alert("Please select at least one triad type");
            return;
        }
        //getting random triad
        const randomTriad = triads[Math.floor(Math.random() * triads.length)];
        //setting the current triad
        setCurrTriad(randomTriad);
        //having both the feedback and user answer be empty
        setFeedback("");
        setUserAnswer("");
    };

    /**
     * Check the user answer
     * 
     * @returns {void}
     */
    const checkAnswer = () => {
        //ensure it is a correct triad
        if(!currTriad) return;

        //getting the correct answer
        const correctAnswer = triadMap[currTriad];
        const userInput = userAnswer.split(",").map((note) => note.trim());

        //checking if the user answer is correct
       const isCorrect=
            //checking if the user answer is correct
            userInput
                .map((note) => note.toLowerCase())
                .sort()
                .every((note, index) => note === correctAnswer.map((n) => n.toLowerCase()).sort()[index]);

        //checking if the user answer is correct ingores captilization for answer
        if(isCorrect){
            setFeedback("Correct!");
        }else{
            //wrong case
            setFeedback(`Incorrect. The correct answer is ${correctAnswer.join(", ")}`);
        }
    };

return(
    <div>
        <h1 className="header">Learn Triads!</h1>
        {/* Dropdown for selecting the root note */}
        <div className="note-selector">
            <label htmlFor="note-select">
                Select a Root Note:
            </label>
            <select
                className="select"
                id="note-select"
                value={selectedNote}
                onChange={(e) => setSelectedNote(e.target.value)}
            >
                <option value="All Notes">All Notes</option>
                <option value="C">C</option>
                <option value="C#">C#</option>
                <option value="Db">Db</option>
                <option value="D">D</option>
                <option value="D#">D#</option>
                <option value="Eb">Eb</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#">F#</option>
                <option value="Gb">Gb</option>
                <option value="G">G</option>
                <option value="G#">G#</option>
                <option value="Ab">Ab</option>
                <option value="A">A</option>
                <option value="A#">A#</option>
                <option value="Bb">Bb</option>
                <option value="B">B</option>
                <option value="B#">B#</option>
            </select>
        </div>

        <div className ="filterButtons">
            {[ "Major", "Minor", "Diminished", "Augmented"].map((triadType) => (
                <button
                    key = {triadType}
                    className = {`filter-button ${
                        triadTypes[triadType] ? "active" : "inactive"
                    }`}
                    onClick = {() => toggleTriadType(triadType)}
                    >
                        {triadType}{triadTypes[triadType] ? "✓" : ""}
                    </button>
            ))}
        </div>
        {!currTriad ?(
            <button className="startButton" onClick={startQuiz}>
                Start Quiz
            </button>
        ):(
            <div className="form-group">
                <h2 className ="triad">Spell The Following Triad: {currTriad}</h2>
                <input className="input"
                    value={userAnswer} 
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter triad notes here separated by commas"
                />
                <br/>
                <button className="buttons"onClick={checkAnswer}>Submit</button>
                <button className="buttons" onClick={startQuiz}>Next Question</button>
                <p className="feedbackText">
                    {feedback}
                </p>
            </div>
        )}
    </div>
    );
};

export default TriadQuiz;