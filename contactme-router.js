const https = require('https');
const path = require('path');

module.exports = function(app){





var all = ''
app.get('/contactme', function(req, res){


    res.sendFile(path.join(__dirname, '/public/contactus.html'));



  });

app.get('/contactme-sub', function(req, res) {
      nemail = req.query.new_email;
      comment = req.query.comment;
      subject = req.query.subject;
      nname = req.query.new_name;
      comment = nname + "\n" + nemail  +"\n" +  comment
      require('./sendMail.js')(subject, comment);
      res.send("Thank You For Sending Us A Message! We will get back to you as soon as possible via email.")
});
}
