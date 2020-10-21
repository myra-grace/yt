import React, { useEffect, useState, useRef } from "react";
import './ContactPage.css';

const ContactPage = () => {

    return (
        <div className="contact-page-container">
            <form className="contact-page-form"
            netlify name="EmailForm">
                <p>Email</p>
                <input type="email" size="19" name="ContactName" required="required" /><br/>
                <p>Message</p>
                <textarea className="contact-textarea" name="ContactComment" required="required"></textarea><br/><br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default ContactPage;