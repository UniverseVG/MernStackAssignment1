const mongoose = require('mongoose');

const URL = 'mongodb+srv://new-user:new-user@mycluster1.heelh.mongodb.net/Assignment?retryWrites=true&w=majority';
mongoose.connect(URL);

// Event driven node.js
// Asynchronous
mongoose.connection.once('open', () => {
    console.log('Connection to the Database successful');
}).on('error', (error) => {
    console.log('Unable to connect', error)
});