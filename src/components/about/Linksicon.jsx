import React from 'react';
import '../../styles/about/Links-icon.css';

const SocialMediaLinks = () => {
  return (
    <ul className="social-media-list">
      <li className="social-media-item">
        <a href="#" className="social-media-link">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <span className="social-media-text"> - Facebook</span>
        </a>
      </li>
      <li className="social-media-item">
        <a href="#" className="social-media-link">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <span className="social-media-text"> - Twitter</span>
        </a>
      </li>
      <li className="social-media-item">
        <a href="#" className="social-media-link">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
          <span className="social-media-text"> - Google</span>
        </a>
      </li>
      <li className="social-media-item">
        <a href="#" className="social-media-link">
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <span className="social-media-text"> - Instagram</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
