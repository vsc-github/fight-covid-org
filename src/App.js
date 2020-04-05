import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Borrow from './components/borrow'
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
      <div className="title">REGISTER TO GET HELP</div>

      <div className="description">
      100% of all donation are given to those in need in Real-Time. Donations are never held by HAD.
      </div>

      <div className="tiles">
        <div className="tile">
          <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585981466/create_rfelwk.svg" />
          <div className="heading">Create an account</div>
          <div className="sub">Tell us how you have been affected. </div>
        
        </div>
        <div className="tile">
          <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585981464/share_fh7aun.svg" />
          <div className="heading">Share your details</div>
          <div className="sub">We will share your story to as many people as we can. </div>
        
        </div>
        <div className="tile">
          <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585981462/help_kh2kki.svg" />
          <div className="heading">Get help</div>
          <div className="sub"> Receive direct financial help or job offer to get you through this time.  </div>
        
        </div>
      
      </div>

      <div className="bottom"></div>
    </section>

    <section id="why-had">
      <div className="title">COVID-19 GLOBAL PANDEMIC</div>

      <div className="description">
      The Coronavirus has disrupted millions of people in almost every industry. Together so we can all make it through this pandemic.
      </div>

      <div className="gallery">
        <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585982215/group_ddk02j.png" />
      </div>

      <div className="bottom"></div>
    </section>

  </div>;
}