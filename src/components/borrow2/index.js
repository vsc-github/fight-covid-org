/* global firebase firebaseui ui */

import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';


import './borrow2-styles.css'

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'key6onyxrwfDMB9eJ' }).base('appNa1AT6J1nfOhTz');



class Borrow2 extends Component {

  constructor() {
    super();
    this.state = {
      state: '',
      user: null,
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.renderButton = this.renderButton.bind(this);


    this.getUiConfig = this.getUiConfig.bind(this);
    this.handleSignedInUser = this.handleSignedInUser.bind(this);
    this.handleSignedOutUser = this.handleSignedOutUser.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
    this.initApp = this.initApp.bind(this);
  }

  componentDidMount() {

    // setTimeout(() => {

    //   firebase.auth().onAuthStateChanged((user) => {
    //     document.getElementById('loading').style.display = 'none';
    //     document.getElementById('loaded').style.display = 'block';
    //     user ? this.handleSignedInUser(user) : this.handleSignedOutUser();
    //   });

    //   window.addEventListener('load', this.initApp);


    // }, 3000);


  }

  renderButton() {

    switch (this.state.state) {
      case '':
        return (<div class="buttons is-centered submit">
          <div class="button is-primary is-inverted is-large" href="" onClick={this.onSubmitForm}>Submit</div>
        </div>);

      case 'loading':
        return (<div className="state">Please wait...</div>);

      case 'success':
        return (<div className="state">Thank you! We will reach out to you shortly.</div>);
    }
  }

  onSubmitForm() {

    if (this.state.user === null) {
      alert('Please verify you phone number.')
      return;
    }

    const form = document.forms.borrower;
    const formData = new FormData(form);

    var fields = {};
    formData.forEach((value, key) => { fields[key] = value });
    fields.phone = this.state.user.phoneNumber;
    fields.id = new Date().getTime();

    // console.log("fields",fields);

    delete fields.certificates;
    delete fields.affect;

    this.setState({
      state: 'loading',
    });

    base('Imported table').create([
      {
        "fields": fields
      }
    ], (err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      else {
        this.setState({
          state: 'success',
        });
      }
      records.forEach(function (record) {
        //   console.log(record.getId());
      });
    });

  }


  getUiConfig() {
    return {
      'callbacks': {
        // Called when the user has been successfully signed in.
        'signInSuccess': (user, credential, redirectUrl) => {
          this.handleSignedInUser(user);
          // Do not redirect.
          return false;
        }
      },
      // Opens IDP Providers sign-in flow in a popup.
      'signInFlow': 'popup',
      'signInOptions': [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: 'image', // another option is 'audio'
            size: 'invisible', // other options are 'normal' or 'compact'
            badge: 'bottomleft' // 'bottomright' or 'inline' applies to invisible.
          }
        }
      ],
      // Terms of service url.
      'tosUrl': 'https://www.google.com'
    };
  }

  handleSignedInUser(user) {
    console.log("user", user);
    this.setState({
      user
    });
  };


  /**
   * Displays the UI for a signed out user.
   */
  handleSignedOutUser() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // document.getElementById('user-signed-in').style.display = 'none';
    // document.getElementById('user-signed-out').style.display = 'block';
    ui.start('#firebaseui-container', this.getUiConfig());
  };

  // Listen to change in auth state so it displays the correct UI for when
  // the user is signed in or not.


  /**
   * Deletes the user's account.
   */
  deleteAccount() {
    firebase.auth().currentUser.delete().catch(function (error) {
      if (error.code == 'auth/requires-recent-login') {
        // The user's credential is too old. She needs to sign in again.
        firebase.auth().signOut().then(function () {
          // The timeout allows the message to be displayed after the UI has
          // changed to the signed out state.
          setTimeout(function () {
            alert('Please sign in again to delete your account.');
          }, 1);
        });
      }
    });
  };


  initApp() {
    document.getElementById('sign-out').addEventListener('click', function () {
      firebase.auth().signOut();
    });
    document.getElementById('delete-account').addEventListener(
      'click', function () {
        this.deleteAccount();
      });
  };

  render() {
    return (
      <ReactFullpage
        //fullpage options
        licenseKey={null}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (<form id="borrower" className="borrow2">
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
                            <textarea class="textarea" id="address" name="address" placeholder="Address"></textarea>
                          </div>
                        </div>

                      </fieldset>

                      <div className="button" onClick={() => fullpageApi.moveSectionDown()}>
                        Next
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

                        <legend>Education Details</legend>


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


                        </fieldset>

                        <div className="button" onClick={() => fullpageApi.moveSectionDown()}>
                          Next
                    </div>

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

                        <div className="button" onClick={() => fullpageApi.moveSectionDown()}>
                          Next
                        </div>

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


                          <legend>Add Skills</legend>


                          <div class="field">
                            <label class="label" for="cashapp">Paypal</label>
                            <div class="control">
                              <textarea id="skills" name="skills" type="text" placeholder="Writing, accounting, service industry, chef, homeworker. Add all the skills." class="input " />

                            </div>
                          </div>

                        </fieldset>

                        <div className="button" onClick={() => fullpageApi.moveSectionDown()}>
                          Next
                          </div>

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


                          <legend>Financial Details</legend>


                          <div class="field">
                            <label class="label" for="cashapp">Paypal</label>
                            <div class="control">
                              <input id="paypal" name="paypal" type="text" placeholder="Paypal" class="input " />

                            </div>
                          </div>

                          <div class="field">
                            <label class="label" for="cashapp">Cashapp</label>
                            <div class="control">
                              <input id="cashapp" name="cashapp" type="text" placeholder="Cashapp" class="input " />

                            </div>
                          </div>


                          <div class="field">
                            <label class="label" for="venmo">Venmo</label>
                            <div class="control">
                              <input id="venmo" name="venmo" type="text" placeholder="Venmo" class="input " />

                            </div>
                          </div>


                          <div class="field">
                            <label class="label" for="upi">UPI</label>
                            <div class="control">
                              <input id="upi" name="upi" type="text" placeholder="UPI" class="input " />

                            </div>
                          </div>



                          <div class="field">
                            <label class="label" for="payment">Any other financial details</label>
                            <div class="control">
                              <textarea class="textarea" id="payment" name="payment" placeholder="Any other financial details"></textarea>
                            </div>
                          </div>

                        </fieldset>

                        <div className="button" onClick={() => {

                          setTimeout(() => {
                            firebase.auth().onAuthStateChanged((user) => {
                              // initiate phone verification widget
                              document.getElementById('loading').style.display = 'none';
                              document.getElementById('loaded').style.display = 'block';
                              user ? this.handleSignedInUser(user) : this.handleSignedOutUser();
                            });
                          }, 1000)

                          fullpageApi.moveSectionDown();
                        }
                        }>
                          Next
                    </div>


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


                          <legend>Verify Phone Number</legend>


                          {/* <div class="field">
                            <label class="label" for="cashapp">Paypal</label>
                            <div class="control">
                              <input id="skills" name="skills" type="text" placeholder="writing, accounting, service industry, chef, homeworker" class="input " />
    
                            </div>
                          </div> */}

                          <div id="container" style={{ margin: '2rem 0' }}>
                            <div className="box" id="loading">Loading...</div>
                            <div className="box" id="loaded" class="hidden">
                              <div id="main">
                                <div id="user-signed-out" class="hidden">
                                  <div id="firebaseui-spa">
                                    <div id="firebaseui-container"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {
                            this.state.user === null ? null : (<div className="box">
                              <div>Phone number <strong>{this.state.user.phoneNumber}</strong> has been verified.</div>
                            </div>)
                          }

                          {
                            this.renderButton()
                          }

                        </fieldset>

                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </ReactFullpage.Wrapper>
          </form>
          );
        }}
      />
    );
  }
}

export default Borrow2;