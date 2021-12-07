import axios from 'axios';
import { Component } from 'react';

class BookList extends Component {
  deleteBook = async (bookId) => {
    await axios.delete(`/books/${bookId}`);
    this.props.fetchBooks();
  }

  render = () => {
    return (
      <section>
        <h2>All Books</h2>
        <ul>
          {this.props.bookList.map((book, index) =>
            <li key={index}>{book.title} by {book.author}
              <button onClick={() => this.deleteBook(book.id)}>Delete</button>
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default BookList;