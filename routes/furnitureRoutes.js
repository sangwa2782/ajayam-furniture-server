import express from 'express';
import multer from 'multer';
import furnitureController from '../controllers/furnitureController.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `public/upload/`);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });



router.post('/upload/image', upload.single("image"), furnitureController.addNewProduct);


export default router;