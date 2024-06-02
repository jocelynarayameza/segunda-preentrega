import express from "express";
import { __dirname } from './utils.js'
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import viewsRouter from "./routes/viewsRouter.js";
import morgan from "morgan";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import { connectMongoDB } from "./daos/mongodb/connection.js";
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//PARA USAR HANDLEBARS, ESTAS TRES LÍNEAS
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use("/api/productos", productRouter);
app.use("/api/cart", cartRouter)
app.use('/', viewsRouter);

connectMongoDB();

const httpServer = app.listen(8080, ()=>{
    console.log(' Server listening on port 8080');
});

const socketServer = new Server(httpServer);

socketServer.on('connection', (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    })    
})

export function getSocket(){
    return socketServer;
}



