import React, { useState } from "react";
import "./AppointmentPage.css";
import backgroundImage from "../../assets/images/background.jpg";
// import clinicImage from "../../assets/images/clinic.jpg";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    clinic: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Facial Treatment",
    "Microdermabrasion",
    "Chemical Peel",
    "Laser Therapy",
    "Acne Treatment",
    "Anti-Aging",
    "Hydration Treatment",
    "Skin Tightening",
    "Hair Removal",
    "Pigmentation Correction",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.service) errors.service = "Service type is required";
    if (!formData.clinic) errors.clinic = "Clinic selection is required";
    if (!formData.message) errors.message = "Message is required";

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await addDoc(collection(db, "appointments"), formData);
        alert("Appointment requested successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          service: "",
          clinic: "",
          message: "",
        });
        setFormErrors({});
      } catch (error) {
        console.error("Error sending message:", error);
        alert(
          "There was an error sending your appointment request. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <div className="appointment-page">
        <div className="appointment-page-container">
          <div
            className="appointment-form-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="appointment-form-container">
              <h2>Request for your consultation</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <span className="error">{formErrors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <span className="error">{formErrors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phone && (
                    <span className="error">{formErrors.phone}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {formErrors.date && (
                    <span className="error">{formErrors.date}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Services:</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {formErrors.service && (
                    <span className="error">{formErrors.service}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Clinic:</label>
                  <select
                    name="clinic"
                    value={formData.clinic}
                    onChange={handleChange}
                  >
                    <option value="">Select a clinic</option>
                    <option value="Clinic One">Clinic One</option>
                    <option value="Clinic Two">Clinic Two</option>
                  </select>
                  {formErrors.clinic && (
                    <span className="error">{formErrors.clinic}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Detailed Query:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {formErrors.message && (
                    <span className="error">{formErrors.message}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="appointment-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;
