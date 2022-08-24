import React from 'react';
import { sendForm } from 'emailjs-com';

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    sendForm('service_6ebkcfa', 'template_hplii1x', event.target, 'user_IhOvwPmZx03tapCaAwqBf')
      .then(() => {
        alert("message sent successfully. ")
        event.target.reset();
      })
      .catch((error) => {
        alert(error.text)
      })
  }

  return (
    <div className='row my-5' id='contact' >
      <h1 className='header'>
        Contact
      </h1>
      <div className='col-md-6 px-3 py-3' style={{ textAlign: 'left' }} data-aos='zoom-in'>
        <h3>
          Lets talk about work
        </h3>
        <i className="fas fa-globe-asia"></i>Address: New Delhi,India
        <br />
        <i className="fas fa-envelope"></i>Email: shubham7811@yahoo.com
      </div>
      <div className='col-md-6' data-aos='fade-up'>
        <div className='col-md-6' data-aos='zoom-in'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input className='textInput my-2' type="text" name="name" placeholder="Name" required="" />
            <br />
            <input className='textInput my-2' type="email" name="email" placeholder="Email Address" required="" />
            <br />
            <textarea className='textInput my-2' name="message" placeholder="Message" required=""></textarea>
            <br />
            <input className='customBtn' type="submit" value="Send" />
            <br /><br />
          </form>
        </div>
      </div>
    </div >
  )
}