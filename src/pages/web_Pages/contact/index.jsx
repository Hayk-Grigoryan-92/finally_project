import "./style.scss";

export const Contact = () => {
  return (
    <div className="contact G_container">
      <div className="contactPageLocation">
        <span>Home /</span>
        <span>Shop /</span>
      </div>

      <h2>CONTACT US</h2>

      <div className="contactSection">
        <div className="messageSection">
          <div className="inputForm">
            <label>
              <input type="text" placeholder="Your Name" />
            </label>
          </div>
          <div className="inputForm">
            <label>
              <input type="text" placeholder="Your Email" />
            </label>
          </div>
          <div className="inputForm">
            <label>
              <input type="text" placeholder="Subject" />
            </label>
          </div>
          <div className="inputTextArea">
            <label>
              <textarea type="text" placeholder="Message" />
            </label>
          </div>
          <button className="messageSubmit">Send Message</button>
        </div>

        <div className="aboutUSInfo">
          <div className="locationInfo" style={{ width: "100%" }}>
            <iframe
              title="google-map"
              width="100%"
              height="250"
              src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=new%20york+(Multi%20Shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>

          <div className="contactInfo">
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
        </div>
      </div>
    </div>
  );
};
