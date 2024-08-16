const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Book = require('./models/Book');

const app = express()
app.use(cors());

// app.use(cors(
//     {
//         // The frontend URL goes here
//         origin: ["https://books-3380-vercel-frontend.vercel.app"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));

app.use(express.json())

mongoose.connect('mongodb+srv://finaluser:DZNSGYJNFP6gBeLl@cluster0.7rlxnxb.mongodb.net/finalPractice?retryWrites=true&w=majority&appName=Cluster0');


app.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new book
app.post('/add', async (req, res) => {
    const { title, author, description } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            description,
        });

        await newBook.save();
        res.json('Book added!');
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});





app.listen(5000, () => {
    console.log("Server is Running")
})