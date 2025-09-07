# Triad Game

## Description
The Triad Game is a web application designed to help you learn and practice musical triads interactively. Whether you're a beginner musician or just looking to sharpen your understanding of chord structures, this app provides a fun way to quiz yourself on major, minor, diminished, and augmented triads.

## How It Works
The app uses a hashmap to store and retrieve musical triads efficiently. Each triad is represented as a key-value pair, where the key is the name of the triad (e.g., "C Major") and the value is an array of its notes (e.g., ["C", "E", "G"]). This structure allows for quick access to triads, supports filtering by type or root note, and ensures accurate validation of user answers.

## Key Features:
- **Select Specific Triads**: Choose which types of triads (Major, Minor, Diminished, Augmented) you'd like to practice.
- **Root Note Filtering**: Focus on triads starting from a specific note (e.g., only C triads or all notes).
- **Inversion Support**: Answers are accepted in any inversion, as long as they contain the correct notes.
- **Interactive Feedback**: Receive instant feedback on your answers to track your progress.

## Installation
To get started with the project locally, clone the repository and install dependencies:
git clone https://github.com/jkramer321/Triad-Building-Game.git
cd Triad-Building-Game
npm install

## Usage

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
⚠️ Note: This is irreversible—only eject if absolutely necessary.

## How to Play
1. Open the app in your browser.
2. Use the **Root Note Selector** to choose a specific note or leave it set to "All Notes."
3. Use the **Triad Filters** to enable or disable specific triad types (e.g., Major, Minor).
4. Click **Start Quiz** to begin.
5. Enter your answer in the text box using notes separated by commas (e.g., C, E, G)
6. Submit your answer to receive feedback.
7. Click Next Question to practice a new triad.

##Technology Stack
- **Frontend**: React.js
- **Styling**: CSS
- **Hashmap**: Used to store and manage triads for efficient access.
- **Testing**: Jest with React Testing Library

## License
This project is licensed under the MIT License. See the LICENSE file for details.
