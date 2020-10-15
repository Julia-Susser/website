const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 2000;



app.use(express.static('public'));
app.listen(port, () => console.log(`listening on port ${port}!`));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/indexx.html'));
  })

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/indexx.html'));
})
app.get('/jeopardy', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/jeopardy/jeopardy.html'));
  })

app.get('/resume', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/resume/resume.html'));
})

app.get('/simon', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/simon/simon.html'));
})
app.get('/research-internship', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/uchicago.html'));
})

require('./contactme-router.js')(app);
