const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Ritu#1202',
  database: 'puzzle_app',
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database');
  }
});

// Create a route to handle saving scores
app.post('/api/scores', (req, res) => {
  const { score } = req.body;

  // Perform the database operation
  const query = 'INSERT INTO scores (score) VALUES (?)';
  connection.query(query, [score], (error, result) => {
    if (error) {
      console.error('Error saving score:', error);
      res.status(500).json({ message: 'Failed to save score' });
    } else {
      console.log('Score saved:', result);
      res.json({ message: 'Score saved successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
