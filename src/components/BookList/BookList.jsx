import axios from 'axios';
import { useHistory } from 'react-router-dom';

function BookList({bookList, fetchBooks}) {
  const history = useHistory();

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
            <button onClick={() => history.push(`/details/${book.id}`)}>View Details</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        )}
      </ul>
    </section>
  );
}

export default BookList;