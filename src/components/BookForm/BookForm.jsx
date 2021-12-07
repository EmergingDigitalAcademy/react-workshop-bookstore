import axios from 'axios';
import { Component } from 'react';

class BookForm extends Component {
  state = {
    title: '',
    author: '',
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Adding book`, this.state);

    await axios.post(`/books/`, this.state);
    this.props.fetchBooks();
  };

  render = () => {
    return (
      <section>
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit} className="add-book-form">
          <input
            required
            placeholder="Title"
            value={this.state.title}
            onChange={(event) => this.setState({...this.state, title: event.target.value})}
          />

          <input
            required
            placeholder="Author"
            value={this.state.author}
            onChange={(event) => this.setState({...this.state, author: event.target.value})}
          />

          <button type="submit">
            Add Book
          </button>
        </form>
      </section>
    );
  }
}

export default BookForm;