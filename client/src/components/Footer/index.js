import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <div className="footer">
            {/* I DO NOT CURERENTLY HAVE TWITTER OR INSTAGRAM BUT I WANTED TO SHOW I COULD SET IT UP IF NEEDED */}
            <a href="https://www.facebook.com/brent.miller.338/"><img src="/images/footerlink-facebook.png" width="30px"></img></a>
            <img src="/images/footerlink-instagram.png" width="30px"></img>
            <img src="/images/footerlink-twitter.png" width="30px"></img>
            <a href="http://linkedin.com/in/brent-miller-736109182"><img src="/images/linkedin.jpg" width="30px"></img></a>
            <h6>Brent Miller</h6>
            <h6>802-730-3373</h6>
            <h6>bdm802@gmail.com</h6>
            <h6>@ 2020 BCA Projects</h6>
        </div>

    )

}
