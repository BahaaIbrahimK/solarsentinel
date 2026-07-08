import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import BuiltInHouse from "@/components/BuiltInHouse";
import WhySolarSentinel from "@/components/WhySolarSentinel";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsBand />
      <WhatWeDo />
      <HowItWorks />
      <Industries />
      <BuiltInHouse />
      <WhySolarSentinel />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
