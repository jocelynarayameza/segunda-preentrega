import { getSocket } from "../server.js";
import { __dirname } from "../utils.js";
import * as service from "../services/productServices.js"

export const getProducts = async (req, res) => {
    try {
        const products = await service.getAll();
        const { limit } = req.query;
        if (limit) {
            const productsFilter = products.slice(0, parseInt(limit));
            res.status(200).json(productsFilter);
        } else {
            res.status(200).json(products);
        }
    } catch (error) {
        res.status(500).json({ msg: "Error" });
    }
};

export const getProductsById = async (req, res) => {
    try {
        const { id } = req.params;
    const product = await service.getById(id);
    if(!product) res.status(404).json({msg: 'product not found'});
    else res.json(product);
  } catch (error){res.status(500).json({ msg: "Error" });
}
};

export const addProduct = async (req, res) => {
    try {
        const products = req.body
        const newProduct = await service.create(products);
        const io = getSocket();
        io.emit('newProduct', newProduct);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ msg: "Error" })
    }
};

export const updateProduct = async (req, res) => {
    try {  
        const { id } = req.params;
        const productUpdate= await service.update(id, req.body);
        res.status(200).json(productUpdate);
    } catch (error) {   
        res.status(500).json({ msg: "Error" })
    }
};

export const deleteProduct = async (req, res)=>{
    try {
        const { id } = req.params;
        await service.remove(id);
        const io = getSocket();
        io.emit('deleteProduct', id);
        res.status(200).json({ msg: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ msg: "Error" });
    }
};

