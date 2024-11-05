import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <section className="contact">
      <form>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder="Enter Your Name" name='name' required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="email" className="field" placeholder="Enter Your Email" name="email" required />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message" id="" className="field mess" placeholder='Enter Your message' required ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      </section>
    </div>
  )
}

export default Contact
