import mongoose from "mongoose";

const orderedSchema = new mongoose.Schema({
    pro_id: {
        type: String
    },
    proname: {
        type: String
    },
    pro_imgname: {
        type: String
    },
    pro_price: {
        type: Number
    },
    pro_quantity: {
        type: Number
    },
    pro_total: {
        type: Number
    },
    pro_delivery_charge: {
        type: Number,
    },
    pro_amount: {
        type: Number,
    },
    name: {
        type: String,
    },
    contact1: {
        type: Number,
    },
    contact2: {
        type: Number,
    },
    tola: {
        type: String,
    },
    village: {
        type: String,
    },
    block: {
        type: String,
    },
    pincode: {
        type: Number,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    time: {
        type: String,
    }

},{timestamps: true});

const order_list_Model = mongoose.model("ordered_List", orderedSchema);

export default order_list_Model;