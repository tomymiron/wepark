import authRoutes from "./routes/auth.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

//middlewares
app.use((req, res, next) => { res.header("Access-Control-Allow-Credentials", true); next(); })
app.use(express.json());
app.use(cors({origin: "http://192.168.0.87:8800"}));

app.use("/api/auth", authRoutes);

// Respuesta de imagen estatica mediante ruta '/images'
app.use("/images", express.static('uploads'));

app.listen(8800, () => {
    console.log("API working");
});