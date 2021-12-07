
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import App from './components/App/App';
import './index.css';

const bookListReducer = (state = [], action) => {
  console.log(action, state);
  if (action.type === 'SET_BOOKS') {
    return action.payload;
  } else if (action.type === 'CLEAR_BOOKS') {
    return []
  }
  return state;
}

///////////// SAGA Setup /////////////////
function* fetchBooks() {
  try {
    let response = yield axios.get('/books');
    yield put({ type: 'SET_BOOKS', payload: response.data });
  } catch (error) {
    console.log(`Error fetching books`, error);
  }
}

function* postBook(action) {
  try {
    // action.payload: { title: 'book title', author: 'book author' }
    yield axios.post('/books', action.payload);
    yield put({ type: 'FETCH_BOOKS' });
  } catch (error) {
    console.log(`Error fetching books`, error);
  }
}
function* rootSaga() {
  // When our component dispatches FETCH_FRUIT, wake up
  // the fetchFruitSaga
  yield takeEvery('FETCH_BOOKS', fetchBooks);
  yield takeEvery('POST_BOOK', postBook);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// redux devtools: https://github.com/zalmoxisus/redux-devtools-extension#installation
const reduxStore = createStore(
  combineReducers({
    bookList: bookListReducer,
  }),
  // The following line is used to set up redux devtools. You can comment out
  // the logger (use one or the other). To use BOTH is possible, but you'll
  // have to read up on how to use compose() to combine the two middlewares
  // into a single line (its well documented in the link above)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(logger, sagaMiddleware) // METHOD 2:  redux logger
);

// METHOD 1: at any time, can do window.store.getState();
window.store = reduxStore;

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
