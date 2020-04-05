import React from 'react';
import {
    Link
  } from "react-router-dom";


import './footer-styles.css'

function Footer() {
    return (
        <footer class="footer">

            <div class="content has-text-centered">

            <Link to="/borrow#fill-form">Borrow</Link>
            <a href="/https://humanagainstdisaster.typeform.com/to/HSt9Rq" target="_blank" >Donate</a>
            </div>
            <div className="content has-text-centered">
                <p>
                    16824 44th Ave W Suite 130, Lynnwood, WA 98037
    </p>
            </div>
        </footer>
    );
}

export default Footer;
