import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../Assets/shomitro-kumar-ghosh-fUrrQ4y-ENI-unsplash.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
