import {__dirname} from '../utils.js'
import * as service from "../services/cartServices.js"


export const create = async (req, res) => {

    try {
        const cart = await service.create();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ msg: "Error" })
    }
};

export const getAll = async (req, res) => {
    try {
        const cart = await service.getAll();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ msg: "Error" })
    }
};
export const getById = async (req, res) => {
    try {
        const { cid } = req.params;
        const cart = await service.getById(cid);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ msg: "Error" })
    }
};

export const saveToCart = async (req, res) => {
    try {
        const { cid, id } = req.params;
        const response = await service.saveToCart(cid, id);
        res.json(response)
    } catch (error) {
        res.status(500).json({ msg: "Error en controller" })

    }
}; 

export const deleteProductFromCart = async (req, res) => {
    try {
      const { cid, id } = req.params;
      const response = await service.deleteProductFromCart(cid, id);
      res.json(response);
    } catch (error) {
      res.status(500).json({ msg: "Error en controller: " + error.message });
    }
  };

  export const updateCart = async (req, res) => {
    try {
      const { cid } = req.params;
      const response = await service.updateCart(cid, req.body);
      res.json(response);
    } catch (error) {
      res.status(500).json({ msg: "Error en controller: " + error.message });
    }
  };

  export const updateProductQuantity = async (req, res) => {
    try {
      const { cid, id } = req.params;
      const response = await service.updateProductQuantity(cid, id, req.body.quantity);
      res.json(response);
    } catch (error) {
      res.status(500).json({ msg: "Error en controller: " + error.message });
    }
  };

  export const removeAllProductsFromCart = async (req,res) => {
    try {
      const { cid } = req.params;
      const response = await service.removeAllProductsFromCart(cid);
      res.json(response);
    } catch (error) {
      res.status(500).json({ msg: "Error en controller: " + error.message });
    }
  }