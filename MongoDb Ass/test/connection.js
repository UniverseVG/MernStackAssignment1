const mongoose = require('mongoose');


const URL = 'mongodb+srv://new-user:new-user@mycluster1.heelh.mongodb.net/Assignment?retryWrites=true&w=majority';


before((done) => {
    mongoose.connect(URL);
    // Event driven node.js
    // Asynchronous
    mongoose.connection.once('open', () => {
        console.log('Connection to the Database successful');
        done();
    }).on('error', (error) => {
        console.log('Unable to connect', error)
    });
})

// Drop my collections before each test
beforeEach(async() => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        // note: collection.remove() has been depreceated.        
        await collection.deleteOne();
    }
});