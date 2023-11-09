import "./style.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer G_container">
        <div className="inTouch">
          <h5 className="tittle">Get In Touch</h5>
          <p className="description">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <div className="G_flex">
            <span className="icon-location"></span>
            <p>123 Street, New York, USA</p>
          </div>
          <div className="G_flex">
            <span className="icon-mail_icon"></span>
            <p>info@example.com</p>
          </div>
          <div className="G_flex">
            <span className="icon-phone_icon"></span>
            <p>+012 345 67890</p>
          </div>
        </div>

        <div className="newsletter">
          <h5 className="tittle">Newsletter</h5>
          <p className="description">
            Duo stet tempor ipsum sit amet magna ipsum tempor est
          </p>
          <div>
            <div className="inputDiv">
              <label>
                <input type="text" placeholder="   Your Email Address" />
              </label>
              <button>Sign Up</button>
            </div>
          </div>
          <h6 className="follow">Follow Us</h6>
          <div className="socialIcons">
            <span className="icon-twitter"></span>
            <span className="icon-facebook"></span>
            <span className="icon-linkedin"></span>
            <span className="icon-instagram"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
