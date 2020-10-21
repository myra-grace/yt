import React, { useEffect, useState, useRef } from "react";
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <div className="contact-page-container">
            <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name <br/><input type="text" name="name" required="required"/></label>
          </p>
          <p>
            <label>Your Email <br/><input type="email" name="email" required="required"/></label>
          </p>
          <p>
            <label>Message <br/><textarea name="message" required="required"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
            {/* <form className="contact-page-form"
            netlify method="POST" name="contact">
                <p>Email</p>
                <input type="email" size="19" name="ContactName" required="required" /><br/>
                <p>Message</p>
                <textarea className="contact-textarea" name="ContactComment" required="required"></textarea><br/><br/>
                <button type="submit" value="Submit" onClick={handleSendEmail}>Send</button>
            </form> */}
        </div>
    )
}

export default ContactPage;