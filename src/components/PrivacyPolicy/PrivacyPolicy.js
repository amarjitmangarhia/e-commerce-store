import React from 'react'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'

const PrivacyPolicy = () => {

   

  return (
    <div className="">
      <Header />
      <header className="my-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </header>

      <section className="mb-6">
        <p className="text-gray-600">Effective Date: OCT 1 2024</p>
        <p className="text-gray-800">
          Thank you for using TechCart! This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information. Please read this Privacy Policy carefully to understand our practices.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

        <h3 className="text-xl font-bold mb-2">Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide, such as your name, email address, and any other information you choose to share with us.</p>

        <h3 className="text-xl font-bold mb-2">Usage Data</h3>
        <p>We may collect information about how you interact with our website or application, including your IP address, browser type, and pages viewed. This information is collected using cookies and similar technologies.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul className="list-disc list-inside">
          <li>To provide and maintain our services</li>
          <li>To improve our services and develop new features</li>
          <li>To communicate with you, respond to your inquiries, and provide customer support</li>
          <li>To personalize your experience and deliver relevant content</li>
          <li>To analyze usage patterns and optimize our website/application</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Data Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy.</p>
        <p>We may share your information with trusted third-party service providers who assist us in operating our website/application, conducting our business, or servicing you. These parties are obligated to keep your information confidential.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Security</h2>
        <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Your Choices</h2>
        <p>You can control cookies through your browser settings. Please note that disabling cookies may affect your experience on our website/application.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Updates to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p>If you have any questions or concerns about our Privacy Policy, please contact us.</p>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy