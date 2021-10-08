import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const onNavClickButtonHandler = () => setIsNavActive(!isNavActive);

  return (
    <nav className={isNavActive ? 'navbar active' : 'navbar'}>
      <Link className="navbar__img" to="/">
        <img src="img/uplift-logo.svg" alt="uplift" />
      </Link>

      <div className="burger" onClick={onNavClickButtonHandler}>
        <div className="burger__line line1"></div>
        <div className="burger__line line2"></div>
        <div className="burger__line line3"></div>
      </div>

      <ul className="navbar__menu">
        <Link to="/" onClick={onNavClickButtonHandler}>
          <li>Home</li>
        </Link>
        <Link to="/courses" onClick={onNavClickButtonHandler}>
          <li>Courses</li>
        </Link>
        <Link to="/partners" onClick={onNavClickButtonHandler}>
          <li>Partners</li>
        </Link>
        <Link to="/careers" onClick={onNavClickButtonHandler}>
          <li>Careers</li>
        </Link>
        <Link to="/about" onClick={onNavClickButtonHandler}>
          <li>About Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
