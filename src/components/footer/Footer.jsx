import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payment.jpg";
import { footerLinks } from "../../data";



function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">Rise Of Coding</h1>
        <p className="footer-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis, recusandae repellendus dolore fugit porro earum sequi, laudantium dolorem.
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3b5999" }}>
            <FaFacebookF className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E1306C" }}>
            <FaInstagram className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55acee" }}>
            <FaTwitter className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E60023" }}>
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-center">
        <h3 className="footer-title">Useful Links</h3>
        <ul className="footer-list">
          {footerLinks.map((link) => (
            <li key={link.id} className="footer-list-item">{link.title}</li>
          ))}
        </ul>
      </div>

      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" /> 123 Street, City
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" /> +123456789
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" /> mail@email.com
        </div>
        <img className="payment" src={payment} alt="Payment Methods" />
      </div>
    </div>
  );
}

export default Footer;
