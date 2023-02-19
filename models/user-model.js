import mongoose from "mongoose";

// import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
    contact: String,
    address: String,
    shopp_owner: String,
    shopp_name: String,
    shopp_address: String,
    shopp_category: String,
    product_name: String,
    product_img: String,
    product_details: String,
    product_price: String,
    product_discount: String,
    product_sell_price: String,
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user', userSchema);

export default user; 