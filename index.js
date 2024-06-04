import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
})