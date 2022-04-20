const express = require('express');
const cors = require('cors');
const req = require('express/lib/request');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users = [
  { name: 'Allison', job: 'Goal-Keeper', club: 'Liverpool' },
  { name: 'Robertson', job: 'Left-Back', club: 'Liverpool' },
  { name: 'Matip', job: 'Center-Back', club: 'Liverpool' },
  { name: 'Van Dyk', job: 'Center-Back', club: 'Liverpool' },
  { name: 'Trent Alexander', job: 'Right-Back', club: 'Liverpool' },
  { name: 'Henderson', job: 'Mid-Fielder', club: 'Liverpool' },
  { name: 'Fabinho', job: 'Mid-Fielder', club: 'Liverpool' },
  { name: 'Salah', job: 'Right-Winger', club: 'Liverpool' },
  { name: 'Mane', job: 'Left-Winger', club: 'Liverpool' },
]

app.get('/', (req, res) => {
  res.send('Hello my over smarty-watch');
});

app.get('/users', (req, res) => {
  //filter by query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(users[id]);
});

app.post('/user', (req, res) => {
  console.log('request: ', req.body);
  const user = req.body;
  users.push(user);
  res.send(user);
})

app.listen(port, () => {
  console.log(' listening to port 5000 ');
});