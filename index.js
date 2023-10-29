const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');
var cors = require('cors')

app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended : true,
// })
// );
app.use(express.json());
app.get('/',(request, response) => {
    response.json({Info: 'WEBAPI'})
});
app.listen(port, () => {
    console.log(`Приложение запущено на порту - ${port}`);
});

app.get('/todos', db.getTodos);
app.get('/todos/:id', db.getTodoById);
app.post('/todos', db.postTodo);
app.put('/todos/:id', db.putTodo);
app.delete('/todos/:id', db.deleteTodo);