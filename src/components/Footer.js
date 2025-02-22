function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h2>About</h2>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </div>

        {/* Policy Section */}
        <div className="footer-section">
          <h2>Policy</h2>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/account-deletion">Account Deletion</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h2>Social Media</h2>
          <ul className="footer-links">
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact-section">
          <h1>For queries contact: HunarBazaar@gmail.com</h1>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 HunarBazaar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;