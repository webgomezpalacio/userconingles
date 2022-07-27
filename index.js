import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";
import reservarRoutes from "./routes/reservas.js";
dotenv.config();
const app = express();

const port = process.env.PORT || 3030;


app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(('/reservas'), reservarRoutes);






app.listen(port, () => { console.log("servidor ejecutandose en el puerto:" , port);});
