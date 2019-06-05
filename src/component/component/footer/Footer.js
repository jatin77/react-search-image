import React from 'react';
import './footer.css';
function Footer() {
  return (
    <footer>
      <div className='footer-left'>
        <p>See.Innovation</p>
        <p>Discover more</p>
      </div>
      <div className='footer-right'>
        <p>Meet us:</p>
        <p>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
