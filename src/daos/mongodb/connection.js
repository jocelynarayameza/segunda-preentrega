import mongoose from "mongoose";
import 'dotenv/config'

const stringLocal = "mongodb://127.0.0.1/backendCoder";

//const mongoURL = process.env.mongoURL 

export const connectMongoDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(stringLocal);
        console.log("Conectado con éxito a MongoDB");
    } catch (error) {
        console.log(error);
    }
};

