import MongoDaoManager from "../daos/mongodb/productDao.js";
const productDao = new MongoDaoManager();

import {__dirname} from '../utils.js';
//import ProductManager from '../daos/filesystem/manager.js';
//const productDao = new ProductManager(`${__dirname}/data/nuevoProducto.json`);


export const getAll = async () => {
  try {
    return await productDao.getProducts();
  } catch (error) {
    throw new Error(error);
  }
};

export const getById = async (id) => {
  try {
    return await productDao.getProductsById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const create = async (obj) => {
  try {
    return await productDao.addProduct(obj);
  } catch (error) {
    throw new Error(error);
  }
};

export const update = async (id, obj) => {
  try {
    return await productDao.updateProduct(id, obj);
  } catch (error) {
    throw new Error(error);
  }
};

export const remove = async (id) => {
  try {
    return await productDao.deleteProduct(id);
  } catch (error) {
    throw new Error(error);
  }
};