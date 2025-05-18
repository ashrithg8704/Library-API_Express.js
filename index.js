const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { id: 2, title: 'The Hobbit', author: 'J.R.R. Tollkien', genre: 'Fantasy' },
    { id: 3, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-help' }
];

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
});

app.post('/books', (req, res) => {
    const { title, author, genre } = req.body;
    if (!title || !author || !genre) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        genre
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.put ('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Book not found' });

    const { title, author, genre } = req.body;
    if (!title || !author || !genre) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    books[index] = {
        id: books[index].id,
        title,
        author,
        genre
    };

    res.status(200).json(books[index]);
});

app.patch('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author, genre } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  if (genre) book.genre = genre;

  res.status(200).json(book);
});

app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  const deletedBook = books.splice(index, 1);
  res.status(200).json({ message: 'Book deleted', book: deletedBook[0] });
});

app.listen(PORT, () => {
  console.log(`Library API running at http://localhost:${PORT}`);
});