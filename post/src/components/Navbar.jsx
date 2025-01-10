import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/add-post">Ajouter un Post</Link>
        </li>
        <li>
          <Link to="/post/1">Détail du Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
