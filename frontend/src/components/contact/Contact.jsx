import style from './contact.module.css';
import { useState } from 'react';
export default function Contact() {
    const formVariable = {
        email: '',
        name: '',
        subject: '',
        message: ''
    }
    const [form, setForm] = useState(formVariable)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev, [name]: value
        })
        )
    }




    const submitform = async(e) => {
        e.preventDefault()
        const req = await fetch('http://localhost:3000/', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(req.ok){
            const res=await req.json();
            alert('message sent successfully!')
        }
        else{
            alert('failed to send message')
        }


    }
    return (<>
        <section className={style.contact} id="contact">
            <h1 className="fs-h2">Contact</h1>
            <h2 className="fs-p">I’d love to hear from you—reach out for any opportunities or questions!</h2>

            <div className={style.formcontainer}>
                <form onSubmit={submitform} className={style.form}>
                    <h1 className='fs-h4' style={{ color: 'blueviolet', border: '0px solid', textAlign: 'center' }}>Connect With Me 🚀</h1>
                    <input className='fs-p' type="email" name="email" placeholder='Your Email' onChange={handleChange} />
                    <input className='fs-p' type="text" name="name" placeholder='Your Name' onChange={handleChange} />
                    <input className='fs-p' type="text" name="subject" placeholder='Subject' onChange={handleChange} />
                    <textarea className={`${style.mess} fs-p`} name="message" placeholder='Message' onChange={handleChange}></textarea>
                    <button className={`${style.button} fs-p`} type="submit">SUBMIT </button>
                </form>
            </div>

        </section>
    </>)
}