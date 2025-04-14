import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-image" src={assets.logo} alt="" />
            <p>At Compe, we build computers that don’t just run — they sprint, fly, and maybe even teleport (we’re working on it). Whether you're gaming, designing, 
              coding, or just aggressively refreshing your email, we’ve got the perfect beast for your digital adventures. 
              Fueled by caffeine, curiosity, and a love for all things tech, our machines are crafted to keep up with your wildest clicks and quirkiest workflows.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#footer">Contact Us</a></li>
                <li><a href="/privacy-policy">Privacy policy</a></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact: compe@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © compe - All Right Reserved.</p>
    </div>
  )
}

export default Footer
