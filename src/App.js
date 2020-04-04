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
        <Link href="/borrow" to="/borrow" className="link">Borrow</Link>
        <div className="link">Learn</div>
        <div className="link">Resources</div>
        <div className="link button">CTA</div>
      </nav>

      <div className="banner">
        <div className="title">Get help to overcome financial stress during COVID19</div>
        <Link to="/borrow" className="cta">Borrow</Link>
      </div>
      

    </div>

    <section className="mission">
      <div className="title">Our misson</div>

      <div className="description">Our misson is to ensure everyone has enough to eat during quarantine/lockdown.</div>

      <div className="bottom"></div>
    </section>

    <section className="how">
      <div className="title">How it works</div>

      <div className="tiles">
        <div className="tile">
          <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585981466/create_rfelwk.svg" />
          <div className="heading">Create an account</div>
          <div className="sub">How have you been affected?</div>
        
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

    <section className="mission">
      <div className="title">Why now?</div>

      <div className="gallery">
        <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585982215/group_ddk02j.png" />
      </div>

      <div className="bottom"></div>
    </section>

  </div>;
}