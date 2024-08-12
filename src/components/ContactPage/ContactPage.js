import React, { useState } from "react";
import "./ContactPage.css";
import ContactBanner from "../../assets/images/contactbanner.png";
import { FaPhone, FaEnvelope, FaFax, FaMapMarkerAlt } from "react-icons/fa";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), form);
      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <div className="contact-page">
        <div className="header-container">
          <div className="banner">
            <img src={ContactBanner} alt="Banner" />
          </div>
          <h1 className="contact-heading">Contact Us</h1>
          <div className="contact-intro">
            <p>
              We are here to assist you with any inquiries or concerns. Feel
              free to reach out to us through any of the contact methods listed
              below, or use the form to get in touch. Our dedicated team is
              available to provide you with the support you need. We look
              forward to hearing from you! Thank you for choosing our services.
              We value your feedback and are committed to providing you with the
              best experience possible.
            </p>
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-details">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <FaPhone className="icon" />
              <div>
                <p>Phone Number</p>
                <p>+91 9818291166</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div>
                <p>Email Address</p>
                <p>skdurmiqe@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaFax className="icon" />
              <div>
                <p>Fax Address</p>
                <p>123-456-7890</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <p>Location</p>
                <p>Plot No B 56 BPTP, Sector 88, Greater Faridabad</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <p>Other Clinic Location</p>
                <p>
                  NAMAN SKIN HAIR AND LASER CLINIC, NIT 5, KC road, Near the
                  Bank of Baroda
                </p>
              </div>
            </div>
          </div>
          <div className="get-in-touch">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="additional-info">
          <div className="google-map">
            <h2>Find us on Google</h2>
            <div className="responsive-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14015.243936067626!2d77.357841!3d28.413611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d3b4d4c15b3%3A0xc73d5200a1f8d2b1!2s123%20Clinic%20Street%2C%20Health%20City!5e0!3m2!1sen!2sus!4v1627036315005!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ContactPage;
