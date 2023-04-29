import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/FindSome.png'

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
    <><div className='section-about'>
      <div className='container-info'>
        <div className='left-info'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={Logo} alt='logo de la empresa' width={140} height={100} />
            <h2 style={{ color: 'purple' }}>Formulario de Contacto</h2>
          </div>
        </div>
      </div>
    </div><div className='form-container' style={{display: 'flex',alignItems: 'center'}}>
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
      </div></>
      
  );
  
}

export default ContactForm;
