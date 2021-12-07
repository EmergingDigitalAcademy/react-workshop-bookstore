import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Adding book`, {title, author});

    dispatch({
      type: 'POST_BOOK',
      payload: {title: title, author: author}
    });

    // Redirect the user back to the list
    history.push('/');
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