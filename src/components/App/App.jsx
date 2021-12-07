import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';

function App() {
  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    const books = (await axios.get('/books')).data;
    setBookList(books);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main className="App">
      <Header />
      <BookForm fetchBooks={fetchBooks} />
      <BookList bookList={bookList} fetchBooks={fetchBooks} />
    </main>
  );
}

export default App;