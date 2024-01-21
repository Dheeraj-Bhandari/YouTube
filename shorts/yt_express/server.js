const express = require('express');
const cors = require("cors");
const axios = require('axios').default;
require('dotenv').config();
const { DBconnection } = require('./config/db.config');
DBconnection();
require('./Config/redis.config')

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  client.get('todos', (err, reply) => {
    if (err || !reply) {
      axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
          const todos = response.data;
          client.set('todos', JSON.stringify(todos)); // Setting In Redis
          res.send(todos);
        })
        .catch((error) => {
          console.error('Error fetching todos:', error);
          res.status(500).send('Error fetching todos');
        });
    } else {
      res.send(JSON.parse(reply)); // Found in Redis, parse back to JSON
    }
  });
});

// app.use("/User", UserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
