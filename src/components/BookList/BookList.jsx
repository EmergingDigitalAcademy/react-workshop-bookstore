import axios from 'axios';

function BookList({bookList, fetchBooks}) {
  async function deleteBook(bookId) {
    await axios.delete(`/books/${bookId}`);
    fetchBooks();
  }

  return (
    <section>
      <h2>All Books</h2>
      <ul>
        {bookList.map((book, index) =>
          <li key={index}>{book.title} by {book.author}
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        )}
      </ul>
    </section>
  );
}

export default BookList;