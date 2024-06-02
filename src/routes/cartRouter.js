import { Router } from "express";
import * as controller from "../controllers/cartController.js"
const router = Router();
import {__dirname} from '../utils.js'

router.post("/", controller.create);

router.get("/", controller.getAll);

router.get("/:cid", controller.getById);

router.post("/:cid/productos/:id", controller.saveToCart);

router.delete("/:cid", controller.removeAllProductsFromCart);

router.delete("/:cid/productos/:id", controller.deleteProductFromCart);

router.put("/:cid", controller.updateCart);

router.put("/:cid/productos/:id", controller.updateProductQuantity);



export default router