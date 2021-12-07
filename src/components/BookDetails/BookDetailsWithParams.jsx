import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetailsWithParams() {
   let [book, setBook] = useState({});
   let bookList = useSelector(store => store.bookList);
   const params = useParams();

   useEffect(() => {
      // Grab the ID out of the URL
      console.log('params are', params);
      const bookId = Number(params.id);

      const foundBook = bookList.find(book => Number(book.id) === Number(bookId));
      console.log(`Found book with id ${bookId}: `, foundBook);
      if (foundBook) {
         setBook(foundBook);
      }
   }, [bookList, params])

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