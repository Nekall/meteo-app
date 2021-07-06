import { Link } from 'react-router-dom';
import cellphoneLogo from 'assets/images/044-cellphone.svg';
import './index.scss';

const Navbar = () => (
  <nav className="navbar" >
    <Link to="/"><img className="logo-cellphone" src={cellphoneLogo} alt="Logo Cellphone" /></Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;
