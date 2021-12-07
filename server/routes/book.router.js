const router = require('express').Router();
let booksData = require('../modules/books');

// Get all books
router.get('/', (req, res) => res.send(booksData));

// Create a new book
router.post('/',  (req, res) => {
  let newBook = req.body;
  if (!newBook.author || !newBook.title) {
    res.sendStatus(405); // bad request
    return;
  }
  booksData.push({...newBook, id: parseInt(Math.random()*10000+1)});
  res.sendStatus(201);
});

// Delete a book by id
router.delete('/:id', (req, res) => {
  if (!booksData.find(b => Number(b.id) === Number(req.params.id))) {
    res.status(404).send(`Book with id ${req.params.id} is not found`);
    return;
  }
  booksData = booksData.filter(b => Number(b.id) !== Number(req.params.id));
  res.sendStatus(204);
})

module.exports = router;
