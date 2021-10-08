import './assets/sass/app.scss';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Courses from './components/Courses';
import Partners from './components/Partners';
import Careers from './components/Careers';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/partners">
          <Partners />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
