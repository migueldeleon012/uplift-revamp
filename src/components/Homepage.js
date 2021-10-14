import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faCode,
  faHandsHelping,
  faIdCard,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import testimonials from '../assets/json/testimonials.json';
import Particles from 'react-particles-js';

const Homepage = () => {
  return (
    <div className="wrapper">
      <header className="header header-home">
        <Particles
          canvasClassName="particle"
          params={{
            particles: {
              number: {
                value: 70,
              },
              size: {
                value: 4,
              },
            },
          }}
        />
        <div className="header__wrapper">
          <div className="header__desc">
            <div className="typewriter">
              <h1 className="color-white">Become a Software Developer</h1>
            </div>

            <p className="color-white">
              Affordable, high-quality software development courses.{' '}
            </p>
            <p className="color-white">Study part-time. Learn full-stack.</p>

            <Link to="/courses">
              <button>Get Started</button>
            </Link>
          </div>
          <div className="header__img">
            <img src="img/macbook.png" alt="" />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section__head">
          <h2>Who are we?</h2>
          <div className="section__line"></div>
        </div>

        <div className="section__wrapper">
          <div className="section__desc">
            <p>
              Uplift Code Camp’s mission is to make the Filipino tech talent
              globally competitive through comprehensive coding camps. Our
              students go through rigorous 6-month part-time courses. Then we
              connect graduates with companies who hire great programmers.
            </p>
          </div>
          <div className="video"></div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>What we do?</h2>
          <div className="section__line"></div>
        </div>

        <div className="section__wrapper cards">
          <Link className="card card-normal" to="/courses">
            <div className="card__img">
              <img src="img/landing page card 1.jpg" alt="web development" />
            </div>
            <div className="card__desc">
              <h3 className="color-accent-light">Full Stack Web Development</h3>
              <p>Available online</p>
            </div>
          </Link>

          <Link className="card card-normal" to="/courses">
            <div className="card__img">
              <img src="img/landing page card 2.jpg" alt="short courses" />
            </div>
            <div className="card__desc">
              <h3 className="color-accent-light">Short Courses</h3>
              <p>Taught on Weekends</p>
            </div>
          </Link>

          <Link className="card card-normal" to="/partners">
            <div className="card__img">
              <img src="img/landing page card 3.jpg" alt="partnerships" />
            </div>
            <div className="card__desc">
              <h3 className="color-accent-light">Company Partnership</h3>
              <p>Hire our best grads</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Your Career Path</h2>
          <div className="section__line"></div>
        </div>

        <div className="section__wrapper cards cards-long">
          <div className="card card-long">
            <FontAwesomeIcon icon={faCode} className="color-accent-dark" />
            <div className="card-long__desc">
              <h3>Learn to code</h3>
              <p>
                Learn JavaScript, HTML, CSS, Node, React and more in our live,
                online coding class.
              </p>
            </div>
          </div>

          <div className="card card-long">
            <FontAwesomeIcon icon={faImage} className="color-accent-dark" />
            <div className="card-long__desc">
              <h3>Build a portfolio</h3>
              <p>
                Build complex projects and beautiful looking websites to
                showcase your talent.
              </p>
            </div>
          </div>

          <div className="card card-long">
            <FontAwesomeIcon icon={faIdCard} className="color-accent-dark" />
            <div className="card-long__desc">
              <h3>Land a job</h3>
              <p>
                We partner with local and international companies to help our
                graduates find their first opportunity.
              </p>
            </div>
          </div>

          <div className="card card-long">
            <FontAwesomeIcon
              icon={faHandsHelping}
              className="color-accent-dark"
            />
            <div className="card-long__desc">
              <h3>Be the best</h3>
              <p>
                Our courses prepare you for the real world. Develop a strong
                foundation to excel in your new Software Development career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Stories from our Students</h2>
          <div className="section__line"></div>
        </div>

        <div className="section__wrapper testimonials">
          {testimonials.map((item, index) => {
            return (
              <div className="testimonial" key={index}>
                <div className="testimonial__img">
                  <img src="" alt="" />
                </div>
                <div className="testimonial__stars">
                  <FontAwesomeIcon icon={faStar} className="yellow" />
                  <FontAwesomeIcon icon={faStar} className="yellow" />
                  <FontAwesomeIcon icon={faStar} className="yellow" />
                  <FontAwesomeIcon icon={faStar} className="yellow" />
                  <FontAwesomeIcon icon={faStar} className="yellow" />
                </div>
                <p className="color-accent-light">{item.name}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
