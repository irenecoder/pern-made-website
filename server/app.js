const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middlewares on cors and express

app.use(cors());
app.use(express.json());


app.post('/todos',async(req,res)=>{
    try{
        const{
            todo_name,todo_day
        }=req.body;
        const newTodo = await pool.query('INSERT INTO todotable(todo_name,todo_day)VALUES ($1,$2) RETURNING *;',
        [todo_name,todo_day];
        
        res.json(newTodo.rows[0])
    } catch(error){
        console.error(error.message);
    }
});
app.get('/',async(req,res)=>{
    try{
        res.send("GDSC RONGO UNI");
    } catch(error){
        console.error(error.message);
    }
});
// get all todos
app.get('/todos',async(req,res)=>{
    try{
        const allTodos = await pool.query('SELECT * FROM todotable;');
        res.json(allTodos.rows)
        console.log('getting all todos');
    } catch(error){
        console.error(error.message)
    }
});
// get one todo
app.get('/todos/:id',async(req,res)=>{
    try{
            const{id}= req.params
        const allTodos = await pool.query('SELECT * FROM todotable WHERE todo_id=$1;',[id]);
        res.json(allTodos.rows)
        console.log(`getting todo ${id}`);
    } catch(error){
        console.error(error.message)
    }
});

const server = app.listen(8080,'0.0.0.0',()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`server is listening at http://${host}:${port}`);

});



