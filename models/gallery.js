import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    image: {
        type: String
    },
    image2: {
        type: String
    },

    image3: {
        type: String
    },

    image4: {
        type: String
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    company_name: {
        type: String,
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
    support: {
        type: String,
    },
    genre: {
        type: String,
    },
    market_price: {
        type: Number,
    },
    ajayam_price: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    delivery_charge: {
        type: Number,
    }

},{timestamps: true});

const furniture_product_Model = mongoose.model("category_furniture", gallerySchema);

export default furniture_product_Model;