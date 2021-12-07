import axios from 'axios';
import { useState } from 'react';

function BookForm({ fetchBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(`Adding book`, {title, author});

    await axios.post(`/books/`, {title: title, author: author});
    fetchBooks();
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input 
          required 
          placeholder="Title" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          required 
          placeholder="Author" 
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;