import { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import './App.css';

class App extends Component {
  state = {
    bookList: []
  } // bookList

  fetchBooks = async () => {
    const books = (await axios.get('/books')).data;
    this.setState({ bookList: books });
  }

  componentDidMount = () => {
    this.fetchBooks();
  }

  render = () => {
    return (
      <main className="App">
        <Header />
        <BookForm fetchBooks={this.fetchBooks} />
        <BookList bookList={this.state.bookList} fetchBooks={this.fetchBooks} />
      </main>
    );
  }
}

export default App;