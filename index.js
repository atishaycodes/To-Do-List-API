const express = require('express');
const app = express();
const listCreate = require("./routes/list")
const path = require('path')

const connectDB = require('./connect');
app.use(express.json());
app.use('/list', listCreate);
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
connectDB();
port = 2000;
app.get('/', (req, res) => {
    res.render('todo')

})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})


