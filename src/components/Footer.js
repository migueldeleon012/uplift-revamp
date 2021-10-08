import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__links">
          <Link className="color-white" to="/courses">
            COURSES
          </Link>
          <Link className="color-white" to="/">
            BLOGS
          </Link>
          <Link className="color-white" to="/careers">
            CAREERS
          </Link>
          <Link className="color-white" to="/about">
            ABOUT US
          </Link>
          <Link className="color-white" to="/contacts">
            CONTACT US
          </Link>
          <Link className="color-white" to="/">
            PRIVACY POLICY US
          </Link>
        </div>

        <div className="footer__contacts">
          <div className="social-media">
            <a className="color-white" href="">
              Facebook
            </a>
            <a className="color-white" href="">
              Linkedin
            </a>
            <a className="color-white" href="">
              Youtube
            </a>
          </div>

          <a
            href="mailto:contact@upliftcodecamp.com"
            target="_blank"
            className="color-white email"
          >
            contact@upliftcodecamp.com
          </a>
          <div className="review">
            <h6 className="color-white">Reviewed</h6>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} className="yellow" />
              <FontAwesomeIcon icon={faStar} className="yellow" />
              <FontAwesomeIcon icon={faStar} className="yellow" />
              <FontAwesomeIcon icon={faStar} className="yellow" />
              <FontAwesomeIcon icon={faStar} className="color-light-grey" />
            </div>
            <a href="">
              <img src="img/coursereport.png" alt="course report" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center">&copy; 2021 Uplift Code Camp</p>
    </footer>
  );
};

export default Footer;
