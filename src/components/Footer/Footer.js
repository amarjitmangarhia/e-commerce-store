import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Footer = () => {
  let [sent, setSent] = useState(false)
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('email_newsletter', 'template_z3lfsh5', form.current, 'EC5SUwKQgu1g3-CdC')
      .then((result) => {
        setSent(true)
          console.log(result.text);
          name.current.value = ""
          email.current.value = ""  
      }, (error) => {
          console.log(error.text);
      });
    }


  

  return (
    <div className='bg-[#3F4C62] text-white p-8 mt-4'>
       <p className='text-4xl text-left '>TechCart</p>
       <div className='w-100 h-2 bg-white mb-4 mt-2'></div>
       <div className='md:flex justify-between'>
            <div className='text-center my-2'>
                <h2 className='text-2xl'>About Us</h2>
                <p>Our Team</p>
                <p>Contact Us</p>
            </div>
            <div className=' mx-auto text-center my-2 flex-1'>
                <h2 className='text-3xl mb-2'>Subscribe Us</h2>
                <form ref={form} onSubmit={sendEmail}>
                <input ref={name} type='text' name="user_name" placeholder='name...' className='my-2 p-2 rounded bg-dark md:w-2/6'/> <br />
                <input ref={email} type='text' name='user_email' placeholder='email...' className='p-2 rounded bg-dark md:w-2/6'/> <br />
                <button className='bg-white text-black p-2 rounded my-2 w-[120px] sm:w-2/6'>{sent ? "Subscribed" : "Submit"}</button>
                </form>
            </div>
            <div className='legal text-center'>
                <h2 className='text-2xl'>Legal</h2>
                <p>Privacy Policy</p>
                <p>Cookie Setting</p>
            </div>
       </div>
       <div className='w-100 h-2 bg-white mb-4 mt-10 '></div>
       <div className='copyright flex flex-col justify-between md:flex-row text-center'>
            <p>All Right Reserved</p>
            <p>© 2022 TechCart</p>
       </div>
    </div>
  )
}

export default Footer