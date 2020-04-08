import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Borrow from './components/borrow'
import Borrow2 from './components/borrow2'
import Footer from './components/footer'
import NewsCarousel from './components/news-carousel'
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/borrow">
            <Borrow />
          </Route>
          <Route path="/borrow2">
            <Borrow2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div className="home">

    <div className="cover">

      <nav>
        <div className="logo">
          <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585982215/logo_kp9op5.svg" />
        </div>

        <div className="gap"></div>
        <Link href="/borrow" to="/borrow" className="link">GET HELP</Link>
        <a href="#why-had" className="link">WHY HAD</a>
        <a href="https://humanagainstdisaster.typeform.com/to/HSt9Rq" target="_blank" className="link button">DONATE</a>
      </nav>

      <div className="banner">
        <div className="title">Get help to overcome financial stress during COVID19</div>
        <Link to="/borrow" className="cta">Get Help</Link>
      </div>


    </div>

    <section className="mission">
      <div className="title">Our misson</div>

      <div className="description">Our mission is to make sure everyone has shelter, food and medications during a disaster</div>

      <div className="bottom"></div>
    </section>

    <section className="how">
      <div className="title">HOW IT WORKS</div>

      <div className="description">
        Humans Against Disaster (HAD) is a non-profit run 100% by volunteers. We match potential donors with those in need. The money donors contribute goes directly to those in need.
      </div>

      <br />
      <div className="sectitle">WANT TO DONATE TO THOSE IN NEED?</div>
      <br />

      <div className="tiles">
        <div className="tile">
          <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585981466/create_rfelwk.svg" />
          <div className="heading">Submit Info</div>
          <div className="sub">Answer 6 short questions to get matches.</div>

        </div>
        <div className="tile">
          <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585981464/share_fh7aun.svg" />
          <div className="heading">Get Matched</div>
          <div className="sub">We hand pick 5 vetted matches for you.</div>

        </div>
        <div className="tile">
          <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585981462/help_kh2kki.svg" />
          <div className="heading">Donate Directly</div>
          <div className="sub">HAD is not involved in the donation. You would transfer money directly.  </div>

        </div>

      </div>

      <div className="bottom"></div>
    </section>

    <section id="why-had">
      <div className="title">Why HAD?</div>

      {/* <div className="description">
        An estimated 30% would lose their jobs during the Coronavirus pandemic. The unemployment exchanges won't be able to deal with this volume quickly. Many around the world, would need money for food, shelter and medications.
    </div> */}
      <div className="description">
        We looked a various options like Kiva.org, gofundme.com and others. We didn't find a way to contribute in real-time to those in need. Humans Against Disaster was born out of our experience in trying to donate.
      </div>

      <div className="team">HAD is a 100% volunteer project by the same team behind <a href="https://thewaylo.com" target="_blank">Waylo Price Prediction</a></div>

      <div className="bottom"></div>
    </section>

    <section>
      <div className="title">COVID-19 GLOBAL PANDEMIC</div>

      <div className="description">
        The Coronavirus has disrupted millions of people in almost every industry. Together so we can all make it through this pandemic.
  </div>

      <div className="gallery">
        {/* <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585982215/group_ddk02j.png" /> */}


        <NewsCarousel />
      </div>

      <div className="bottom"></div>
    </section>

    <section id="why-had" className="newsletter">
      <div className="title">SUBSCRIBE</div>

      <div className="description">
        Sign up with your email address to receive news and updates from Humans Against Disaster. We may share updates on ways to volunteer or to receive services here as they come up.
      </div>

      <form name="contact" method="POST" >
        <input type="hidden" name="form-name" value="contact" />

      
          <input type="email" name="email" placeholder="Email Address" />  <button type="submit">Sign Up</button>
        

      </form>

      <div className="bottom"></div>
    </section>

    <Footer />

  </div>;
}