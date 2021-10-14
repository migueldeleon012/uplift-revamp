<<<<<<< HEAD
import { useState } from 'react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    let name = e.target.name;

    setInput({ ...input, [name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    alert('Sent!'); // needs improvement
    // console.log(input);
  };
  return (
    <div>
      <header className="header header-long bg-contact">
        <h2 className="color-white">We'd Love To Hear From You.</h2>
        <p className="color-white">Contact Us</p>
      </header>

      <section className="section blocks">
        <div className="block">
          <div className="section__head">
            <h2 className="text-center">How Can We Help You?</h2>
            <div className="section__line"></div>
            <p className="margin-top">
              If you have any questions or need help, please fill out the form
              below. We do our best to respond within 1 business day.
            </p>
          </div>
        </div>
        <div className="block">
          <form onSubmit={formHandler} className="form">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              onChange={(e) => inputHandler(e)}
              className={name === '' ? 'border-red' : ''}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              onChange={(e) => inputHandler(e)}
              required
            />
            <select
              required
              name="reason"
              defaultValue="Select a Reason*"
              onChange={(e) => inputHandler(e)}
            >
              <option disabled>Select a Reason*</option>
              <option>General Inquiry</option>
              <option>Enrollment Inquiry</option>
              <option>Be a Partner</option>
              <option>Careers</option>
            </select>
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              onChange={(e) => inputHandler(e)}
              required
            />
            <textarea
              placeholder="Message*"
              name="message"
              onChange={(e) => inputHandler(e)}
              required
              rows="5"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
=======
import { useState } from 'react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    let name = e.target.name;

    setInput({ ...input, [name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    alert('Sent!'); // needs improvement
    // console.log(input);
  };
  return (
    <div>
      <header className="header header-long bg-contact">
        <h2 className="color-white">We'd Love To Hear From You.</h2>
        <p className="color-white">Contact Us</p>
      </header>

      <section className="section blocks">
        <div className="block">
          <div className="section__head">
            <h2 className="text-center">How Can We Help You?</h2>
            <div className="section__line"></div>
            <p className="margin-top">
              If you have any questions or need help, please fill out the form
              below. We do our best to respond within 1 business day.
            </p>
          </div>
        </div>
        <div className="block">
          <form onSubmit={formHandler} className="form">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              onChange={(e) => inputHandler(e)}
              className={name === '' ? 'border-red' : ''}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              onChange={(e) => inputHandler(e)}
              required
            />
            <select
              required
              name="reason"
              defaultValue="Select a Reason*"
              onChange={(e) => inputHandler(e)}
            >
              <option disabled>Select a Reason*</option>
              <option>General Inquiry</option>
              <option>Enrollment Inquiry</option>
              <option>Be a Partner</option>
              <option>Careers</option>
            </select>
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              onChange={(e) => inputHandler(e)}
              required
            />
            <textarea
              placeholder="Message*"
              name="message"
              onChange={(e) => inputHandler(e)}
              required
              rows="5"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
>>>>>>> 0583b9446a832e9f41c76dffb5e57d74693b6320
