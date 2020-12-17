const assert = require('assert');
const Products = require('./../models/product');

describe('deleting products records', () => {
    let newProduct;
    beforeEach((done) => {
        newProduct = new Products({
            Productname: 'Macbook',
            Description: 'Speed and responsiveness. The M1 chip and macOS Big Sur work together to make the entire system snappier.',
            Price: '240000',
            Categoryname: [
                { Category: 'Laptops' }
            ],
            quantity: 4
        })
        newProduct.save().then(() => {
            done();
        })
    })
    it('it deletes one record from the db', (done) => {
        Products.findByIdAndDelete({ _id: newProduct._id }).then(() => {
            Products.findById({ _id: newProduct._id }).then((data) => {
                assert(data === null)
                done();
            })
        })
    })
})