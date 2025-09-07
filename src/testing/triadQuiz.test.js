import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import TriadQuiz from '../triadQuiz';

// Mock window.alert
global.alert = jest.fn();

//Mock C major triad
jest.mock("./triadMap", () => ({
    "C Major": ["C", "E", "G"],
}));

// Test suite for TriadQuiz Component
describe("TriadQuiz Component", () => {
    // Test case 1 for the TriadQuiz Header
    test("renders header correctly", () =>{
        //render the component
        render(<TriadQuiz/>);
        //checking if the header is rendered correctly
        expect(screen.getByText("Learn Triads!")).toBeInTheDocument();
    });

    // Test case 2 for the TriadQuiz Start Button
    test("renders start button correctly", () =>{
        //render the component
        render(<TriadQuiz/>);
        //checking if the start button is rendered correctly
        expect(screen.getByText("Start Quiz")).toBeInTheDocument();
    });

    // Test case 3 for toggling the filter buttons
    test("toggles filter buttons correctly", () =>{
        //render the component
        render(<TriadQuiz/>);
        
        //checking if the filter buttons are rendered correctly
        const majorButton = screen.getByText(/Major/);

        // Initial state (active)
        expect(majorButton).toHaveClass("active");

        // Simulating a click
        fireEvent.click(majorButton);
        
        // After click (inactive)
        expect(majorButton).toHaveClass("inactive");
    });

    // Test case 4 for an alert to be displayed when no filters are selected
    test("displays an alert when no filters are selected", () =>{
        //render the component
        render(<TriadQuiz/>);

        // Turning off all filters
        const buttons = screen.getAllByRole("button", {name: /✓/});
        buttons.forEach((button) => fireEvent.click(button));

        // Clicking the start button
        fireEvent.click(screen.getByText(/Start Quiz/));

        // Checking if the alert is displayed
        expect(global.alert).toHaveBeenCalledWith("Please select at least one triad type");
    });

    // Test case 5 for starting the quiz with a random triad
    test("starts quiz with a random triad", () =>{
        //render the component
        render(<TriadQuiz/>);
        //starting the quiz
        fireEvent.click(screen.getByText(/Start Quiz/));

        //Expect a random triad to be displayed
        const triadText = screen.getByText(/Spell The Following Triad:/);

        //checking if the feedback is empty
        expect(screen.queryByText("Correct!")).toBeNull();
        //checking if the triad text is displayed
        expect(triadText).toBeInTheDocument();
    });

    // Test case 6 for checking the answer
    test("displays the correct feedback for a correct answer", () =>{
        //render the component
        render(<TriadQuiz/>);

        //starting the quiz
        fireEvent.click(screen.getByText(/Start Quiz/));

        // Ensure the selected triad is "C Major"
        const triadText = screen.getByText(/Spell The Following Triad:/);
        expect(triadText).toHaveTextContent("C Major");

        //inputting the correct answer
        fireEvent.change(screen.getByPlaceholderText(/Enter triad notes here separated by commas/),
            {target: {value: "C, E, G"},
        });
        //submitting the answer
        fireEvent.click(screen.getByText(/Submit/));

        //checking if the feedback is correct
        expect(screen.getByText("Correct!")).toBeInTheDocument();
    });

    // Test Case 7 for checking the feedback for an incorrect answer
    test("displays correct feedback for an incorrect answer", () =>{
        //render the component
        render(<TriadQuiz/>);

        //starting the quiz
        fireEvent.click(screen.getByText(/Start Quiz/));

        //Enter an incorrect answer
        fireEvent.change(screen.getByPlaceholderText(/Enter triad notes here separated by commas/),{
            target: {value: "This is wrong"},
        });
        //submitting the answer
        fireEvent.click(screen.getByText(/Submit/));

        //checking if the feedback is incorrect
        expect(screen.getByText(/Incorrect. The correct answer is/)).toBeInTheDocument();
    });

    // Test Case 8 for checking if the next question button works
    test("displays the next question correctly", () =>{
        //render the component
        render(<TriadQuiz/>);
    
        //starting the quiz
        fireEvent.click(screen.getByText(/Start Quiz/));

        // Ensure the selected triad is "C Major"
        const triadText = screen.getByText(/Spell The Following Triad:/);
        expect(triadText).toHaveTextContent("C Major");

        //inputting the correct answer
        fireEvent.change(screen.getByPlaceholderText(/Enter triad notes here separated by commas/),
            {target: {value: "C, E, G"},
        });

        //submitting the answer
        fireEvent.click(screen.getByText(/Submit/));

        //checking if the feedback is correct
        expect(screen.getByText("Correct!")).toBeInTheDocument();

        //clicking the next question button
        fireEvent.click(screen.getByText(/Next Question/));

        //checking if the feedback is empty
        expect(screen.queryByText("Correct!")).toBeNull();

        //checking if the triad text is displayed
        expect(screen.getByText(/Spell The Following Triad:/)).toBeInTheDocument();

    });

    // Test Case 9 for checking the note selector works properly
    test("displays the correct triad based on the selected note", ()=>{
        //render the component
        render(<TriadQuiz/>);

        //making sure the note selector is rendered
        const noteSelector = screen.getByLabelText(/Select a Root Note/);
        expect(noteSelector).toBeInTheDocument();

        //verifying the default value of All Notes
        expect(noteSelector).toHaveValue("All Notes");

        //changing the selected note to C
        fireEvent.change(noteSelector, {target: {value: "C"}});
        expect(noteSelector).toHaveValue("C");

        //starting the quiz
        fireEvent.click(screen.getByText(/Start Quiz/));

        //check that the triad starts with C
        const triadText = screen.getByText(/Spell The Following Triad:/);
        expect(triadText).toHaveTextContent(/C/);
    })
});