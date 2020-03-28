const db = require('../db/db').getDb();

const ex = {};

// ex.createPlayers = (creatableData) => {
// 	return new Promise((resolve, reject) => {
// 		db.collection('players').insert(creatableData, (err, res) => {
// 			if (err) return reject(err);
// 			console.log('players created');
// 			return resolve(res.ops);
// 		})
// 	});
// };
//------------------------//
ex.createPlayers = (playerName, playerScore, playerAge) => {
	return new Promise((resolve, reject) => {

		const playerData = {playerName:playerName,score:playerScore,age:playerAge};
		db.collection('players').insertOne(playerData, (err, res) => {
			if (err) return reject(err);
			console.log('players created');
			return resolve(res.ops);
		})
	});
};
//---------------------------//

ex.updatePlayers = (oid, playerName, playerScore, playerAge) => {
	return new Promise((resolve, reject) => {
		const query = { _id: require('mongodb').ObjectId(oid) };
		const newvalues = { $set: { playerName: playerName, score: playerScore, age: playerAge } }
		db.collection('players').findOneAndUpdate(query, newvalues, { new: true }, (err, res) => {
			if (err) return reject(err);
			console.log('Updated');
			return resolve(res);
		})
	});
};

ex.listPlayers = (data) => {
	return new Promise((resolve, reject) => {
		db.collection('players').find({}).toArray((err, res) => {
			if (err) return reject(err);
			return resolve(res);
		})
	});
};

ex.deletePlayers = (id) => {
	return new Promise((resolve, reject) => {
		console.log('data layer', id);
		const queries = { _id: require('mongodb').ObjectId(id) };
		db.collection('players').deleteOne(queries, (err, res) => {
			if (err) return reject(err);
			console.log('deleted');
			return resolve(res);
		})
	});
};


module.exports = ex;
