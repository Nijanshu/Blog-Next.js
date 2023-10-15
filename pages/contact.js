import React, { useState } from 'react';
import styles from '../styles/contact.module.css'
import Head from 'next/head';

const Contact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [desc, setdesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { phone, name, email, desc };
        console.log(data)
        fetch('https://newwwbackkk.onrender.com/api/notes/addnote', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
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
    const handleChange = (e) => {
        if (e.target.name == 'phone') {
            setphone(e.target.value)
        }
        else if (e.target.name == 'email') {
            setemail(e.target.value)
        }
        else if (e.target.name == 'desc') {
            setdesc(e.target.value)
        }
        else if (e.target.name == 'name') {
            setname(e.target.value)
        }
    }

    return <div className={styles.container}>
         <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
        <h1 className='text-4xl font-serif my-4'>Contact Us</h1>
        <form onSubmit={handleSubmit}>
            <div className={styles.mb3}>
                <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
                <input type="text" value={name} onChange={handleChange} className={styles.formcontrol} id="name" name='name' aria-describedby="emailHelp" />
            </div>
            <div className={styles.mb3}>
                <label htmlFor="email" className={styles.formlabel}>Email address</label>
                <input type="email" value={email} onChange={handleChange} className={styles.formcontrol} name='email' id="email" aria-describedby="emailHelp" />
            </div>
            <div className={styles.mb3}>
                <label htmlFor="phone" className={styles.formlabel}>Phone</label>
                <input type="phone" value={phone} onChange={handleChange} className={styles.formcontrol} name='phone' id="phone" />
            </div>
            <div className={styles.mb3}>
                <label htmlFor="desc" className={styles.formlabel}>Comments: </label>
                <textarea value={desc} onChange={handleChange} className={styles.textarea} placeholder="Write your opinion" name='desc' id="desc" />
            </div>
            <button type="submit" className={styles.submit}>Submit</button>
        </form>
    </div>;
};

export default Contact;