const ex = {};
const playersData = require('../data/playersData');
let alphabetical;
let sortScore;
const playerNameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

function limitNumberWithinRange(num){
	const MIN =  1;
	const MAX =  100;
	const parsed = parseInt(num)
	return Math.min(Math.max(parsed, MIN), MAX)
  }



// ex.createPlayers = (playerData) => {
// 	return new Promise((resolve, reject) => {
// 		playersData.createPlayers(playerData).then(creatableData => {
// 			return resolve(creatableData);
// 		}, err => {
// 			return reject(err);
// 		});
// 	});
// };
//--------------------------//
ex.createPlayers = (creatableData) => {
	return new Promise((resolve, reject) => {
		const playersLength = creatableData.length;
		if (playersLength == undefined) {
			if (playerNameRegex.test(creatableData.playerName)) {
				const playerAge = limitNumberWithinRange(creatableData.age);
				playersData.createPlayers(creatableData.playerName, creatableData.score, playerAge).then(playerData => {
					return resolve(playerData);
				}, err => {
					return reject(err);
				});
			} else {
				console.log("player name is not in the given form");
				return resolve("player name is not in the given form");
			}
		}
		else {
			for (let i = 0; i < playersLength; i++) {
				//for(players of updatableData){
					if (playerNameRegex.test(creatableData[i].playerName)) {
						const playerAge = limitNumberWithinRange(creatableData[i].age);
					playersData.createPlayers(creatableData[i].playerName, creatableData[i].score, playerAge).then(playerData => {
						return resolve(playerData);
					}, err => {
						return reject(err);
					});
				} else {
					console.log("player name is not in the given form");
					return resolve("player name is not in the given form");
				}
			}
		}
	});
};
//------------------------------//
ex.updatePlayers = (updatableData) => {
	return new Promise((resolve, reject) => {
		const playersLength = updatableData.length;
		if (playersLength == undefined) {
			playersData.updatePlayers(updatableData._id, updatableData.playerName, updatableData.score, updatableData.age).then(UpdatedData => {
				return resolve(UpdatedData);
			}, err => {
				return reject(err);
			});
		}
		else {
			for (let i = 0; i < playersLength; i++) {
				//for(players of updatableData){
				playersData.updatePlayers(updatableData[i]._id, updatableData[i].playerName, updatableData[i].score, updatableData[i].age).then(UpdatedData => {
					return resolve(UpdatedData);
				}, err => {
					return reject(err);
				});
			}
		}
	});
};

ex.listPlayers = () => {
	return new Promise((resolve, reject) => {
		playersData.listPlayers().then(result => {

			alphabetical = result.sort((a, b) => {

				let playerA = a.playerName, playerB = b.playerName;
				if (playerA < playerB)
					return -1;
				if (playerA > playerB)
					return 1;
				return 0;
			});

			sortScore = alphabetical.sort((a, b) => {
				return b.score - a.score;
			})

			return resolve(sortScore);
		}, err => {
			return reject(err);
		});
	});
};

ex.deletePlayers = (deletableData) => {
	return new Promise((resolve, reject) => {
		const playersLength = deletableData.length;
		if (playersLength === undefined) {
			playersData.deletePlayers(deletableData._id).then(deletingData => {
				return resolve(deletingData);
			}, err => {
				return reject(err);
			});
		}
		else {
			for (let i = 0; i < playersLength; i++) {
				//for(let players of deletableData){
				playersData.deletePlayers(deletableData[i]._id).then(deletingData => {
					return resolve(deletingData);
				}, err => {
					return reject(err);
				});
			}
		}
	});
};

module.exports = ex;