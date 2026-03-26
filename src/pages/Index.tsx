import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Traction from "@/components/Traction";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Traction />
      <Team />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
