import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Section id="refund" className="py-10">
          <div className="container">
            <h2 className="h2 mb-4">Refund Policy</h2>
            <p className="body-2 text-n-4">Refund policy content goes here.</p>
          </div>
        </Section>
        <Section id="contact" className="py-10">
          <div className="container">
            <h2 className="h2 mb-4">Contact Us</h2>
            <p className="body-2 text-n-4">Contact information goes here.</p>
          </div>
        </Section>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
