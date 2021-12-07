import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

function BookList() {
  const bookList = useSelector(store => store.bookList);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <section>
      <h2>All Books</h2>
      <ul>
        {bookList.map((book, index) =>
          <li key={index}>{book.title} by {book.author}
            <button onClick={() => history.push(`/details/${book.id}`)}>View Details</button>
            <button onClick={() => dispatch({ type: 'DELETE_BOOK', payload: book.id })}>Delete</button>
          </li>
        )}
      </ul>
    </section>
  );
}

export default BookList;