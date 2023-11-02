import React from 'react'
import classes from "./Contact.module.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Contact = () => {

  let styles = {

    h3: {

    },
    h4: {

    }

    
  }

  return (
    <>
    <Header />
    <div className="w-9/12 mx-auto">
        <h2>Contact TechCart</h2>
        <p>We're thrilled that you want to get in touch with TechCart! Whether you have a question, feedback, or just want to say hello, we're here to assist you. You can reach us through the following contact methods:</p>
        <h3>Contact Information</h3>
        <h4>General Inquiries:</h4>
        <p>For general inquiries or information about TechCart, please contact our customer support team:</p>
        <p><strong>Email: </strong> info@techcart.com</p>
        <p><strong>Phone: </strong>+1 (555) 123-4567</p>
        <p><strong>Address: </strong>123 Tech Street, Suite 101, TechCity, TC 12345</p>
        <h4>Customer Support:</h4>
        <p>If you require assistance with an order, product, or account-related issue, our dedicated customer support team is here to help:</p>
        <p><strong>Email: </strong> support@techcart.com</p>
        <p><strong>Phone: </strong>+1 (555) 987-6543</p>
        <p><strong>Support Hours: </strong>Monday - Friday, 9:00 AM - 6:00 PM (UTC-5)</p>
        <h4>Connect with Us</h4>
        <p>Follow us on social media to stay updated with the latest TechCart news, product releases, and tech trends:</p>
        <p><strong>Facebook: TechCartOfficial</strong></p>
        <p><strong>Twitter: @TechCartTweets</strong></p>
        <p><strong>Instagram: @TechCartPics</strong></p>
        <h4>Get Help</h4>
        <p>If you have a specific question or need assistance, you may also find answers in our Frequently Asked Questions (FAQ) section.</p>
        <h4>Send Us a Message</h4>
        
        <div className={classes.from}></div>

    </div>
    <Footer />
    </>

  )
}

export default Contact