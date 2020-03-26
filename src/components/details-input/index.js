import React, { Component } from 'react';
// import axios from 'axios';

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key6onyxrwfDMB9eJ'}).base('appNa1AT6J1nfOhTz');


class DetailsInput extends Component {
    constructor() {
        super();
        this.state = {
            state: '',
        };

        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }

    componentDidMount() {

    }

    renderButton(){
        switch(this.state.state){
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

        const form = document.forms.borrower;
        const formData = new FormData(form);

        var fields = {};
        formData.forEach((value, key) => { fields[key] = value });
        fields.id = new Date().getTime();

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
            else{
                this.setState({
                    state: 'success',
                });
            }
            records.forEach(function (record) {
            //   console.log(record.getId());
            });
          });

    }

    render() {

        return (<form id="borrower">

            <div className="box">

                <fieldset>


                    <legend>Personal Details</legend>


                    <div class="field">
                        <label class="label" for="">Full name</label>
                        <div class="control">
                            <input id="name" name="name" type="text" placeholder="eg. Douglas Smith" class="input " required="" />

                        </div>
                    </div>


                    <div class="field">
                        <label class="label" for="email">Email address</label>
                        <div class="control">
                            <input id="email" name="email" type="text" placeholder="eg. youremail@gmail.com" class="input " />

                        </div>
                    </div>


                    <div class="field">
                        <label class="label" for="phone">Phone number</label>
                        <div class="control">
                            <input id="phone" name="phone" type="text" placeholder="eg. 8959076776" class="input " />

                        </div>
                    </div>


                    <div class="field">
                        <label class="label" for="city">City</label>
                        <div class="control">
                            <input id="city" name="city" type="text" placeholder="eg. current city of stay" class="input " />

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

            </div>

            <div className="box">

                <fieldset>


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
                                <input id="college" name="college" type="text" placeholder="eg. HSC, graduate, post graduate, etc" class="input " />

                            </div>
                        </div>


                        <div class="field">
                            <label class="label" for="field">Field of study</label>
                            <div class="control">
                                <input id="field" name="field" type="text" placeholder="eg. farming, technology, foods and services etc" class="input " />

                            </div>
                        </div>


                        <div class="field">
                            <label class="label" for="skills">Please enter as many skills you have</label>
                            <div class="control">
                                <input id="skills" name="skills" type="text" placeholder="eg. cooking, cleaning, driving, accounting, typing etc" class="input " />

                            </div>
                        </div>

                    </fieldset>



                </fieldset>

            </div>

            <div className="box">

                <fieldset>


                    <legend>Empolyment Details</legend>


                    <div class="field">
                        <label class="label" for="jobtitle">Job Title</label>
                        <div class="control">
                            <input id="jobtitle" name="jobtitle" type="text" class="input " />

                        </div>
                    </div>


                    <div class="field">
                        <label class="label" for="jobtype">Employment Type</label>
                        <div class="control">
                            <input id="jobtype" name="jobtype" type="text" class="input " />

                        </div>
                    </div>


                    <div class="field">
                        <label class="label" for="company">Company</label>
                        <div class="control">
                            <input id="company" name="company" type="text" class="input " />

                        </div>
                    </div>


                    <div class="field">
                        <label class="label" for="previously">Were you previously empolyed?</label>
                        <div class="control">
                            <label class="radio" for="previously-0">
                                <input type="radio" name="previously" id="previously-0" value="Yes" checked="checked" />
                                Yes
    </label>
                            <label class="radio" for="previously-1">
                                <input type="radio" name="previously" id="previously-1" value="No" />
                                No
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


            </div>

            <div className="box">

                <fieldset>


                    <legend>Financial Details</legend>


                    <div class="field">
                        <label class="label" for="payment">Enter Financial Details (UPI, paytm, venmo, cashapp, etc)</label>
                        <div class="control">
                            <textarea class="textarea" id="payment" name="payment"></textarea>
                        </div>
                    </div>

                </fieldset>



            </div>

            {
                this.renderButton()
            }

        </form>
        );
    }
}

export default DetailsInput;