const assert = require('assert');
const Products = require('../models/user');


describe('reading products records', () => {
    let newProduct;
    beforeEach((done) => {
        newProduct = new Products({
                Productname: 'Macbook',
                Description: 'Speed and responsiveness. The M1 chip and macOS Big Sur work together to make the entire system snappier.',
                Price: '130000',
                Categoryname: [
                    { Category: 'Laptops' }
                ],
                quantity: 10
            })
            // promises (resolve, reject) => Promise.then( () => { }).catch( () => { })
        newProduct.save().then(() => {
            assert(newProduct.isNew === false)
            done();
        })
    })
})