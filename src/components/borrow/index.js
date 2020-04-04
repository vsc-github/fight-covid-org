import React from 'react';
import './borrow-styles.css';

import DetailsInput from './../details-input'

function Borrow() {
  return (
    <div className="App">

      <nav class="navbar is-spaced">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <a href="/" className="logo">
                <img class="image" src="https://res.cloudinary.com/diknntl0x/image/upload/v1585982215/logo_kp9op5.svg" alt="Page Speed monitoring" title="Web Performance Monitoring Service" />
                <span>Humans Against Disaster</span>
              </a>
            </div>
            <div role="button" class="navbar-burger burger" tabindex="0"><span></span><span></span><span></span></div>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              {/* <div class="navbar-item"><a class="navbar-item" href="/features">Features</a><a class="navbar-item" href="/pricing">Pricing</a><a class="navbar-item" title="Web Performance Blog" href="/web-performance-blog">Blog</a><a class="navbar-item" href="/contact">Contact</a></div> */}
              <div class="navbar-item">
                <div class="buttons" style={{ fontWeight: '600'}}>

                <a href="https://try.typeform.com/covid-19/" target="_blank" className="button is-light">DONATE</a>
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
            Get Help to Overcome Financial Stress
      </h1>
            <h2 class="subtitle">
            Humans Against Disaster is a Non-Profit helping those affected by disasters get access to immediate funding from around the world. 
COVID-19 is everyone's disaster, but together we can help those in need.
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

export default Borrow;
