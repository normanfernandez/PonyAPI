const express = require('express');
const app = express();

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('OPEN ON PORT:' + port);
});

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/public/index.html");
})
