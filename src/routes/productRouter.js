import { Router } from "express";
import {__dirname} from '../utils.js'
import { productValidator } from "../middlewares/productValidator.js";
import * as controller from "../controllers/productController.js"
const router = Router();


router.get("/", controller.getProducts);

router.get("/:id", controller.getProductsById);

//router.get("/category", controller.getByCategory);

router.post("/", productValidator, controller.addProduct); 

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

export default router;