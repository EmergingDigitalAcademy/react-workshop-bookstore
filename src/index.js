
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { bookListReducer } from './redux/reducers/books.reducer';
import { rootSaga } from './redux/sagas/books.saga';
import App from './components/App/App';
import './index.css';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// redux devtools: https://github.com/zalmoxisus/redux-devtools-extension#installation
const reduxStore = createStore(
  combineReducers({
    bookList: bookListReducer,
  }),
  applyMiddleware(logger, sagaMiddleware)
);

// fun hack: at any time, can do window.store.getState();
window.store = reduxStore;

// Boot up our sagas!
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
