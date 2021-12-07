import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function BookDetailsWithParams() {
   let book = useSelector(store => store.bookDetails);
   let bookList = useSelector(store => store.bookList);
   let dispatch = useDispatch();
   const params = useParams();

   useEffect(() => {
      // Grab the ID out of the URL
      // Go hunting for the book in redux
      // Dispatch that book as the details view
      console.log('params are', params);
      const bookId = Number(params.id);

      // Look through the bookList for a book with id 1
      // when found, set that to the 'book details' in redux
      console.log(`Searching through ${bookList.length}`);
      const foundBook = bookList.filter((book) => book.id === bookId);
      console.log(`Found book with id ${bookId}: `, foundBook);
      if (foundBook.length > 0) {
         dispatch({
            type: 'SET_BOOK_DETAILS',
            payload: foundBook[0]
         })
      }
   }, [])

   // Dont let an invalid book ruin your day
   if (book.title === undefined) {
      return <h1>Invalid Book (No details found)</h1>
   }
   return (
      <>
         <h1>Book Details (with params)</h1>
         <table>
            <tbody>
               <tr>
                  <td>Book Title:</td>
                  <td>{book.title}</td>
               </tr>
               <tr>
                  <td>Author:</td>
                  <td>{book.author}</td>
               </tr>
            </tbody>
         </table>
      </>
   );
}

export default BookDetailsWithParams;