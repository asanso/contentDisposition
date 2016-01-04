var express = require("express");

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(function (req, res, next) {	 
	res.setHeader('Content-Disposition', 'attachement');
	next();
});

app.use('/', express.static('files'));

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = port;
});
