const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    Category: { type: String, required: true }
})

const ProductSchema = new Schema({

    Productname: { type: String, required: true },
    Description: { type: String },
    Price: { type: Number, required: true },
    Categoryname: [categorySchema],
    quantity: { type: Number, required: true }
})
const Products = mongoose.model('items', ProductSchema);

module.exports = Products;