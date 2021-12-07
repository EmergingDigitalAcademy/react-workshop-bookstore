const express = require('express');
const booksRouter = require('./routes/book.router.js');

// configure express middleware
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static server for serving out a production react app
// app.use(express.static('build/'))

// set up our routes
app.use('/books', booksRouter);

// boot up the http server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
