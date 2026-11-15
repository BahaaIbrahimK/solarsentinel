import Navigation from "@/components/Navigation";
import FilmHero from "@/components/home_v1/FilmHero";
import Intro from "@/components/home_v1/Intro";
import HowWeWork from "@/components/home_v1/HowWeWork";
import BuiltAndFlown from "@/components/home_v1/BuiltAndFlown";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* Version 1 of the Nov 2026 redesign (kept for comparison at /v1): film, one statement, how we work, proof, team, contact. */
const IndexV1 = () => (
  <div className="min-h-screen">
    <Navigation />
    <FilmHero />
    <Intro />
    <HowWeWork />
    <BuiltAndFlown />
    <Team />
    <Contact />
    <Footer />
  </div>
);

export default IndexV1;
