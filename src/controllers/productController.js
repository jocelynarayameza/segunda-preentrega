import { getSocket } from "../server.js";
import { __dirname } from "../utils.js";
import * as service from "../services/productServices.js"

export const getProducts = async (req, res) => {
    try {
        const { page, limit, category, sort } = req.query;
        const products = await service.getAll(page, limit, category, sort);
        const next = products.hasNextPage ? `http://localhost:8080/api/productos?page=${products.nextPage}` : null;
        const prev = products.hasPrevPage ? `http://localhost:8080/api/productos?page=${products.prevPage}` : null;
        res.json({
            status: "success",
            payload: products.docs,
            totalpages: products.totalPages,
            prevPage: products.prevPage,
            nextPage: products.nextPage,
            hasNextPage: products.hasNextPage,
            hasPrevPage: products.hasPrevPage,
            prevLink: prev,
            nextLink: next,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
        });
    }
};

export const getProductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await service.getById(id);
        if (!product) res.status(404).json({ msg: 'product not found' });
        else res.json(product);
    } catch (error) {
        res.status(500).json({ msg: "Error" });
    }
};

/*export const getByCategory = async (req, res) => {
    try {
        const { category } = req.query;
        const product = await service.getByCategory(category);
        res.json(product);
    } catch (error) {
        res.status(500).json({ msg: "Error controller" });
    }
};*/

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
        const productUpdate = await service.update(id, req.body);
        res.status(200).json(productUpdate);
    } catch (error) {
        res.status(500).json({ msg: "Error" })
    }
};

export const deleteProduct = async (req, res) => {
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

