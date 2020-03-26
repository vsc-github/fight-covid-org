import React, { Component } from 'react';
// import axios from 'axios';


class DetailsInput extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <form class="form-horizontal" >
            <fieldset>


              <legend>Personal Details</legend>


              <div class="field">
                <label class="label" for="">Full name</label>
                <div class="control">
                  <input id="" name="" type="text" placeholder="eg. Douglas Smith" class="input " required="" />

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
          </form>

        );
    }
}

export default DetailsInput;