import React from 'react';
import logo from './logo.svg';
import './App.css';

import DetailsInput from './components/details-input'

function App() {
  return (
    <div className="App">

      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://versions.bulma.io/0.7.0">
            <img src="https://versions.bulma.io/0.7.0/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://versions.bulma.io/0.7.0/">
              Home
         </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
                Docs
            </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/documentation/overview/start/">
                  Overview
               </a>
                <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/modifiers/syntax/">
                  Modifiers
               </a>
                <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/columns/basics/">
                  Columns
               </a>
                <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/layout/container/">
                  Layout
               </a>
                <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/form/general/">
                  Form
               </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/elements/box/">
                  Elements
               </a>
                <a className="navbar-item is-active" href="https://versions.bulma.io/0.7.0/documentation/components/breadcrumb/">
                  Components
               </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                  </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.6.2/bulma-0.6.2.zip">
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
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
