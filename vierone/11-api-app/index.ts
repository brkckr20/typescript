import * as express from 'express';
import { addTodo } from './src/addTodo';
import { deleteTodo } from './src/deleteTodo';
import { getTodos } from './src/getTodos';

const app = express();

app.use(express.json());

app.post("/", addTodo);
app.get("/", getTodos);
app.delete("/delete/:id", deleteTodo);

app.listen(4000, () => console.log("server is up http://localhost:4000"));