import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchBooks() {
   try {
     let response = yield axios.get('/books');
     yield put({ type: 'SET_BOOKS', payload: response.data });
   } catch (error) {
     yield put({ type: 'BOOKS_ERROR' });
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

 function* deleteBook(action) {
   try {
     // action.payload: { title: 'book title', author: 'book author' }
     yield axios.delete(`/books/${action.payload}`);
     yield put({ type: 'FETCH_BOOKS' });
   } catch (error) {
     console.log(`Error fetching books`, error);
   }
 }

 export function* rootSaga() {
   // When our component dispatches FETCH_FRUIT, wake up
   // the fetchFruitSaga
   yield takeEvery('FETCH_BOOKS', fetchBooks);
   yield takeEvery('POST_BOOK', postBook);
   yield takeEvery('DELETE_BOOK', deleteBook);
 }
