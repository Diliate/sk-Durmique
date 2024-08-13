import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { analytics } from "./firebase/firebase";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const Home = lazy(() => import("./components/Home/Home"));
const ContactPage = lazy(() => import("./components/ContactPage/ContactPage"));
const AppointmentPage = lazy(() =>
  import("./components/AppointmentPage/AppointmentPage")
);
const Login = lazy(() => import("./components/login/login"));
const AboutDoctor = lazy(() => import("./components/AboutPage/AboutDoctor"));
const AboutClinic = lazy(() => import("./components/AboutPage/AboutClinic"));
const Specialservice = lazy(() =>
  import("./components/ServicePage/Specialservice")
);
const Specialservicedetail = lazy(() =>
  import("./components/ServicePage/Specialservicedetail")
);
const Normalservice = lazy(() =>
  import("./components/ServicePage/Normalservice")
);
const Normalservicedetail = lazy(() =>
  import("./components/ServicePage/Normalservicedetail")
);
const Normalserviceindividual = lazy(() =>
  import("./components/ServicePage/Normalserviceindividual")
);
const Blog = lazy(() => import("./components/Blog/Blogpage"));
const Testimonial = lazy(() => import("./components/Testimonial/Testimonial"));

function AppContent() {
  const location = useLocation();
  const [, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);

    // Debugging the analytics object
    if (analytics && typeof analytics.logEvent === "function") {
      analytics.logEvent("page_view", { page_path: location.pathname });
    } else {
      console.warn(
        "Analytics not initialized or logEvent function not available"
      );
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Suspense
          fallback={
            <div
              style={{
                minHeight: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading...
            </div>
          }
        >
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
            <Route
              path="/services/normal/:id/:title"
              element={<Normalserviceindividual />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
