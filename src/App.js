import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import ContactPage from "./components/ContactPage/ContactPage";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import { AuthProvider } from "./contexts/authContext";
import Login from "./components/login/login";
import { analyticsPromise } from "./firebase/firebase";

import AboutDoctor from "./components/AboutPage/AboutDoctor";
import AboutClinic from "./components/AboutPage/AboutClinic";

import Specialservice from "./components/ServicePage/Specialservice";
import Specialservicedetail from "./components/ServicePage/Specialservicedetail";

import Blog from "./components/Blog/Blogpage";
import Testimonial from "./components/Testimonial/Testimonial";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Normalservice from "./components/ServicePage/Normalservice";
import Normalservicedetail from "./components/ServicePage/Normalservicedetail";

function AnalyticsLogger() {
  const location = useLocation();
  const [analyticsInstance, setAnalyticsInstance] = useState(null);

  useEffect(() => {
    analyticsPromise.then((analytics) => {
      if (analytics) {
        setAnalyticsInstance(analytics);
      }
    });
  }, []);

  useEffect(() => {
    if (analyticsInstance) {
      analyticsInstance.logEvent("page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    } else {
      console.warn("Analytics is not initialized yet.");
    }
  }, [location, analyticsInstance]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/clinic" element={<AboutClinic />} />
            <Route path="/about/doctor" element={<AboutDoctor />} />

            <Route path="/services/special" element={<Specialservice />} />
            <Route
              path="/services/special/:id"
              element={<Specialservicedetail />}
            />

            <Route path="/services/normal" element={<Normalservice />} />
            <Route
              path="/services/normal/:id"
              element={<Normalservicedetail />}
            />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Testimonial" element={<Testimonial />} />

            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
