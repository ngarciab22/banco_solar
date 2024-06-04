import express from "express";
import { home, addUser, registersUsers, updateUser, deleteUser, addTransfer, registersTransfer } from "../controllers/controller.js";

const router = express.Router()

//Rutas
router.get("/", home)
router.post("/usuario", addUser)
router.get("/usuarios", registersUsers)
router.put("/usuario", updateUser)
router.delete("/usuario", deleteUser)
router.post("/transferencia", addTransfer)
router.get("/transferencias", registersTransfer)

export default router;