const assert = require('assert');
const Products = require('./../models/product');


describe('reading products records', () => {
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
        });
    })

    it('it finds one record from the db', (done) => {
        Products.findOne({ Productname: 'Macbook' }).then((data) => {
            console.log(data);
            assert(data.name === 'Macbook')
            done();
        })
    })

    // FindById
    it('it finds one record by Id', () => {
        Products.findOne({ _id: newProduct._id }).then((data) => {
            assert(data._id === newProduct._id)
            done();
        })
    })
})