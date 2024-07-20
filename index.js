const express= require('express');
const cors = require('cors');
const incomeRoute = require('./routes/incomeRoute');
const expenseRoute = require('./routes/expenseRoute');
const db = require('./db');
const app= express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use('/income', incomeRoute);
app.use('/expense', expenseRoute);

const server= ()=>{
    db();
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000');

    });
}

server();