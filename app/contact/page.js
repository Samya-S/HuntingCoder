"use client"

import { useState } from 'react'
import styles from './contact.module.css'

const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {phone, name, email, desc};

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        alert("Thanks for contacting us");
        setphone('')
        setname('')
        setdesc('')
        setemail('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const handleChange = (event) => {
    if (event.target.name == 'phone') {
      setphone(event.target.value)
    }
    else if (event.target.name == 'email') {
      setemail(event.target.value)
    }
    else if (event.target.name == 'desc') {
      setdesc(event.target.value)
    }
    else if (event.target.name == 'name') {
      setname(event.target.value)
    }
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name:</label>
          <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name='name' aria-describedby="emailHelp" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Enter your email address:</label>
          <input className={styles.input} type="email" value={email} onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" required />
          <div id="emailHelp" className={styles.formtext}>We will never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Enter your phone number:</label>
          <input className={styles.input} type="phone" value={phone} onChange={handleChange} name='phone' id="phone" required />
        </div>
        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="desc">Elaborate your concern:</label>
          <textarea className={styles.inputDesc} value={desc} onChange={handleChange} name='desc' id="desc" rows={5} required />
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
