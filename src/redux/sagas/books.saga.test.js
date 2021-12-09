import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import SagaTester from 'redux-saga-tester';

import { bookListReducer } from '../reducers/books.reducer';
import { rootSaga } from './books.saga';

describe('Test our fetch saga', () => {
  it('should hit a mocked api', async () => {
    const mock = new AxiosMockAdapter(axios);
    mock.onGet("/books").reply(
      200,
      [{
        "id": 1,
        "title": "Another Brooklyn",
        "author": "Jacqueline Woodson",
      }],
    );

    // Init code
    const sagaTester = new SagaTester({
      initialState: {},
      reducers: { bookList: bookListReducer },
    });

    // Start listening
    sagaTester.start(rootSaga);

    sagaTester.dispatch({ type: 'FETCH_BOOKS' });

    await sagaTester.waitFor('SET_BOOKS');

    const state = sagaTester.getState();

    expect(state.bookList).toHaveLength(1);
  });

  it('should handle errors with grace and poise', async () => {
    const mock = new AxiosMockAdapter(axios);
    mock.onGet("/books").reply(
      500,
      { error: 'YOU A BIG DUMMY' },
    );

    // Init code
    const sagaTester = new SagaTester({
      initialState: {},
      reducers: { bookList: bookListReducer },
    });

    // Start listening
    sagaTester.start(rootSaga);

    sagaTester.dispatch({ type: 'FETCH_BOOKS' });

    await sagaTester.waitFor('BOOKS_ERROR');

    const state = sagaTester.getState();

    expect(state.bookList).toHaveLength(0);
  });
});
