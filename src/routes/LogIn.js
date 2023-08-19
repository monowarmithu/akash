import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../Assets/shomitro-kumar-ghosh-fUrrQ4y-ENI-unsplash.jpg";
import LogForm from "../components/Log";

function LogIn() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImg} btnClass="hide" />

      <LogForm />
    </>
  );
}

export default LogIn;
