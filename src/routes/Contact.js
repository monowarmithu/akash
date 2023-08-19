import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../Assets/hemendra-ahuja-WWDXwam1jG4-unsplash.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
