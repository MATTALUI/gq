if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); }
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const knex = require('./knex.js');
const app = express();
const port = process.env.PORT || 8000;

app.get('/api/questions',(req,res,next)=>{
  knex("questions")
  .returning('*')
  .then((questions)=>{
    res.send(questions);
  });
});

app.post('/api/questions/:number', (req,res,next)=>{
  knex('questions')
  .where('number', req.params.number)
  .increment('count',1)
  .then(()=>{
    res.sendStatus(200);
  });
});

app.delete('/api/questions', (req,res,next)=>{
  knex('questions')
  .update({count: 0})
  .then(()=>{
    res.sendStatus(200);
  });
});

app.use('*', (req,res,next)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, ()=>{
  console.log(`listening on ${port}`);
});
