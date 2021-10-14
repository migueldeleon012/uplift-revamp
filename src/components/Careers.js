const Careers = () => {
  return (
    <div>
      <header className="header header-long bg-team color-white">
        <h2>Join Our Team</h2>
        <p className="color-white">Career opportunities here at Uplift</p>
      </header>

      <section className="section">
        <div className="section__head">
          <h2>Uplift’s Mission</h2>
          <div className="section__line"></div>
        </div>
        <div className="section__wrapper">
          <p>
            At Uplift, our mission is to bridge the technology education gap. We
            want to nurture a strong team and community of learners, teachers,
            and engineers who are driven by uplifting themselves and everyone
            around them through innovation and creation.
          </p>
        </div>
        <div className="section__careers">
          <div className="career">
            <div className="section__head">
              <h2>Open Positions</h2>
              <div className="section__line"></div>
            </div>

            <div className="section__wrapper text-start">
              <h3>We are looking for:</h3>
              <ul className="section__ul">
                <li>
                  <span>• </span>
                  <p>Full-time Teaching Partners</p>
                </li>
                <li>
                  <span>• </span>
                  <p>Part-time Teaching Partners</p>
                </li>
                <li>
                  <span>• </span>
                  <p>Teaching Assistants</p>
                </li>
              </ul>

              <p>
                who have a passion for teaching and sharing their expertise.
              </p>
            </div>
          </div>

          <div className="career">
            <div className="section__head">
              <h2>Competencies Needed</h2>
              <div className="section__line"></div>
            </div>
            <div className="section__wrapper">
              <ul className="section__ul">
                <li>
                  <span>• </span>
                  <p>
                    Experience on web development, converting UI/UX designs to
                    user-centric, responsive and interactive websites
                  </p>
                </li>
                <li>
                  <span>• </span>
                  <p>
                    Hands on experience in different noSQL and SQL databases,
                    RESTful APIs, unit testing
                  </p>
                </li>
                <li>
                  <span>• </span>
                  <p>
                    Proficient in HTML, CSS, and either or both JS (React and
                    nodeJS) and PHP (Laravel)
                  </p>
                </li>
                <li>
                  <span>• </span>
                  <p>
                    Capability to motivate learning and share your knowledge
                    with empathy and adaptive/effective teaching styles
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear color-white questions">
        <h2 className="section__header-padding">
          Have questions? Join our community.
        </h2>
        <div className="section__wrapper">
          <p className="color-white">
            The Uplift community is a great place to ask questions. It is filled
            with current students, alumni, mentors, and instructors.
          </p>
        </div>

        <button>Join our Discord</button>
      </section>
    </div>
  );
};

export default Careers;
