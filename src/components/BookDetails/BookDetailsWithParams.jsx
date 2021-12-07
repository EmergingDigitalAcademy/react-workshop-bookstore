import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function BookDetailsWithParams({ bookList }) {
   let [book, setBook] = useState({title: undefined, author: undefined});
   const params = useParams();
   const history = useHistory();

   useEffect(() => {
      // Grab the ID out of the URL
      const foundBook = bookList.find(book => Number(book.id) === Number(params.id));
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
         <button onClick={() => history.push('/')}>Go Back</button>
      </>
   );
}

export default BookDetailsWithParams;