const assert = require('assert');
const Users = require('../models/user');
const mongoose = require('mongoose');

describe('saving user records', () => {

    it('it saves a record to db', (done) => {
        let newUser = new Users({
            name: 'John',
            email: 'johnwick@gmail.com',
            password: 'johnwick123',
            country: 'USA'


        })

        // promises (resolve, reject) => Promise.then( () => { }).catch( () => { })
        newUser.save().then(() => {
            assert(newUser.isNew === false)
            done();
        })
    })

})