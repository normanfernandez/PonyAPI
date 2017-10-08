const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var ponies = [{
	name : "Twiligth Sparkle",
	ponyStyle : {
		color : "purple"
	}
}];

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('OPEN ON PORT:' + port);
});

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.get('/api/pony', (req, res) => {
	res.send(ponies);
});

app.post('/api/pony', (req, res) => {
	ponies.push(req.body);
	res.end(JSON.stringify(res.body), null, 2);
});
