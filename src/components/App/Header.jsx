import { Link } from 'react-router-dom';

function Header() {
   return (
      <header>
         <h1>Books w/ Redux!</h1>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newbook">Add Book</Link></li>
         </ul>
      </header>
   );
}

export default Header;