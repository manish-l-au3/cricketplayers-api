const router = require('express').Router();
const bodyParser = require('../middlewares/bodyParser');
const httpErrors = require('../utils/httpErrors');
const playersLibrary = require('../library/playersLibrary');

router.post('/createPlayers', bodyParser, (req, res) => {
	console.log(req.body);
	playersLibrary.createPlayers(req.body).then(createPlayers => {
		res.status(httpErrors.CREATED.statusCode).send(createPlayers);
	}, error => {
		console.log(error);
		res.status(httpErrors.BAD_REQUEST.statusCode).send(httpErrors.BAD_REQUEST);
	});
});

router.post('/updatePlayers', bodyParser, (req, res) => {
	playersLibrary.updatePlayers(req.body).then(updatablePlayers => {
		res.status(httpErrors.OK.statusCode).send(updatablePlayers.value);
	}, error => {
		console.log(error);
		res.status(httpErrors.BAD_REQUEST.statusCode).send(httpErrors.BAD_REQUEST);
	});
});

router.get('/listPlayers', bodyParser, (_req, res) => {
	playersLibrary.listPlayers().then(listingPlayers => {
		res.status(httpErrors.OK.statusCode).send(listingPlayers);
	}, error => {
		console.log(error);
		res.status(httpErrors.BAD_REQUEST.statusCode).send(httpErrors.BAD_REQUEST);
	});
});

router.post('/deletePlayers', bodyParser, (req, res) => {
	playersLibrary.deletePlayers(req.body).then(deletingPlayers => {
		res.status(httpErrors.OK.statusCode).send(deletingPlayers.result);
	}, error => {
		console.log(error);
		res.status(httpErrors.NOT_FOUND.statusCode).send(httpErrors.UNAUTHORIZED);
	});
});

module.exports = router;