const express = require('express');
const app = express();
const port = 3000;

// Dummy data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

app.use(express.json());

// Endpoint to get user info
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(port, () => {
  console.log(`ServiceA listening at http://localhost:${port}`);
});
