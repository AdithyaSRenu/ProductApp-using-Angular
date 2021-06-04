const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ProductDb", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
  
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    productId : Number,
    description : String,
    imageUrl : String,
    price : Number,
    productCode : String,
    productName : String,
    releaseDate : String,
    starRating : Number
    
});

var ProductData = mongoose.model('product',NewProductSchema);
module.exports = ProductData;