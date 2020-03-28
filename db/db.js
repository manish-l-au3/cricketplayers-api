const config = require('../env/env');
let MongoClient = require('mongodb').MongoClient;
let _db={};
module.exports = {
	connectToServer :  (callback) => {
		
		 MongoClient.connect(config.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
		 (err, client) => {
			
			_db = client.db(config.dbname);
			return callback(err);
		});
	},
	// use this function in any routes to get the db
	getDb: () => {
		return _db;
	}
};