import React from "react";
import doctorImage from "../../assets/images/Doctorpic.png"; // Adjust the path if necessary
import "./AboutDoctor.css";

function AboutDoctor() {
  return (
    <>
      <div
        className="about-doctor-container"
        style={{
          minHeight: "500px",
        }}
      >
        <h1 className="main-heading">About Dr. Shweta Kesarwani</h1>
        <div className="doctor-content">
          <div className="doctor-details">
            <h2 className="sub-heading">Dr. Shweta Kesarwani</h2>
            <p className="sub-heading-desc">
              Top Dermatologist & Cosmetologist in Greater Faridabad
            </p>
            <section className="biography">
              <img
                src={doctorImage}
                alt="Dr. Shweta Kesarwani"
                className="doctor-image-inline"
              />
              <p>
                Dr. Shweta Kesarwani is a highly respected dermatologist and
                cosmetologist in Greater Faridabad, known for her extensive
                expertise and dedication to patient care. With over 20 years of
                experience in the field, she has built a reputation for
                delivering exceptional dermatological and cosmetic treatments.
              </p>
              <p>
                Born and raised in Meerut, Dr. Kesarwani developed a passion for
                medicine at a young age. She pursued her medical degree at LLRM
                Medical College, Meerut, where she graduated with honors. Driven
                by her commitment to continuous learning, she completed her
                post-graduation in dermatology and cosmetology, honing her
                skills and expanding her knowledge.
              </p>
              <p>
                Dr. Kesarwani began her professional career at the prestigious
                Asian Hospital in Faridabad, where she gained invaluable
                experience treating a diverse range of dermatological
                conditions. She later served at QRG Hospital, where her
                expertise and compassionate approach earned her the trust and
                admiration of both patients and colleagues.
              </p>
              <p>
                In addition to her clinical practice, Dr. Kesarwani is an active
                participant in national and international dermatology
                conferences, staying abreast of the latest advancements and
                innovations in the field. Her holistic approach to patient care
                ensures that each individual receives personalized treatments
                tailored to their specific needs.
              </p>
              <p>
                Dr. Kesarwani's dedication to excellence has made her a
                sought-after specialist for both common and complex
                dermatological and cosmetic issues. Her warm demeanor, coupled
                with her unwavering commitment to patient satisfaction, makes
                her an excellent choice for those seeking top-quality care in
                Greater Faridabad.
              </p>
            </section>
            <section className="professional-experience">
              <h2 className="sub-heading">Professional Experience</h2>
              <ul>
                <li>20 years of experience in dermatology and cosmetology</li>
                <li>Formerly served at Asian Hospital, Faridabad</li>
                <li>Formerly served at QRG Hospital, Faridabad</li>
                <li>Regular attendee and speaker at dermatology conferences</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutDoctor;
