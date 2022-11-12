const {Schema,model} = require("mongoose")

const ProductSchema = new Schema({
    image:String,
    name:String,
    price:Number,
    description:String
})

const PRODUCT = model("product", ProductSchema)

module.exports = PRODUCT;