const Partners = () => {
  return (
    <div>
      <header className="header header-long bg-partner color-white">
        <h2>Partner With Us</h2>
        <p className="color-white">Open Partnerships at Uplift</p>
      </header>

      <section className="section blocks">
        <div className="section__img">
          <img src="img/partner pic.jpg" alt="" />
        </div>

        <div className="block">
          <div className="section__head">
            <h2>Why Partner With Uplift?</h2>
            <div className="section__line"></div>
          </div>
          <div className="section__wrapper">
            <ul className="section__ul">
              <li>
                <span>• </span>
                <p>
                  Work with real developers and engineering leads who very well
                  know what skills software engineers should have.
                </p>
              </li>
              <li>
                <span>•</span>
                <p>
                  Agile and adaptable, we believe in continuous improvement.
                </p>
              </li>
              <li>
                <span>•</span>
                <p>
                  Quantitative and qualitative measures in place to keep us on
                  track.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-linear">
        <h2 className="color-white section__header-padding">PARTNERS</h2>
        <div className="section__partners">
          <div className="partner">
            <img src="" alt="partner 1" />
          </div>
          <div className="partner">
            <img src="" alt="partner 2" />
          </div>
          <div className="partner">
            <img src="" alt="partner 3" />
          </div>
        </div>
      </section>

      <section>
        <div className="section__head">
          <h2>What We Offer</h2>
          <div className="section__line"></div>
        </div>

        <div className="section__wrapper cards cards-partner">
          <div className="card card-partner">
            <div className="card__img">
              <img src="img/partner card 1.jpg" alt="" />
            </div>
            <div className="card__desc">
              <h3>INTERNSHIP PROGRAMS</h3>
              <p>
                We can help you grow your team through an intern partnership.
                Together, we can invest in our own community by growing skills
                and bringing the best out of talented Filipinos to fuel a strong
                workforce and community of developers.
              </p>
            </div>
          </div>

          <div className="card card-partner">
            <div className="card__img">
              <img src="img/partner card 2.jpg" alt="" />
            </div>
            <div className="card__desc">
              <h3>CUSTOMIZED TRAINING</h3>
              <p>
                Uplift can help your team by sharpening their talents. Our
                learning methodology is focused on practicing and applying
                concepts to real projects, and we continuously improve it to be
                more effective. We will work closely with you so we can ensure
                that we are meeting your needs and setting your team up for
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="talk">
        <button>LET'S TALK</button>
      </section>
    </div>
  );
};

export default Partners;
