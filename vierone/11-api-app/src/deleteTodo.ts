import { Handler } from "express";
import { SuccessResponse } from "../types";
import { db } from "./db";

export const deleteTodo: Handler = (req,res) => {
    const id = req.params.id;
    const todoIndex = db.findIndex((todo) => todo.id === id);
    if (todoIndex >= 0) {
        db.splice(todoIndex, 1);
    }
    return res.status(200).send({msg : `${id} numaralı kayıt başarıyla silindi`} as SuccessResponse)
}