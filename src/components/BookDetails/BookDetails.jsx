import { useSelector } from 'react-redux';

function BookDetails(props) {
   let book = useSelector(store => store.bookDetails);
   // Dont let an invalid book ruin your day
   if (book.title === undefined) {
      return <h1>Invalid Book (No details found)</h1>
   }
   return (
      <>
         <h1>Book Details</h1>
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

export default BookDetails;