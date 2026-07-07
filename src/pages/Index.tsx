import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import WhatWeDo from "@/components/WhatWeDo";
import Industries from "@/components/Industries";
import Applications from "@/components/Applications";
import Platform from "@/components/Platform";
import HowItWorks from "@/components/HowItWorks";
import BuiltInHouse from "@/components/BuiltInHouse";
import WhySolarSentinel from "@/components/WhySolarSentinel";
import MonitoringSolutions from "@/components/MonitoringSolutions";
import VisionBreak from "@/components/VisionBreak";
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
      <Industries />
      <Applications />
      <Platform />
      <HowItWorks />
      <BuiltInHouse />
      <WhySolarSentinel />
      <MonitoringSolutions />
      <VisionBreak />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
