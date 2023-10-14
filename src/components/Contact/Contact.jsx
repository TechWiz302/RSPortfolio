import React, { useState } from 'react'
import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

function Contact() {

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="contactContainer" id='contact'>
      <div className="contactWrapper">
        <div className="contactTitle">Contact</div>
        <div className="contactDesc">Feel free to reach out to me for any questions or opportunities!</div>
        <form ref={form} onSubmit={handleSubmit} className="contactForm">
          <div className="contactFormTitle">
            Email Me 📧
          </div>
          <input className='contactInput' type="email" placeholder="Your Email" name="from_email" />
          <input className='contactInput' type="text" placeholder="Your Name" name="from_name" />
          <input className='contactInput' type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" rows="4" name="message" className="contactInputMessage" />
          <input type="submit" value="Send" className='contactButton' />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  )
}

export default Contact