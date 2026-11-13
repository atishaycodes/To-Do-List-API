const mongoose = require('mongoose');

async function connectDB() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todo-list'); console.log('MongoDB connected');

    }
    catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDB;

