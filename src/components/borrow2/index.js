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
                        <input id="country" name="country" type="text" placeholder="Country" class="input " />

                      </div>
                    </div>


                    <div class="field">
                      <label class="label" for="zip">Zip Code</label>
                      <div class="control">
                        <input id="zip" name="zip" type="text" placeholder="Zip Code" class="input " />

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

                  <div className="top"> Already signed up? <span>Sign in</span></div>

                  <div className="box">

                    <legend>Educational Details</legend>


                    <fieldset>


                      <div class="field">
                        <label class="label" for="">Are you currently a student?</label>
                        <div class="control">
                          <label class="radio inline" for="student-0">
                            <input type="radio" name="student" id="student-0" value="Yes" checked="checked" />
                            Yes
                          </label>
                          <label class="radio inline" for="student-1">
                            <input type="radio" name="student" id="student-1" value="No" />
                            No
                          </label>
                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="college">Highest level of education</label>
                        <div class="control">
                          <input id="college" name="college" type="text" placeholder="Name of College/University" class="input " />

                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="field">Field of study</label>
                        <div class="control">
                          <input id="field" name="field" type="text" placeholder="Field of Study" class="input " />

                        </div>
                      </div>

                      <div class="field">
                        <label class="label" for="field">Licences and Certificates</label>
                        <div class="control">
                          <input id="certificates" name="certificates" type="text" placeholder="Licences and/or Certificates" class="input " />

                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="skills">Please enter as many skills you have</label>
                        <div class="control">
                          <input id="skills" name="skills" type="text" placeholder="eg. cooking, cleaning, driving, accounting, typing etc" class="input " />

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


                  <div className="top"> Already signed up? <span>Sign in</span></div>

                  <div className="box">

                    <fieldset>


                      <legend>Empolyment Details</legend>


                      <div class="field">
                        <label class="label" for="jobtitle">Job Title</label>
                        <div class="control">
                          <input id="jobtitle" name="jobtitle" type="text" class="input " placeholder="Job Title" />

                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="jobtype">Employment Type (Full Time, Part Time, Casual/Hourly)</label>
                        <div class="control">
                          <input id="jobtype" name="jobtype" type="text" class="input " placeholder="Employment Type (Full Time, Part Time, Casual/Hourly)" />

                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="company">Company</label>
                        <div class="control">
                          <input id="company" name="company" type="text" class="input " placeholder="Company" />

                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="affect">Did Covid-19 affect your employment?</label>
                        <div class="control">
                          <label class="radio" for="previously-0">
                            <input type="radio" name="affect" id="affect-0" value="Yes" checked="checked" />
                            Yes
</label>
                          <label class="radio" for="previously-1">
                            <input type="radio" name="affect" id="affect-1" value="No" />
                            No
</label>
                        </div>
                      </div>

                      <div class="field">
                        <label class="label" for="previously">Will your job come back after Covid-19?</label>
                        <div class="control">
                          <label class="radio" for="previously-0">
                            <input type="radio" name="previously" id="previously-0" value="Yes" checked="checked" />
                            Yes
</label>
                          <label class="radio" for="previously-1">
                            <input type="radio" name="previously" id="previously-1" value="No" />
                            No
</label>
                          <label class="radio" for="previously-1">
                            <input type="radio" name="previously" id="previously-1" value="No" />
                            Maybe
</label>
                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="remote">Are you open for remote work?</label>
                        <div class="control">
                          <label class="radio" for="remote-0">
                            <input type="radio" name="remote" id="remote-0" value="Yes" checked="checked" />
                            Yes
</label>
                          <label class="radio" for="remote-1">
                            <input type="radio" name="remote" id="remote-1" value="No" />
                            No
</label>
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


                  <div className="top"> Already signed up? <span>Sign in</span></div>

                  <div className="box">

                    <fieldset>


                      <legend>Financial Details</legend>


                      <div class="field">
                        <label class="label" for="cashapp">Paypal</label>
                        <div class="control">
                          <input id="paypal" name="paypal" type="text" placeholder="freddie@gmail.com" class="input " />

                        </div>
                      </div>

                      <div class="field">
                        <label class="label" for="cashapp">Cashapp</label>
                        <div class="control">
                          <input id="cashapp" name="cashapp" type="text" placeholder="$mary123" class="input " />

                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="venmo">Venmo</label>
                        <div class="control">
                          <input id="venmo" name="venmo" type="text" placeholder="eg. @markvenmo" class="input " />

                        </div>
                      </div>


                      <div class="field">
                        <label class="label" for="upi">UPI</label>
                        <div class="control">
                          <input id="upi" name="upi" type="text" placeholder="eg. sandy@ybl" class="input " />

                        </div>
                      </div>



                      <div class="field">
                        <label class="label" for="payment">Any other financial details</label>
                        <div class="control">
                          <textarea class="textarea" id="payment" name="payment"></textarea>
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