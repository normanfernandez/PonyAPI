const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const defaultPony = {
	name : "Twiligth Sparkle",
	ponyStyle : {
		color : "purple"
	}
}

var ponies = [defaultPony];

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
	res.status(200).send(ponies);
});

app.post('/api/pony', (req, res) => {
	ponies.push(req.body);
	res.status(201).send();
});

app.delete('/api/pony', (req, res) => {
	ponies = [];
	ponies.push(defaultPony);
	res.status(204).send();
});
