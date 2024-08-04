import React from 'react'

const Contact = () => {
  return (
    <section className='contact'>
        <header>
            <h2 className='h2 article-title'>Contact</h2>
        </header>
        <section className='mapbox'>
            <figure>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.429138387615!2d77.64790028792096!3d12.964986258414601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13fe983abe4b%3A0x10b5643b3f5c96ec!2sJeevan%20Bima%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1722809918571!5m2!1sen!2sin" 
            width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </figure>
        </section>
        <section className='contact-form'>
            <h3 className='h3 form-title'>Contact Form</h3>
            <form className='form'>
                  <div className='input-wrapper'>
                    <input type="text" name='fullname' id='fullname' className='form-input' placeholder='Name' />
                    <input type="email" name='email' id='email' className='form-input' placeholder='Email' />
                  </div>
                  <textarea name="message" id="message" className='form-input' placeholder='Your Message'></textarea>
                  <button className='form-btn' type='submit'><span>Send Message</span></button>
            </form>
        </section>
    </section>
  )
}

export default Contact