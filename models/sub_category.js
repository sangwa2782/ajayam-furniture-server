import mongoose from "mongoose";

const sub_categorySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    sub_category: {
        type: String,
    },
});

const sub_categoryModel = mongoose.model("sub_category", sub_categorySchema);

export default sub_categoryModel;