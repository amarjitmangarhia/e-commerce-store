const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    
    header: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    altTag: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    desc: [
        {
          type: String,
          required: true,
        },
      ],
}, {collection: "productInfo"});


const collectionName = "productInfo";
const productModal = mongoose.model('User', productSchema, collectionName);

module.exports = productModal;