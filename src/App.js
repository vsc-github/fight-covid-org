import React from 'react';
import logo from './logo.svg';
import './App.css';

import DetailsInput from './components/details-input'

function App() {
  return (
    <div className="App">

      <nav class="navbar is-spaced">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <a href="/" className="logo">
                <img class="image" src="https://res.cloudinary.com/diknntl0x/image/upload/v1585200205/fightcovid_n86cam.svg" alt="Page Speed monitoring" title="Web Performance Monitoring Service" />
                <span>fightcovid.org</span>
              </a>
            </div>
            <div role="button" class="navbar-burger burger" tabindex="0"><span></span><span></span><span></span></div>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              {/* <div class="navbar-item"><a class="navbar-item" href="/features">Features</a><a class="navbar-item" href="/pricing">Pricing</a><a class="navbar-item" title="Web Performance Blog" href="/web-performance-blog">Blog</a><a class="navbar-item" href="/contact">Contact</a></div> */}
              <div class="navbar-item">
                <div class="buttons"><a class="button is-light" href="#fill-form">Get Help</a></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Get help in these tough times
      </h1>
            <h2 class="subtitle">
              Fightcovid.org is a non-profit that expands access to capital for those affected with COVID19 around the world. More than 2.5 million people have raised over $1 billion on Kiva. Could you be next?
      </h2>
            <div class="buttons is-centered">
              <a class="button is-primary is-inverted is-medium" href="#fill-form">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section hero is-block is-relative is-small details" id="fill-form">
        <div class="container">

          

            <DetailsInput />

            <div class="buttons is-centered submit">
              <a class="button is-primary is-inverted is-large" href="#fill-form">Submit</a>
            </div>


        </div>
      </section>

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            By Waylo COVID19 Task Force.
    </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
