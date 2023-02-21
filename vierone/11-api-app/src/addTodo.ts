import { Request, Response, Handler } from 'express';
import { SuccessResponse, TodoItem, TodoRequestBody } from '../types';
import { db } from './db';

export const addTodo : Handler = (req,res) => {
    const body: TodoRequestBody = req.body;
    const todoItem: TodoItem = {
        isDone: false,
        id: Math.random().toString(),
        text: body.text,
    }
    db.push(todoItem);
    res.status(200).send({
        msg : "Başarılı bir şekilde eklendi..."
    } as SuccessResponse)
}