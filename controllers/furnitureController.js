
import frunitureModel from "../models/furniture_model.js";

class furnitureController {

    static addNewProduct = async (req, res) => {
        const { name } = req.body;
        try {
            if (name) {
                const newCategory = frunitureModel({
                    name: name,
                });

                const saved_category = await newCategory.save();
                if (saved_category) {
                    return res.status(200).json({ message: "file upload successfully" });
                }
            } else {
                return res.status(400).json({ message: "all fields are required" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };


}

export default furnitureController;