import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../Assets/shomitro-kumar-ghosh-fUrrQ4y-ENI-unsplash.jpg";
import SignForm from "../components/Sign";

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImg} btnClass="hide" />

      <SignForm />
    </>
  );
}

export default SignUp;
