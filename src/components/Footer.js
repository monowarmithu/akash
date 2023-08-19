import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>𝔻𝕪𝕟𝕒𝕞𝕚𝕔 𝕋𝕣𝕒𝕧𝕖𝕝 𝔹𝔻</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Version</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHum</a>
          <a href="/">Project</a>
          <a href="/">Issues</a>
          <a href="/">Twiter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy policy</a>
        </div>

        <div>
          <h4>Developed By</h4>
          <a href="/">MD Shahariaz Anwar</a>
          <a href="/">Fatema Tuj Johra Lima</a>
          <a href="/">Humairatul Bushra</a>
          <a href="/">Effat Ara Eva</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
