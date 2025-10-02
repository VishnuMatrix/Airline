import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-breadcrumb">
        <div className="breadcrumb-content">
          <span>Aura</span> &gt; <span>Book a flight</span>
        </div>
      </div>

      <div className="footer-links-container">
        {/* Top 4 Columns */}
        <div className="footer-links-grid">
          <div className="link-column">
            <h4>About us</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Media Centre</a>
              </li>
              <li>
                <a href="#">Our planet</a>
              </li>
              <li>
                <a href="#">Our people</a>
              </li>
              <li>
                <a href="#">Our communities</a>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Help and Contact</a>
              </li>
              <li>
                <a href="#">Travel Updates</a>
              </li>
              <li>
                <a href="#">Special Assistance</a>
              </li>
              <li>
                <a href="#">Frequently asked questions</a>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Book</h4>
            <ul>
              <li>
                <a href="#">Book flights</a>
              </li>
              <li>
                <a href="#">Travel services</a>
              </li>
              <li>
                <a href="#">Transportation</a>
              </li>
              <li>
                <a href="#">Planning your trip</a>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Manage</h4>
            <ul>
              <li>
                <a href="#">Check-in</a>
              </li>
              <li>
                <a href="#">Manage your booking</a>
              </li>
              <li>
                <a href="#">Chauffeur drive</a>
              </li>
              <li>
                <a href="#">Flight status</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom 4 Columns */}
        <div className="footer-links-grid">
          <div className="link-column">
            <h4>Before you fly</h4>
            <ul>
              <li>
                <a href="#">Baggage</a>
              </li>
              <li>
                <a href="#">Visa and passport information</a>
              </li>
              <li>
                <a href="#">Health</a>
              </li>
              <li>
                <a href="#">Travel information</a>
              </li>
              <li>
                <a href="#">Dubai International</a>
              </li>
              <li>
                <a href="#">To and from the airport</a>
              </li>
              <li>
                <a href="#">Rules and notices</a>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Where we fly</h4>
            <ul>
              <li>
                <a href="#">Route map</a>
              </li>
              <li>
                <a href="#">Africa</a>
              </li>
              <li>
                <a href="#">Asia and Pacific</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
              <li>
                <a href="#">The Americas</a>
              </li>
              <li>
                <a href="#">The Middle East</a>
              </li>
              <li>
                <a href="#">Flights to all countries/territories</a>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Experience</h4>
            <ul>
              <li>
                <a href="#">Cabin features</a>
              </li>
              <li>
                <a href="#">Shop Emirates</a>
              </li>
              <li>
                <a href="#">What's on your flight</a>
              </li>
              <li>
                <a href="#">Inflight entertainment</a>
              </li>
              <li>
                <a href="#">Dining</a>
              </li>
              <li>
                <a href="#">Our lounges</a>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Loyalty</h4>
            <ul>
              <li>
                <a href="#">Log in to Aura Skywards</a>
              </li>
              <li>
                <a href="#">Join Aura Skywards</a>
              </li>
              <li>
                <a href="#">Our partners</a>
              </li>
              <li>
                <a href="#">Business Rewards benefits</a>
              </li>
              <li>
                <a href="#">Register your company</a>
              </li>
              <li>
                <a href="#">Aura Skywards Programme Rules</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-extra-section">
          <div className="extra-column subscribe-column">
            <h4>Subscribe to our special offers</h4>
            <p>Save with our latest fares and offers.</p>
            <a href="#" className="unsubscribe-link">
              Unsubscribe or change your preferences
            </a>
            <form className="subscribe-form">
              <input type="email" placeholder="Email address" />
              <button type="submit">Subscribe</button>
            </form>
            <p className="privacy-info">
              For details on how we use your information, please see our{" "}
              <a href="#">privacy policy</a>.
            </p>
          </div>
          <div className="extra-column">
            <h4>Aura App</h4>
            <p>Book and manage your flights on the go.</p>
            <div className="app-badges">
              <a href="#" className="app-badge">
                [Download on the App Store]
              </a>
              <a href="#" className="app-badge">
                [GET IT ON Google Play]
              </a>
              <a href="#" className="app-badge">
                [Explore it on AppGallery]
              </a>
            </div>
          </div>
          <div className="extra-column">
            <h4>Connect with us</h4>
            <p>Share your Emirates experience.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                f
              </a>
              <a href="#" className="social-icon">
                t
              </a>
              <a href="#" className="social-icon">
                in
              </a>
              <a href="#" className="social-icon">
                ig
              </a>
              <a href="#" className="social-icon">
                yt
              </a>
              <a href="#" className="social-icon">
                tk
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-legal">
          <div className="legal-links">
            <a href="#">Accessibility statement</a>
            <a href="#">Contact us</a>
            <a href="#">Privacy policy</a>
            <a href="#">Terms and conditions</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Cybersecurity</a>
            <a href="#">Modern Slavery Act transparency statement</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="footer-logo-box">
            <span>Aura</span>
          </div>
        </div>

        <p className="footer-copyright">
          © 2025 The AURA Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
