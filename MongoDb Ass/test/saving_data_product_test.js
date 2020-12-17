const assert = require('assert');
const Products = require('../models/product');


describe('saving Product records', () => {
    it('it saves Products data', (done) => {
        let newProduct = new Products({

                Productname: 'Iphone 12',
                Description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.',
                Price: '130000',
                Categoryname: [
                    { Category: 'Mobile phones' }
                ],
                quantity: 2

            })
            // promises (resolve, reject) => Promise.then( () => { }).catch( () => { })
        newProduct.save().then(() => {
            assert(newProduct.isNew === false)
            done();
        })
    })




})