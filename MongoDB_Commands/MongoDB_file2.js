// Indexing

db.employees.find().pretty();

db.employees.ensureIndex({"Email":1});

db.employees.getIndexes();

db.employees.dropIndex({"Email":1});


// Aggregation

db.employees.aggregate([{$group: {_id: "$Gender", Total: {$sum: 1}}}]);

db.employees.aggregate([{$group: {_id: "$Gender", MaxAge: {$max: "$Age"}}}]);

db.employees.aggregate([{$group: {_id: "$Gender", MinAge: {$min: "$Age"}}}]);