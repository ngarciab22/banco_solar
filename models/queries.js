import pool from "../config/config.js";

//agregar usuario
export const addUserQueries = async ({ nombre, balance }) => {
    try {
        const sql = {
            text: "INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) returning *",
            values: [nombre, balance]
        }
        const response = await pool.query(sql);
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No se agrego el nuevo usuario")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}

//registro de usuarios
export const registersUsersQueries = async () => {
    try {
        const sql = {
            text: "Select * from usuarios"
        }
        const response = await pool.query(sql)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No existen registros")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}

//editar usuario
export const updateUserQueries = async (nombre, balance, id) => {
    try {
        const sql = {
            text: "UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3 returning *",
            values: [nombre, balance, id]
        }
        const response = await pool.query(sql)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No se actualizo el usuario")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}

//eliminar usuario
export const deleteUserQueries = async (id) => {
    try {
        const sql = {
            text: "DELETE FROM usuarios WHERE id = $1 returning *",
            values: [id],
        }
        const response = await pool.query(sql)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No se elimino el usuario")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}

//agregar transferencia
export const addTransferQueries = async (emisor, receptor, monto) => {

    const { id: emisorId } = (await pool.query({
        text: "SELECT id FROM usuarios WHERE nombre = $1",
        values: [emisor]
    })).rows[0];
    const { id: receptorId } = (await pool.query({
        text: "SELECT id FROM usuarios WHERE nombre = $1",
        values: [receptor]
    })).rows[0];

    const addTransfer = {
        text: "INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, now()) RETURNING *",
        values: [emisorId, receptorId, monto]
    };
    const updateEmisor = {
        text: "UPDATE usuarios SET balance = balance - $1 WHERE nombre = $2 RETURNING *",
        values: [monto, emisor],
    };
    const updateReceptor = {
        text: "UPDATE usuarios SET balance = balance + $1 WHERE nombre = $2 RETURNING *",
        values: [monto, receptor],
    };

    try {
        await pool.query("BEGIN");
        await pool.query(addTransfer);
        await pool.query(updateEmisor);
        await pool.query(updateReceptor);
        await pool.query("COMMIT");
        return { message: "Transferencia realizada con exito" };
    } catch (error) {
        await pool.query("ROLLBACK");
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
};

//registro de transferencias
export const registersTransferQueries = async () => {
    try {
        const sql = {
            text: "SELECT t.fecha, e.nombre AS emisor, r.nombre AS receptor, t.monto FROM transferencias t JOIN usuarios e ON t.emisor = e.id JOIN usuarios r ON t.receptor = r.id ORDER BY t.fecha DESC",
            rowMode: 'array'
        };
        const response = await pool.query(sql)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No existen registros")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}
