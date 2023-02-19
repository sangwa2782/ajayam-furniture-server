import galleryModel from "../models/gallery.js";
import categoryModel from "../models/category.js";
import sub_categoryModel from "../models/sub_category.js";
import add_furniture_product_Model from "../models/add_product.js";
import furniture_product_Model from "../models/gallery.js";
import order_list_Model from "../models/order_list.js";

import user from "../models/user-model.js";

class galleryController {

    //  UPLOAD DATABASE -----------------------
    static uploadImage = async (req, res) => {
        const { category } = req.body;
        try {
            if (category) {
                const addImage = furniture_product_Model({
                    image: req.files.image[0].filename,
                    image2: req.files.image2[0].filename,
                    image3: req.files.image3[0].filename,
                    image4: req.files.image4[0].filename,
                    category: category,
                    name: req.body.name,
                    price: req.body.price,
                    company_name: req.body.company_name,
                    pro_details: req.body.pro_details,
                    material_used: req.body.material_used,
                    life_span: req.body.life_span,
                    warranty: req.body.warranty,
                    support: req.body.support,
                    highlights: req.body.highlights,
                    policy: req.body.policy,
                    suitable_for: req.body.suitable_for,
                    genre: req.body.genre,
                    market_price: req.body.market_price,
                    ajayam_price: req.body.ajayam_price,
                    discount: req.body.discount,
                    delivery_charge: req.body.delivery_charge
                });
                const saved_image = await addImage.save();
                if (saved_image) {
                    return res.status(200).json({ message: "file upload successfully" });
                }
            } else {
                return res.status(400).json({ message: "all fields are required" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static addNewProduct = async (req, res) => {
        const { category } = req.body;
        const { sub_category } = req.body;
        try {
            console.log(sub_category);
            
            if (category) {
                const addProduct = add_furniture_product_Model({
                    image1: req.files.image1[0].filename,
                    image2: req.files.image2[0].filename,
                    image3: req.files.image3[0].filename,
                    image4: req.files.image4[0].filename,

                    category: category,
                    sub_category: req.body.sub_category,
                    name: req.body.name,
                    company_name: req.body.company_name,
                    pro_details: req.body.pro_details,
                    material_used: req.body.material_used,
                    life_span: req.body.life_span,
                    warranty: req.body.warranty,
                    support: req.body.support,
                    highlights: req.body.highlights,
                    policy: req.body.policy,
                    suitable_for: req.body.suitable_for,
                    genre: req.body.genre,
                    market_price: req.body.market_price,
                    ajayam_price: req.body.ajayam_price,
                    discount: req.body.discount,
                    
                });

                const saved_product = await addProduct.save();
                if (saved_product) {
                    return res.status(200).json({ message: "file upload successfully" });
                }
            } else {
                return res.status(400).json({ message: "all fields are required" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static addNewOrder = async (req, res) => {
        const { name } = req.body;
        console.log(name);
        try {
            if (name) {
                const newOrder = order_list_Model({
                    pro_id: req.body.pro_id,
                    proname: req.body.proname,
                    pro_imgname: req.body.pro_imgname,
                    pro_price: req.body.pro_price,
                    pro_quantity: req.body.pro_quantity,
                    pro_total: req.body.pro_total,
                    pro_delivery_charge: req.body.pro_delivery_charge,
                    pro_amount: req.body.pro_amount,
                    name: req.body.name,
                    contact1: req.body.contact1,
                    contact2: req.body.contact2,
                    tola: req.body.tola,
                    village: req.body.village,
                    block: req.body.block,
                    pincode: req.body.pincode,
                    city: req.body.city,
                    state: req.body.state,
                    time: req.body.time
                });
                const saved_new_order = await newOrder.save();
                if (saved_new_order) {
                    return res.status(200).json({ message: "file upload successfully" });
                }
            } else {
                return res.status(400).json({ message: "all fields are required" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static addNewCategory = async (req, res) => {
        const { name } = req.body;
        try {
            if (name) {
                const newCategory = categoryModel({
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

    static addNewSubCategory = async (req, res) => {
        const { category } = req.body;
        try {
            if (category) {
                const newsubCategory = sub_categoryModel({
                    category: category,
                    sub_category: req.body.sub_category
                });
                const saved_subcategory = await newsubCategory.save();
                if (saved_subcategory) {
                    return res.status(200).json({ message: "file upload successfully" });
                }
            } else {
                return res.status(400).json({ message: "all fields are required" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };


// SHOW DATABASE ------------------------------------
    static getAllProductList = async (req, res) => {
        try {
            const fetchAllProduct = await furniture_product_Model.find({});
            return res.status(200).json(fetchAllProduct);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static get_productList_byID = async (req, res) => {
        const {_id} = req.query;
        console.log(_id);
        try { 
            if (_id) {
                const fetch_product_byID = await furniture_product_Model.findById({_id: _id});
                return res.status(200).json(fetch_product_byID);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };



    static get_productList_by_Category = async (req, res) => {
        const {category} = req.query;
        try { 
            if (category) {
                const fetch_product_byID = await furniture_product_Model.find({category});
                return res.status(200).json(fetch_product_byID);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };

    static get_Order_List = async (req, res) => {
        try {
            const fetchAllOrder = await order_list_Model.find({});
            return res.status(200).json(fetchAllOrder);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static getCategoryById = async (req, res) => {
        const {_id} = req.query;
        try { 
            if (_id) {
                const fetchAllCategorybyID = await categoryModel.find({_id});
                return res.status(200).json(fetchAllCategorybyID);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };

    static getAllCategories = async (req, res) => {
        try {
            const fetchAllCategories = await categoryModel.find({});
            return res.status(200).json(fetchAllCategories);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static get_All_SubCategories = async (req, res) => {
        // const {category} = req.query;
        try { 
                const get_Sub_CategoryBasedImages = await sub_categoryModel.find({});
                return res.status(200).json(get_Sub_CategoryBasedImages);
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };

    static get_sub_CategoryById = async (req, res) => {
        const {id} = req.params;
        try { 
            if (id) {
                const fetch_subCategorybyID = await sub_categoryModel.find({_id: id});
                return res.status(200).json(fetch_subCategorybyID);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };

    static get_subCatList_byID = async (req, res) => {
        const {id} = req.params;
        console.log(id);
        try { 
                const get_Sub_CategoryBasedImages = await sub_categoryModel.find({
                    category: id
                });
                return res.status(200).json(get_Sub_CategoryBasedImages);
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };

    static getAllImages = async (req, res) => {
        try {
            const fetchAllImages = await galleryModel.find({});
            return res.status(200).json(fetchAllImages);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static getsingleImage = async (req, res) => {
        const {category} = req.query;
        try { 
            if (category) {
                const getCategoryBasedImages = await galleryModel.find({category});
                return res.status(200).json(getCategoryBasedImages);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };

    static show_users = async (req, res) => {
        try {
            const fetchAllUsers = await user.find({});
            return res.status(200).json(fetchAllUsers);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
    static viewImagesById = async (req, res) => {
        const {_id} = req.query;
        try { 
            if (_id) {
                const fetchAllImagesbyID = await galleryModel.find({_id});
                return res.status(200).json(fetchAllImagesbyID);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };




// UPDATE DATABASE -----------------------------------
    static updateCategoryById = async (req, res) => {
        const { id } = req.params;
        try { 
            if (id) {
                const getUpdatedData = await categoryModel.findByIdAndUpdate(
                    id,
                    req.body
                );
                return res.status(200).json(getUpdatedData);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };

    static update_Product_ById = async (req, res) => {
        const { id } = req.params;
        try { 
            if (id) {
                const get_product_UpdatedData = await furniture_product_Model.findByIdAndUpdate(
                    id,
                    req.body
            );
                return res.status(200).json(get_product_UpdatedData);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };

    static update_subCategoryById = async (req, res) => {
        const { id } = req.params;
        try { 
            if (id) {
                const getUpdatedData = await sub_categoryModel.findByIdAndUpdate(
                    id,
                    req.body
                );
                return res.status(200).json(getUpdatedData);
            } else {
                return res.status(400).json({ message: "all fields are required"});
            }
        } catch (error) {
            return res.status(406).json({ message: error.message });
        }
    };


// DELETE DATABASE --------------------------------------
    static delete_SubCategory_byID = async (req, res) => {
        const {id} = req.params;
        try {
          if (id) {
            const getDeleted_subCatData = await sub_categoryModel.findByIdAndDelete(id);
            return res.status(200).json(getDeleted_subCatData);
          } else {
            return res.status(400).json({ message: "Id not found" });
          }
        } catch (error) {
          return res.status(400).json(error);
        }
      }; 
    
    static delete_category = async (id) => {
        try {
            if (id) {
                const deletedCategory = await categoryModel.findByIdAndDelete({id
                });
                if (deletedCategory) {
                    return res.status(200).json({ message: "Data Deleted successfully" });
                }
            } else {
                return res.status(400).json({ message: "Data are not deleted" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static delete_Product_byID = async (req, res) => {
        const {id} = req.params;
        console.log(id);
        try {
            
          if (id) {
            const deleted_productData = await furniture_product_Model.findByIdAndDelete(id);
            return res.status(200).json(deleted_productData);
          } else {
            return res.status(400).json({ message: "Id not found" });
          }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static delete_category = async (req, res) => {
        const {_id} = req.params;
        try {
          if (_id) {
            const getDeletedData = await categoryModel.findByIdAndDelete(_id);
            return res.status(200).json(getDeletedData);
          } else {
            return res.status(400).json({ message: "Id not found" });
          }
        } catch (error) {
          return res.status(400).json(error);
        }
    };

}

export default galleryController;