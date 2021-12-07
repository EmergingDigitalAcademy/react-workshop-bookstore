import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import BookDetailsWithParams from '../BookDetails/BookDetailsWithParams';

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
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BookList bookList={bookList} fetchBooks={fetchBooks} />
          </Route>
          <Route path="/newbook">
            <BookForm fetchBooks={fetchBooks}/>
          </Route>
          <Route path="/details/:id">
            <BookDetailsWithParams bookList={bookList} />
          </Route>
          <Route path="/">
            404 Not Found
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;