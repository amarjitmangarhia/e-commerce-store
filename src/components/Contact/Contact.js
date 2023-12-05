import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold my-4">Contact TechCart</h2>
        <p className="text-gray-800 mb-6">
          We're thrilled that you want to get in touch with TechCart! Whether you have a question, feedback, or just want to say hello, we're here to assist you. You can reach us through the following contact methods:
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>

        <h4 className="text-xl font-bold mb-1">General Inquiries:</h4>
        <p>Email: <strong>info@techcart.com</strong></p>
        <p>Phone: <strong>+1 (555) 123-4567</strong></p>
        <p>Address: <strong>123 Tech Street, Suite 101, TechCity, TC 12345</strong></p>

        <h4 className="text-xl font-bold mb-1 mt-4">Customer Support:</h4>
        <p>Email: <strong>support@techcart.com</strong></p>
        <p>Phone: <strong>+1 (555) 987-6543</strong></p>
        <p>Support Hours: <strong>Monday - Friday, 9:00 AM - 6:00 PM (UTC-5)</strong></p>

        <h4 className="text-xl font-bold mb-1 mt-4">Connect with Us</h4>
        <p>Follow us on social media to stay updated with the latest TechCart news, product releases, and tech trends:</p>
        <p><strong>Facebook:</strong> TechCartOfficial</p>
        <p><strong>Twitter:</strong> @TechCartTweets</p>
        <p><strong>Instagram:</strong> @TechCartPics</p>

        <h4 className="text-xl font-bold mb-1 mt-4">Get Help</h4>
        <p>If you have a specific question or need assistance, you may also find answers in our Frequently Asked Questions (FAQ) section.</p>

        <h4 className="text-xl font-bold mb-1 mt-4">Send Us a Message</h4>
        <div className="bg-gray-200 p-4 rounded-md">
          <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your email address"
              />
            </div>

            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
