// import express from 'express';
const express = require('express');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
// let {users} = require('./data');
// import {users} from './users.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Server is running</h1>")
});

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

app.listen(3000, () => console.log("-->>Express Server is up and running"));

