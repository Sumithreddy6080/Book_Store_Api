const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maximum: [100, 'Title cannot exceed 100 characters'],
        trim: true,
    },
    author : {
        type: String,
        required: true, 
    },
    publishedDate: {
        type: Number,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
        min: [1, 'Pages must be at least 1'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
