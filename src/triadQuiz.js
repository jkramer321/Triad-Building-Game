import React, { useState } from "react";
import triadMap from "./TriadMap";
import "./TriadQuiz.css";

/**
 * Function that creates a triad quiz
 */
const TriadQuiz = () => {
    //intializing state
    const [currTriad, setCurrTriad] = useState(null);
    const[userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");

    /**
     * Function that starts the quiz
     */
    const startQuiz = () => {
        //creaing an array of triads
        const triads = Object.keys(triadMap);
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
        <h1>Triad Quiz</h1>
        {!currTriad ?(
            <button onClick={startQuiz}>Start Quiz</button>
        ):(
            <div>
                <h2>Current Triad: {currTriad}</h2>
                <input className="input"
                    value={userAnswer} 
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter triad notes here sparated by commas"
                />
                <button className="buttons"onClick={checkAnswer}>Submit</button>
                <button className="buttons" onClick={startQuiz}>Next Question</button>
                <p>{feedback}</p>
            </div>
        )}
    </div>
    );
};

export default TriadQuiz;