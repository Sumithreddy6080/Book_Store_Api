const Book = require("../models/Book.model");


const getAllBook = async (req,res)=>{
    try{
        const allBooks =  await Book.find({});
        if(allBooks.length>0){
         res.status(200).json({
            status: true,
            message: "Books fetched successfully",
            data: allBooks
        })
        }else{
            res.status(200).json({
                status: false,
                message: "No books found",
                data: []
            })
        }
    }catch(err){
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: err.message
        })
    }
}

const getById = async (req,res)=>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                status: false,
                message: "Id is required"
            })
        }
        const BookByID = await Book.findById(id);
        if(!BookByID){
            return res.status(404).json({
                status: false,
                message: "Book not found"
            })
        }
        res.status(200).json({
            status: true,
            message: "Book fetched successfully",
            data: BookByID
        })
    

    }catch(err){
        console.log(err.message);
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: err.message
        })
    }
}

const createBook = async (req,res)=>{
    try{
        
        const {title,  author, publishedDate,  pages} = req.body;
        if(!title || !author || !publishedDate || !pages){
            return res.status(400).json({
                status: false,
                message: "All fields are required"
            })
        }

        const newBook = await Book.create({
            title,
            author,
            publishedDate,
            pages
        })
        res.status(201).json({
            status: true,
            message: "Book created successfully",
            data: newBook
        })

    }catch(err){
        console.log(err.message);
        res.status(400).json({
            status: false,
            message: "Bad request",
            error: err.message
        })
    }
}

const updateBook = async (req,res)=>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                status: false,
                message: "Id is required"
            })
        }
        const {title,  author, publishedDate,  pages} = req.body;
        if(!title || !author || !publishedDate || !pages){
            return res.status(400).json({
                status: false,
                message: "All fields are required"
            })
        }
        const updatedBook = await Book.findByIdAndUpdate(id,{
            title,
            author,
            publishedDate,
            pages
        },{new:true})
        if(!updatedBook){
            return res.status(404).json({
                status: false,
                message: "Book not found"
            })
        }
        res.status(200).json({
            status: true,
            message: "Book updated successfully",
            data: updatedBook
        })

    }catch(err){
        console.log(err.message);
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: err.message
        })
    }
}


const deleteBook = async (req,res)=>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                status: false,
                message: "Id is required"
            })
        }
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            return res.status(404).json({
                status: false,
                message: "Book not found"
            })
        }
        res.status(200).json({
            status: true,
            message: "Book deleted successfully",
            data: deletedBook
        })

    }catch(err){
        console.log(err.message);
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: err.message
        })
    }
}

module.exports = {
    getAllBook,
    getById,
    createBook,
    updateBook,
    deleteBook,
};