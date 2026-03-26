import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import MarketFocus from "@/components/MarketFocus";
import BusinessModel from "@/components/BusinessModel";
import Differentiation from "@/components/Differentiation";
import Traction from "@/components/Traction";
import Team from "@/components/Team";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Services />
      <MarketFocus />
      <BusinessModel />
      <Differentiation />
      <Traction />
      <Team />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
