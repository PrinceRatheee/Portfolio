import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallex/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
const App = () => {
  return <div>
      <section id="Homepage">
        <Navbar/>
        <Hero className="hero-section"/>
      </section>
      <section id="Services"><Parallax type="services"/></section>
     
      <section >
        <Services/>
      </section>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section id="Portfolio"><Parallax type="portfolio"/>

      </section>
      <br /><br />
      <Portfolio />

      <br /><br /><br /><br /><br /><br /><br /> <br />
      <div  className="h-[0.2rem] w-[80%] bg-white mx-auto md:mt-[40rem] mt-[120rem]"/>
      <section id="Contact">
        <Contact/>
      </section>
  </div>;
};

export default App;
