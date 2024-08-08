// Create web server
const express = require('express');
const app = express();

// Set up body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Comments array
const comments = [
  { username: 'Alice', comment: 'I love your blog!' },
  { username: 'Bob', comment: 'Good job' },
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
