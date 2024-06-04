import path from "path";
import { addUserQueries, registersUsersQueries, updateUserQueries, deleteUserQueries, addTransferQueries, registersTransferQueries } from "../models/queries.js";

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
}

//agregar usuario
export const addUser = async (req, res) => {
    const { nombre, balance } = req.body;
    const response = await addUserQueries({ nombre, balance });
    res.send(response);
}

//registro de usuarios
export const registersUsers = async (req, res) => {
    const response = await registersUsersQueries();
    res.send(response);
}

//editar usuario
export const updateUser = async (req, res) => {
    const { nombre, balance } = req.body;
    const { id } = req.query;
    const response = await updateUserQueries(nombre, balance, id);
    res.send(response);
}

//eliminar usuario
export const deleteUser = async (req, res) => {
    const { id } = req.query;
    const response = await deleteUserQueries(id);
    res.send(response);
}

//agregar transferencia
export const addTransfer = async (req, res) => {
    const { emisor, receptor, monto } = req.body;
    const response = await addTransferQueries(emisor, receptor, monto);
    res.send(response)
};

//registro de transferencias
export const registersTransfer = async (req, res) => {
    const response = await registersTransferQueries();
    res.send(response);
}