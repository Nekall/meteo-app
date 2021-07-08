import weatherLogo from 'assets/images/weather.svg';
import { Link } from 'react-router-dom';
import './index.scss';

const Navbar = () => (
  <nav className="navbar" >
    <Link to="/"><img className="logo-weather" src={weatherLogo} alt="Logo weather" /></Link>
  </nav>
);

export default Navbar;
