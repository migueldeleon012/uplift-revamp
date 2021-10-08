const Courses = () => {
  return (
    <div className="wrapper">
      <header className="header header-short color-white">
        <h2>Start Learning Now!</h2>
        <p className="color-white">
          Join our online, live, interactive full-stack development course in
          full time or part time mode.
        </p>
      </header>

      <section className="section">
        <div className="section__head">
          <h2>View our Courses</h2>
          <div className="section__line"></div>
        </div>

        <section className="section__wrapper">
          <div className="card">
            <div className="course">
              <div className="course__name">
                <h4>MERN Stack Bootcamp Summary</h4>
              </div>
              <div className="course__line"></div>
              <div className="course__wrapper">
                <div className="course__course">
                  <div className="course__info">
                    <h3 className="color-accent-light">REMOTE | FULL-TIME</h3>
                    <p>16 weeks</p>
                    <p>Monday-Friday 8:00am to 5:00pm</p>
                    <p>Starting at Php 50,000</p>
                  </div>
                  <div className="course__upcoming">
                    <h3 className="color-accent-light">UPCOMING COURSES</h3>
                    <strong>Aug 2, 2021 - Nov 26, 2021</strong>
                  </div>
                  <div className="course__info">
                    <h3 className="color-accent-light">REMOTE | PART-TIME</h3>
                    <p>24 weeks</p>
                    <p>Tues, Wed, Thu, Fri 8:00am to 5:00pm</p>
                    <p>Saturday 8AM-12PM</p>
                    <p>Starting at Php 50,000</p>
                  </div>
                  <div className="course__upcoming">
                    <h3 className="color-accent-light">UPCOMING COURSES</h3>
                    <strong>Aug 2, 2021 - Nov 26, 2021</strong>
                  </div>
                </div>

                <div className="apply">
                  <h3>ABOUT THIS COURSE</h3>
                  <p>
                    This course includes programming activities, projects and
                    assignments to practice. After completion, you will be able
                    to build a project on the MERN stack.
                  </p>
                  <button>Apply Now!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="course">
              <div className="course__name">
                <h4>PHP 7 + Laravel 8 Course Summary</h4>
              </div>
              <div className="course__line"></div>
              <div className="course__wrapper">
                <div className="course__course">
                  <div className="course__info">
                    <h3 className="color-accent-light">REMOTE | WEEKEND</h3>
                    <p>28 hours</p>
                    <p>Saturday & Sunday 9:00am to 5:00pm</p>
                    <p>Starting at Php 50,000</p>
                  </div>
                  <div className="course__upcoming">
                    <h3 className="color-accent-light">UPCOMING COURSES</h3>
                    <strong>May 8 - 9, 2021</strong>
                  </div>
                </div>
                <div className="apply">
                  <h3>ABOUT THIS COURSE</h3>
                  <p>
                    Two day web development training course in PHP7 plus Laravel
                    for developers.
                  </p>
                  <button>Apply Now!</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="section blocks">
        <div className="section__img">
          <img src="img/courses pic.jpg" alt="" />
        </div>
        <div className="block">
          <div className="section__head">
            <h2 className="text-center">Why Choose Uplift?</h2>
            <div className="section__line"></div>
          </div>
          <div className="section__wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit id
              error earum at labore? Molestias repellendus sint ipsum optio
              repudiandae minima consectetur incidunt quia vitae eveniet, animi
              non ratione quam laudantium maxime doloribus nihil ipsam illum
              voluptatum quidem repellat. Assumenda.
            </p>
          </div>
        </div>
      </section>

      <section className="section blocks">
        <div className="section__head block">
          <h2 className="bold">
            What is being taught in Uplift’s Web Development Bootcamp and short
            courses?
          </h2>
          <div className="course__circles">
            <span className="circle">HTML</span>
            <span className="circle">CSS</span>
            <span className="circle">Git</span>
            <span className="circle">JavaScript</span>
            <span className="circle">Express</span>
            <span className="circle">MongoDB</span>
            <span className="circle">Node</span>
            <span className="circle">React</span>
          </div>
        </div>
        <div className="section__wrapper block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus recusandae eos iure facere sunt. Dolor, ad rerum!
            Deleniti rem sapiente nihil magni recusandae cum nostrum eius omnis
            voluptas quibusdam magnam incidunt inventore ipsa dolor officia,
            animi est aut earum nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse fugit
            eos recusandae distinctio. Consectetur, ipsa!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Courses;
