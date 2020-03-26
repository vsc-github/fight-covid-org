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
              <div class="navbar-item"><a class="navbar-item" href="/features">Features</a><a class="navbar-item" href="/pricing">Pricing</a><a class="navbar-item" title="Web Performance Blog" href="/web-performance-blog">Blog</a><a class="navbar-item" href="/contact">Contact</a></div>
              <div class="navbar-item">
                <div class="buttons"><a class="button is-light" href="/pricing">Get Started</a><a class="button is-primary" href="/sign-in">Log in</a></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero is-large">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Large title
      </h1>
            <h2 class="subtitle">
              Large subtitle
      </h2>
          </div>
        </div>
      </section>

      <section class="section hero is-block is-relative is-small details">
        <div class="container">

          <div className="box">

            <DetailsInput />

          </div>

        </div>
      </section>

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
