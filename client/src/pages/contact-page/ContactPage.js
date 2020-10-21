import React, { useEffect, useState, useRef } from "react";
import './ContactPage.css';

const ContactPage = () => {
    const handleSendEmail = () => {
        console.log("sent");
    }

    return (
        <div className="contact-page-container">
            <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
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