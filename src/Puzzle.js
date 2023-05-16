import React, { useState } from 'react';

const Puzzle = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['New York', 'London', 'Paris', 'Dublin'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which continent is home to the largest rainforest in the world?',
      options: ['Africa', 'South America', 'Asia', 'North America'],
      correctAnswer: 'South America'
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Euro', 'Dollar', 'Pound'],
      correctAnswer: 'Yen'
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Jane Austen', ' Charles Dickens', ' Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    {
      question: 'Who painted the famous artwork "Mona Lisa"?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci'
    },
    {
      question: 'Who is CEO of Tesla?',
      options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tony Stark'],
      correctAnswer: 'Elon Musk'
    }
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
            <p>You answered all questions correctly!</p>
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
