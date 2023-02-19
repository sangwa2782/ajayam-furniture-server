import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({

    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    },
    image4: {
        type: String,
    },
    
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    sub_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sub_category",
    },
    name: {
        type: String,
    },
    company_name: {
        type: Number,
    },
    pro_details: {
        type: String,
    },
    material_used: {
        type: String,
    },
    life_span: {
        type: String,
    },
    warranty: {
        type: String,
    },
    support: {
        type: String,
    },
    highlights: {
        type: String,
    },
    policy: {
        type: String,
    },
    suitable_for: {
        type: String,
    },
    genre: {
        type: String,
    },
    market_price: {
        type: String,
    },
    ajayam_price: {
        type: String,
    },
    discount: {
        type: String,
    },



});

const add_furniture_product_Model = mongoose.model("furniture_product", gallerySchema);

export default add_furniture_product_Model;