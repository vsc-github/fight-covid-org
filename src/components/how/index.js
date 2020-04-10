import React, { Component } from 'react';

class How extends Component {
    constructor() {
        super();
        this.state = {
            state: 'borrowers',
        };

    }


    render() {


        return (<section className="how">
            <div className="title">HOW IT WORKS</div>

            <div className="description">
                Humans Against Disaster (HAD) is a non-profit run 100% by volunteers. We match potential donors with those in need. The money donors contribute goes directly to those in need.
        </div>

            <br />
            <div className="tabs">
                <div className={ this.state.state === 'borrowers' ? 'active tab' : 'tab' }
                     onClick={() => this.setState({ state: 'borrowers' })}
                >For Borrowers</div>
                <div className={ this.state.state === 'donors' ? 'active tab' : 'tab' }
                     onClick={() => this.setState({ state: 'donors' })}
                >For Donors</div>

            </div>
            <br />

            {
                this.state.state === 'borrowers' ? (<div className="tiles">
                <div className="tile">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586538846/b1_mwog7r.svg" />
                    <div className="heading">Create an account</div>
                    <div className="sub">How have you been affected?</div>

                </div>
                <div className="tile">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586538848/b2_rbuget.svg" />
                    <div className="heading">Share your details</div>
                    <div className="sub">We will share your story to as many people as we can.</div>

                </div>
                <div className="tile">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586538850/b3_ason3h.svg" />
                    <div className="heading">Get Help</div>
                    <div className="sub">Receive direct financial help or job offer to get you through this time.</div>

                </div>
            </div>) : (
                    <div className="tiles">
                <div className="tile">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586538852/d1_ayencj.svg" />
                    <div className="heading">Submit Info</div>
                    <div className="sub">Answer 6 short questions to get matches.</div>

                </div>
                <div className="tile">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586538854/d2_xcw5do.svg" />
                    <div className="heading">Get Matched</div>
                    <div className="sub">We hand pick 5 vetted matches for you.</div>

                </div>
                <div className="tile">
                    <img src="https://res.cloudinary.com/diknntl0x/image/upload/v1586538856/d3_xswdcm.svg" />
                    <div className="heading">Donate Directly</div>
                    <div className="sub">HAD is not involved in the donation. You would transfer money directly.  </div>

                </div>
            </div>
                )
            }

            

            <div className="bottom"></div>
        </section>)
    }

}

export default How;