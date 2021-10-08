const About = () => {
  return (
    <div>
      <header className="header header-long bg-about color-white">
        <h2>We Believe That Technology Is For Everybody</h2>
        <p className="color-white">About the Uplift's Bootcamp Experience</p>
      </header>

      <section className="section">
        <div className="section__head">
          <h2>Uplift's Mission</h2>
          <div className="section__line"></div>
        </div>
        <div className="section__wrapper">
          <p className="mission">
            Our mission is to bridge the technology talent gap thru equipping
            more individuals with relevant and critical skills to launch their
            careers in tech.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="cards">
          <div className="about">
            <h3>Inclusion</h3>
            <p>
              Everyone is welcome and valued at Uplift Code Camp. + We prize
              diversity and inclusion. We value students of any age, any gender
              and any ethnicity.
            </p>
          </div>

          <div className="about">
            <h3>Results</h3>
            <p>
              We teach you the skills you need to get results. Land a job. Ace
              an interview. Build a project. We are focused on the critical
              skills you need.
            </p>
          </div>

          <div className="about">
            <h3>Quality</h3>
            <p>
              High quality curriculum designed by an international team of
              experienced software engineers. We teach how and why, not just
              what.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Meet Our Team</h2>
          <div className="section__line"></div>
        </div>

        <div className="section__wrapper">
          <div className="team text-start">
            <div className="team__member">
              <div className="team__img">
                <img src="" alt="" />
              </div>
              <div className="team__description">
                <h4 className="color-accent-dark">Ruffa Carreon</h4>
                <span className="color-accent-light">Co-Founder</span>
                <p>
                  Ruffa is a University of the Philippines graduate with about a
                  decade of professional experience as a software engineer,
                  software architect and team lead in Manila. She is passionate
                  about teaching, community development, and technology.
                </p>
              </div>
            </div>
            <div className="team__member">
              <div className="team__img">
                <img src="" alt="" />
              </div>
              <div className="team__description">
                <h4 className="color-accent-dark">Genevieve Sarmiento</h4>
                <span className="color-accent-light">Co-Founder</span>
                <p>
                  Genevieve is a software developer with about a decade of
                  experience as a developer and consultant. She has worked at
                  both startups and large companies, including Red Hat.
                  Genevieve was born and raised in Manila, graduated from
                  University of Virginia, and has a passion for technology and
                  education.
                </p>
              </div>
            </div>

            <div className="team__member">
              <div className="team__img">
                <img src="" alt="" />
              </div>
              <div className="team__description">
                <h4 className="color-accent-dark">Michael Booth</h4>
                <span className="color-accent-light">Co-Founder</span>
                <p>
                  Michael is a software developer with more than a decade of
                  professional coding experience. He has worked at Microsoft,
                  Google and Kaggle among other companies. He is also the
                  founder and lead developer at Geometric Applications, a game
                  development company that utilizes HTML, JavaScript and CSS.
                </p>
              </div>
            </div>

            <div className="team__member">
              <div className="team__img">
                <img src="" alt="" />
              </div>
              <div className="team__description">
                <h4 className="color-accent-dark">PeeJay Saracho</h4>
                <span className="position color-accent-light">
                  Teaching Partner
                </span>
                <p>
                  PeeJay took up mobile applications development at the UP ITDC
                  where he finished valedictorian of his batch. Aside from
                  coding, he has a passion for sharing what he knows. He has
                  been teaching coding to beginners and professionals for more
                  than 4 years. He lives by Maya Angelou’s “If you get, give. If
                  you learn, teach.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
