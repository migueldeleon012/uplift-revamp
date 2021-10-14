<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

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
            PRIVACY POLICY
          </Link>
        </div>

        <div className="footer__contacts">
          <div className="social-media">
            <a
              className="color-white"
              href="https://www.facebook.com/upliftcodecamp"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="color-white"
              href="https://www.linkedin.com/company/uplift-code-camp/?originalSubdomain=ph"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              className="color-white"
              href="https://www.youtube.com/watch?v=b7tJeEoC3nc"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <p className="color-white email">contact@upliftcodecamp.com</p>

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
=======
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
>>>>>>> 0583b9446a832e9f41c76dffb5e57d74693b6320
