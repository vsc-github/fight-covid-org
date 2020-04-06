import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import './borrow2-styles.css'

const Borrow2 = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={null}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (<div className="borrow2">
        <ReactFullpage.Wrapper>
          <div className="section">

            <div className="wrap">
              <div className="left">

                <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586181919/hands_ie7jj9.jpg" className="bg" />
                <div className="layer">

                  <a href="/" className="logo">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585982215/logo_kp9op5.svg" />
                  </a>

                  <div className="quote">

                    HAD matches those in need to those that can help. 100% of all donations are delivered immediately. Provide help in minutes.
                  </div>

                </div>
              </div>
              <div className="right">

                <div className="top"> Already signed up? <span>Sign in</span></div>

                <div className="box">

                  <fieldset>

                    <legend>Personal Details</legend>


                    <div class="field">
                      <label class="label" for="">Full name</label>
                      <div class="control">
                        <input id="name" name="name" type="text" placeholder="Name" class="input " required="" />

                      </div>
                    </div>


                    <div class="field">
                      <label class="label" for="email">Email address</label>
                      <div class="control">
                        <input id="email" name="email" type="text" placeholder="Email" class="input " />

                      </div>
                    </div>


                    <div class="field">
                      <label class="label" for="city">City</label>
                      <div class="control">
                        <input id="city" name="city" type="text" placeholder="Phone" class="input " />

                      </div>
                    </div>


                    <div class="field">
                      <label class="label" for="country">Country</label>
                      <div class="control">
                        <input id="country" name="country" type="text" placeholder="eg. USA, India, Italy" class="input " />

                      </div>
                    </div>


                    <div class="field">
                      <label class="label" for="zip">Zip Code</label>
                      <div class="control">
                        <input id="zip" name="zip" type="text" placeholder="eg. 90201" class="input " />

                      </div>
                    </div>


                    <div class="field">
                      <label class="label" for="address">Current Address</label>
                      <div class="control">
                        <textarea class="textarea" id="address" name="address"></textarea>
                      </div>
                    </div>

                  </fieldset>

                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Next
                </button>

                </div>

              </div>

            </div>

          </div>
          <div className="section">
            <div className="section">

              <div className="wrap">
                <div className="left">

                  <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586181919/hands_ie7jj9.jpg" className="bg" />
                  <div className="layer">

                    <a href="/" className="logo">
                      <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1585982215/logo_kp9op5.svg" />
                    </a>

                    <div className="quote">

                      HAD is a non-profit that helps out when you are in need. 100% of the donations go to the field.
      </div>

                  </div>
                </div>
                <div className="right">

                  <p>Section 1 (welcome to fullpage.js)</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
    </button>
                </div>

              </div>

            </div>
          </div>
        </ReactFullpage.Wrapper>
      </div>
      );
    }}
  />
);

export default Borrow2;