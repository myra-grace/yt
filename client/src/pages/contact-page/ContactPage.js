import React, { useEffect, useState, useRef } from "react";
import './ContactPage.css';

const ContactPage = () => {

    return (
        <div className="contact-page-container">
            <form className="contact-page-form"
            netlify method="POST" name="EmailForm">
                <p>Email</p>
                <input type="email" size="19" name="ContactName" required="required" /><br/>
                <p>Message</p>
                <textarea className="contact-textarea" name="ContactComment" required="required"></textarea><br/><br/>
                <button type="submit" value="Submit"></button>
            </form>
        </div>
    )
}

export default ContactPage;