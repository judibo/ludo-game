var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ludo', { useNewUrlParser: true });

var db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
