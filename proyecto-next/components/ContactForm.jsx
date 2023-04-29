import React, { useState } from 'react';
import Link from 'next/link';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Lógica para enviar el mensaje al servidor
  }

  return (
<form onSubmit={handleSubmit} className="contact-form">
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message:</label>
    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" />
  </div>

  <button type="submit" className="btn">Send</button>
  <button className='btn-text'>
            <Link href='/'>Vuelve al Home</Link>
          </button>
</form>
  );
  
}

export default ContactForm;
