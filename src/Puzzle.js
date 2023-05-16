import React, { useState } from 'react';

const Puzzle = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const questions = [
    {
      question: 'If AIRLINE is written as ENILRIA7, then RAILWAY will be written as -',
      options: ['YAWLIAR7', 'YAWLIAR8', 'YAWILAR7', 'YAWILAR8'],
      correctAnswer: 'YAWLIAR7'
    },
    {
      question: 'Which continent is home to the largest rainforest in the world?',
      options: ['Africa', 'South America', 'Asia', 'North America'],
      correctAnswer: 'South America'
    },
    {
      question: 'Monday : April : : Friday : ?',
      options: ['July', 'Saturday', 'August', 'Tuesday'],
      correctAnswer: 'August'
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Euro', 'Dollar', 'Pound'],
      correctAnswer: 'Yen'
    },
    {
      question: 'In a group of five person A, B, C, D and E one plays Tennis, one plays Chess and one Hockey. A and D are unmarried women and· play no game. There is a couple among them where E is husband of C. No women plays either Chess or Hockey. B is the brother of C and he neither plays Tennis nor Chess. Who plays Hockey here?',
      options: ['A', 'B', 'C', 'E'],
      correctAnswer: 'B'
    },
    {
      question: 'What will be the next number in the series 13, 17, 19, 23, 29, .......?',
      options: ['31', '33', '35', '37'],
      correctAnswer: '31'
    },
    {
      question: 'Who is CEO of Tesla?',
      options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tony Stark'],
      correctAnswer: 'Elon Musk'
    },
    {
      question: 'A, Band C are intelligent, A, D and E are laborious and D, C and E are honest and . A, B, and E are ambitious. Which of the following are not honest?',
      options: ['A and B', 'C and A', 'A and D', 'C, A and B'],
      correctAnswer: 'A and B'
    },
    // Add more questions as needed
  ];

  const handleAnswerSubmit = (selectedOption) => {
    const currentQuestion = questions[currentStep];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setCurrentStep(currentStep + 1);
    } else {
      // Handle incorrect answer (dead-end)
      setShowSolution(true);
    }
  };

  const saveScore = () => {
    // Implement your code to save the score in the database
    // You'll need to make a request to your backend server and handle the database operations
    // Example code:
    fetch('/api/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log('Score saved:', data);
        setSaveMessage('Score saved successfully!');
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error('Error saving score:', error);
        setSaveMessage('Failed to save score.');
      });
  };

  const showPuzzle = () => {
    if (showSolution) {
      return (
        <div>
          <h2>Game Over!</h2>
          <p>Your score: {score} / {questions.length}</p>
          <button onClick={saveScore}>Save</button>
          <p>{saveMessage}</p>
        </div>
      );
    }

    if (currentStep >= questions.length) {
      if (score === questions.length) {
        return (
          <div>
            <h2>Congratulations!</h2>
            <p>You answered all questions correctly! You found the Treasure!!!!!</p>
            <button onClick={saveScore}>Save</button>
            <p>{saveMessage}</p>
          </div>
        );
      } else {
        return (
          <div>
            <h2>Game Over!</h2>
            <p>Your score: {score} / {questions.length}</p>
            <button onClick={saveScore}>Save</button>
            <p>{saveMessage}</p>
          </div>
        );
      }
    }

    const currentQuestion = questions[currentStep];

    return (
      <div>
        <h2>Question {currentStep + 1}</h2>
        <p>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option) => (
            <li key={option}>
              <button onClick={() => handleAnswerSubmit(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Puzzle</h1>
      {showPuzzle()}
    </div>
  );
};

export default Puzzle;
