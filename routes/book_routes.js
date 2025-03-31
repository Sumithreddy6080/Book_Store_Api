const express = require('express');
const router = express.Router();
const { getAllBook, getById, createBook, updateBook, deleteBook } = require('../controllers/book.contoller');

router.get('/get',getAllBook);
router.get('/get/:id',getById);
router.post('/add',createBook);
router.put('/update/:id',updateBook);
router.delete('/delete/:id',deleteBook);

module.exports = router;