import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Statistic from "./components/Statistic";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto bg-black ">
        <Hero />
        <Statistic />
        <AboutUs />
        <Course />
        <Contact />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default App;
