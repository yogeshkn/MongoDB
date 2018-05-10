var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017';

const dbName = 'fruits';

MongoClient.connect(url, function(err, client) {
	const db = client.db(dbName);
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to ", url);
		client.close();
	}
});