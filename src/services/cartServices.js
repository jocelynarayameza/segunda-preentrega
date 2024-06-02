import CartDaoManager from '../daos/mongodb/cartDao.js';
const cartDao = new CartDaoManager();

import { __dirname } from '../utils.js';
//import CartManager from '../daos/filesystem/cartsManager.js';
//const cartDao = new CartManager(`${__dirname}/data/cart.json`);


export const getAll = async () => {
  try {
    return await cartDao.getCart();
  } catch (error) {
    throw new Error(error);
  }
};

export const getById = async (id) => {
  try {
    return await cartDao.getCartById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const create = async (obj) => {
  try {
    return await cartDao.createCart(obj);
  } catch (error) {
    throw new Error(error);
  }
};


export const saveToCart = async (cid, id) => {
  try {
    return await cartDao.saveToCart(cid, id);
  } catch (error) {
    throw new Error(error, "error en service");
  }
};

export const deleteProductFromCart = async (cid, id) => {
  try {
    return await cartDao.deleteProductFromCart(cid, id);
  } catch (error) {
    throw new Error("error en service: " + error.message);
  }
};

export const updateCart = async (cid, id) => {

  try {
    return await cartDao.updateCart(cid, id);
  } catch (error) {
    throw new Error("error en service: " + error.message);
  }
}

export const updateProductQuantity = async (cid, pid, quantity) => {
  try {
    return await cartDao.updateProductQuantity(cid, pid, quantity);
  } catch (error) {
    throw new Error("error en service: " + error.message);
  }
}

export const removeAllProductsFromCart = async (cid) => {
  try {
    return await cartDao.removeAllProductsFromCart(cid);
  } catch (error) {
    throw new Error("error en service: " + error.message);
  }
}