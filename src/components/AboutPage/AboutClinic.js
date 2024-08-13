import React from "react";
import "./AboutClinic.css";
import clinicImage from "../../assets/images/clinic.jpg";
import otherClinicImage from "../../assets/images/clinic.jpg";

const AboutClinic = () => {
  return (
    <>
      <div
        className="about-clinic"
        style={{
          minHeight: "500px",
        }}
      >
        <section className="our-clinic">
          <div className="clinic-content">
            <div className="clinic-image">
              <img src={clinicImage} alt="Our Clinic" />
            </div>
            <div className="clinic-description">
              <h1>About Our Clinic</h1>
              <p>
                Welcome to our clinic, where we provide top-notch healthcare
                services with a focus on patient comfort and satisfaction. Our
                experienced team of professionals is dedicated to delivering
                personalized care tailored to your needs.
              </p>
              <p>
                We offer a comprehensive range of services, including general
                consultations, specialized treatments, and advanced diagnostic
                procedures. Our state-of-the-art facilities and cutting-edge
                technology ensure that you receive the best possible care.
              </p>
              <p>
                Our mission is to create a welcoming environment where every
                patient feels valued and respected. We believe in a holistic
                approach to health and wellness, striving to enhance your
                overall well-being and quality of life.
              </p>
              <p>
                Our clinic also places a strong emphasis on preventative care.
                We provide health screenings, immunizations, and wellness
                programs designed to help you maintain your health and prevent
                potential issues before they arise. Our dedicated team works
                closely with each patient to develop a personalized wellness
                plan, ensuring you receive the right care at the right time.
              </p>
              <p>
                At our clinic, we prioritize patient education and empowerment.
                We believe that informed patients make better decisions about
                their health. That's why we take the time to explain your
                diagnosis, treatment options, and preventive measures in detail,
                answering any questions you may have. Your health journey is our
                top priority, and we are here to support you every step of the
                way.
              </p>
            </div>
          </div>
        </section>
        <section className="other-clinic">
          <div className="other-clinic-content">
            <div className="other-clinic-description">
              <h1>Discover Our Other Clinic</h1>
              <p>
                Our other clinic is dedicated to providing excellent care with a
                team of skilled professionals. This location offers a range of
                services and specialties designed to meet the diverse needs of
                our patients.
              </p>
              <p>
                At this clinic, you will find a welcoming environment and
                state-of-the-art facilities. We are committed to providing
                high-quality care and ensuring that every patient feels valued
                and respected.
              </p>
              <p>
                We offer a wide variety of treatments and consultations,
                focusing on comprehensive care and advanced medical solutions.
                Our expert team is here to support you through every step of
                your healthcare journey.
              </p>
              <p>
                In addition to our broad range of services, our other clinic
                specializes in certain areas of medicine that complement our
                primary offerings. With a focus on innovative treatments and
                patient-centered care, we aim to address a variety of health
                concerns with the latest medical advancements and a
                compassionate approach.
              </p>
            </div>
            <div className="other-clinic-image">
              <img src={otherClinicImage} alt="Other Clinic" />
            </div>
          </div>
          <div className="clinic-location">
            <h2>Location of Dermique Clinic</h2>
          </div>
          <div className="map-container">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.373793245254!2d77.3299264760197!3d28.407050165845362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fa7e6317e43%3A0x8f48d8d8a1a20d65!2s123%20Health%20Street%2C%20Greater%20Faridabad!5e0!3m2!1sen!2sin!4v1693914721141!5m2!1sen!2sin"
              width="600"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="timings">
            <h1>Timings of Our Clinics</h1>
            <div className="timings-inner-container">
              <div className="container-1">
                <h3>Sk Durmiqe Clinic</h3>
                <div className="timings-1">
                  <p>
                    <span>Days:</span> Monday, Wednesday, Thursday, Saturday
                  </p>
                  <p>
                    <span>Timings:</span> 6pm to 8pm
                  </p>
                </div>
                <div className="timings-2">
                  <p>
                    <span>Days:</span> Tuesday & Friday
                  </p>
                  <p>
                    <span>Timings:</span> 6pm to 7:30pm
                  </p>
                </div>
              </div>

              <div className="container-2">
                <h3>NIT 5 Clinic</h3>
                <div className="timings-1">
                  <p>
                    <span>Days:</span> Monday to Saturday
                  </p>
                  <p>
                    <span>Timings:</span> 10:30 am to 1 pm
                  </p>
                </div>
                <div className="timings-2">
                  <p>
                    <span>Days:</span> Tuesday & Friday
                  </p>
                  <p>
                    <span>Timings:</span> 8 pm to 9 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutClinic;
