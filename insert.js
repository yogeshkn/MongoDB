var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017';
const dbName = 'fruits';
MongoClient.connect(url, function(err,client) {
    const db = client.db(dbName);
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to ', url);
        
        var collection = db.collection('apples');

        var doc1 = {name:'red apples', coloe:'red'};
        var doc2 = {name:'green apples', color:'green'};
        
        collection.insert([doc1,doc2], function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log('%d docs inserted', res.insertedCount);
            }
            client.close();
        });

        
    }
});