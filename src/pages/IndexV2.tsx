import Navigation from "@/components/Navigation";
import FilmHero from "@/components/home_v2/FilmHero";
import Intro from "@/components/home_v2/Intro";
import HowWeWork from "@/components/home_v2/HowWeWork";
import BuiltAndFlown from "@/components/home_v2/BuiltAndFlown";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* Version 2 of the Nov 2026 redesign (kept for comparison at /v2). */
const IndexV2 = () => (
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

export default IndexV2;
