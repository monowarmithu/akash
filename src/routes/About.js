import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/unkknown-traveller-l2-gRPhph60-unsplash.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
