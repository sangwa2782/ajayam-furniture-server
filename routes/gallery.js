import express from 'express';
import multer from 'multer';
import galleryController from '../controllers/galleryController.js';
const router = express.Router();

// ---------------- Multer ------------------------ 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./public/upload/`);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage: storage });
// ------------------- Multer ----------------------



router.post('/upload/image', upload.fields(
    [{name:"image"},
     {name:"image2"},
     {name:"image3"},
     {name:"image4"}
    ]), galleryController.uploadImage);
router.post("/add/category", galleryController.addNewCategory);
router.post("/add/sub_category", galleryController.addNewSubCategory);
// router.post('/upload/order', galleryController.submitOrderDetail);
router.post("/add/order", galleryController.addNewOrder);

router.get("/get/categories", galleryController.getAllCategories);
router.get("/get/categoryby_id", galleryController.getCategoryById);
router.get("/get/sub_categories", galleryController.get_All_SubCategories);
router.get("/get/sub_categoryById/:id", galleryController.get_sub_CategoryById)
router.get("/get/sub_catList/:id", galleryController.get_subCatList_byID);
router.get("/get/images", galleryController.getAllImages);
router.get("/get/singleimage", galleryController.getsingleImage);
router.get("/get/show_users", galleryController.show_users);
router.get("/view_image", galleryController.viewImagesById);
router.get("/get/product", galleryController.getAllProductList);
router.get("/get/product_list_ById", galleryController.get_productList_byID);
router.get("/get/product_list_By_Category", galleryController.get_productList_by_Category);

// handler
router.get("/get/order_list", galleryController.get_Order_List);


router.put("/update/sub_category/:id", galleryController.update_subCategoryById);
router.put("/update/category/:id", galleryController.updateCategoryById);
router.put("/update//update/product_byid/:id", upload.fields([{name:"image"},{name:"image2"},{name:"image3"},{name:"image4"}]), galleryController.updateCategoryById);

router.delete("/delete/category/:_id", galleryController.delete_category);
router.delete("/delete/sub_category/:id", galleryController.delete_SubCategory_byID);
router.delete("/delete/product_byid/:id", galleryController.delete_Product_byID);

export default router;