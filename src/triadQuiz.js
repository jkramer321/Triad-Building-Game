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
    })

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
     */
    const startQuiz = () => {
        //creaing an array of triads
        const triads = Object.keys(triadMap).filter((triad) =>{
            //filtering the triads based on seleced triad types
            const triadType = triad.split(" ")[1];
            return triadTypes[triadType];
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
     * 
     */
    //checking the answer function
    const checkAnswer = () => {
        //ensure it is a correct triad
        if(!currTriad) return;

        //getting the correct answer
        const correctAnswer = triadMap[currTriad];
        const userInput = userAnswer.split(",").map((note) => note.trim());

        //checking if the user answer is correct
       const isCorrect=
            //checking if the user answer is correct
            userInput.every(
                (note, index) => 
                note.toLowerCase() === correctAnswer[index].toLowerCase()
            );
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
            <div class="form-group">
                <h2 className ="triad">Spell The Following Triad: {currTriad}</h2>
                <input className="input"
                    value={userAnswer} 
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter triad notes here sparated by commas"
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