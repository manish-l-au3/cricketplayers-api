const app = require('./app');
const http = require('http');
const port = process.argv[3] || 3000;
const server = http.createServer();
const mongoUtil = require('./db/db');
const config = require('./env/env');

server.listen(port, config.ip, () => {
	console.log(server.address().address + ':' + server.address().port);
});
console.log(config.port);

server.on('request', app);
mongoUtil.connectToServer((err) => {
	if (err) console.log(err);
	const playersRoutes = require('./routes/playersRoutes');

	app.get('/', (req, res) => {
		console.log('printing');
		res.send('<html><title>Node-mongo-boilerplate-players</title></html>');
	});
	app.use('/playersRoutes/', playersRoutes);

});